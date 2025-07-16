import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import companyData from "@/config/company.json";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kundenbewertungen
          </h2>
          <p className="text-xl text-muted-foreground">
            Was unsere Kunden über uns sagen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyData.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-muted-foreground">Google</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 bg-primary">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}