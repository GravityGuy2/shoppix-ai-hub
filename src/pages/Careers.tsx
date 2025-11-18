import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      department: "AI & Analytics",
      location: "Remote / San Francisco",
      type: "Full-time"
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / New York",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-cyan-500/10 via-white to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Help us build the future of e-commerce and empower millions of buyers and sellers worldwide
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Amazing Team</h3>
                  <p className="text-gray-600">Work with talented, passionate people from around the world</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Growth</h3>
                  <p className="text-gray-600">Continuous learning and career development opportunities</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Heart className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Great Benefits</h3>
                  <p className="text-gray-600">Comprehensive health, wellness, and work-life balance perks</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Briefcase className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Impact</h3>
                  <p className="text-gray-600">Make a real difference in how people shop and sell online</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Life at Shoppix</h2>
              <div className="space-y-4 text-gray-600 text-center max-w-3xl mx-auto">
                <p>
                  At Shoppix, we're building more than just a marketplace—we're creating a global community that connects people through commerce. Our team is diverse, innovative, and committed to excellence.
                </p>
                <p>
                  We believe in fostering an inclusive environment where everyone can thrive, learn, and make meaningful contributions. Whether you're working remotely or from one of our offices, you'll be part of a culture that values creativity, collaboration, and continuous improvement.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
              <div className="space-y-4">
                {openPositions.map((job, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.department}
                            </span>
                            <span>📍 {job.location}</span>
                            <span>⏰ {job.type}</span>
                          </div>
                        </div>
                        <Button className="gradient-primary">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h3>
                  <p className="text-muted-foreground mb-6">
                    We're always looking for talented individuals to join our team. Send us your resume and let us know what role you're interested in.
                  </p>
                  <Button size="lg" className="gradient-primary">
                    Submit General Application
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Health & Wellness</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comprehensive health insurance</li>
                    <li>• Dental and vision coverage</li>
                    <li>• Mental health support</li>
                    <li>• Fitness membership reimbursement</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Work-Life Balance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Flexible working hours</li>
                    <li>• Remote work options</li>
                    <li>• Generous PTO policy</li>
                    <li>• Paid parental leave</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Growth & Development</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Learning and development budget</li>
                    <li>• Conference attendance</li>
                    <li>• Mentorship programs</li>
                    <li>• Career progression paths</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Perks</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Competitive salary</li>
                    <li>• Stock options</li>
                    <li>• Team events and offsites</li>
                    <li>• Latest tech equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
