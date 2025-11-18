import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowLeft } from "lucide-react";
import { z } from "zod";

const resetSchema = z.object({
  email: z.string().email("Please enter a valid email address").max(255),
});

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = resetSchema.safeParse({ email });
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) throw error;

      setSent(true);
      toast({
        title: "Password Reset Email Sent",
        description: "Check your email for the password reset link.",
      });
    } catch (error: any) {
      toast({
        title: "Reset Failed",
        description: error.message || "Failed to send reset email",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cyan-500/10 via-white to-purple-500/10">
        <Card className="w-full max-w-md shadow-[0_0_32px_rgba(6,182,212,0.2)]">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-2xl">Check Your Email</CardTitle>
            <CardDescription>
              We've sent a password reset link to {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => navigate("/auth")}
              variant="outline"
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cyan-500/10 via-white to-purple-500/10">
      <Card className="w-full max-w-md shadow-[0_0_32px_rgba(6,182,212,0.2)]">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReset} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:opacity-90 transition-opacity"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>

            <Button
              type="button"
              onClick={() => navigate("/auth")}
              variant="ghost"
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
