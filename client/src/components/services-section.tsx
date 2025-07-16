import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Bath, Flame, Leaf, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Notdienst 24h",
    description: "Schnelle Hilfe bei Wasserschäden, verstopften Rohren und Heizungsausfällen",
    color: "text-red-500",
    bgColor: "bg-red-100"
  },
  {
    icon: Bath,
    title: "Badsanierung",
    description: "Moderne Badplanung mit fachlich fundierter Beratung für Alt- und Neubau",
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    icon: Flame,
    title: "Heizungsanlagen",
    description: "Moderne Heizungs- und Solaranlagen mit Brennwert-Technik",
    color: "text-orange-500",
    bgColor: "bg-orange-100"
  },
  {
    icon: Leaf,
    title: "Umwelttechnik",
    description: "Regenwassernutzung und energiesparende Umwelttechnik",
    color: "text-green-500",
    bgColor: "bg-green-100"
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komplettservice von der Badplanung bis zur energiesparenden Heizungsanlage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              <CardHeader>
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-accent p-0 h-auto font-semibold"
                  onClick={scrollToContact}
                >
                  Mehr erfahren
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
