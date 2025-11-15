import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Heart, Trash2 } from "lucide-react";

const DashboardWishlist = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = async () => {
    try {
      const { data, error } = await supabase
        .from("wishlist")
        .select("*")
        .eq("user_id", user?.id)
        .order("added_at", { ascending: false });

      if (error) throw error;
      setWishlist(data || []);
    } catch (error: any) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("id", itemId);

      if (error) throw error;

      toast({
        title: "Removed from wishlist",
        description: "Item has been removed from your wishlist.",
      });

      fetchWishlist();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to remove",
        description: error.message,
      });
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

          <Tabs defaultValue="wishlist" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="profile" onClick={() => navigate("/dashboard")}>
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders" onClick={() => navigate("/dashboard/orders")}>
                Orders
              </TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>
          </Tabs>

          {wishlist.length === 0 ? (
            <Card>
              <CardContent className="py-16 text-center">
                <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
                <p className="text-muted-foreground mb-6">
                  Save items you love to buy them later
                </p>
                <Button onClick={() => navigate("/products")} className="gradient-primary">
                  Start Shopping
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((item) => (
                <Card key={item.id} className="hover-lift overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.product_image}
                      alt={item.product_name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{item.product_name}</h3>
                    <p className="text-lg font-bold text-primary mb-3">
                      ₦{parseFloat(item.product_price).toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => navigate(`/products/${item.product_id}`)}
                      >
                        View Item
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardWishlist;
