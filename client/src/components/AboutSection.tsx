import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import companyData from "@/config/company.json";

export default function AboutSection() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(companyData.company.founded);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meisterbetrieb seit {companyData.company.founded}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Die Firma wurde {companyData.company.founded} von {companyData.company.owner}, Sanitärinstallateur- und Heizungsbaumeister gegründet. 
              Wir sind in den Bereichen der Haus und Umwelttechnik tätig.
            </p>
            <p className="text-muted-foreground mb-8">
              Das komplette Leistungsspektrum reicht von der Badplanung, für moderne und zweckmäßige Bäder 
              bis zur energiesparenden Heizungsanlage. Als kompetenter Partner stehen wir Ihnen auch in 
              Sachen Umwelttechnik zur Verfügung.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{yearsInBusiness}+</div>
                <div className="text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Notdienst</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-muted-foreground">Google Bewertung</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {companyData.certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{cert.name}</span>
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern bathroom renovation" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating contact card */}
            <div className="absolute bottom-6 left-6 right-6 glassmorphism rounded-xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-white" />
                </div>
                <div>
                  <div className="font-semibold">24h Notdienst</div>
                  <div className="text-sm opacity-90">{companyData.contact.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}