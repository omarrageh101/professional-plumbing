import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Smartphone, Mail, MapPin, Clock } from "lucide-react";
import companyData from "@/config/company.json";

export default function ContactSection() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${companyData.contact.address.street}, ${companyData.contact.address.city}, ${companyData.contact.address.country}`
  )}&output=embed`;

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-muted-foreground">
            Wir sind für Sie da - 24 Stunden, 7 Tage die Woche
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-muted/50 border-0 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Schnellkontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Telefon</div>
                    <a 
                      href={`tel:${companyData.contact.phone.replace(/\s/g, '')}`}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Mobil</div>
                    <a 
                      href={`tel:${companyData.contact.mobile.replace(/\s/g, '')}`}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {companyData.contact.mobile}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">E-Mail</div>
                    <a 
                      href={`mailto:${companyData.contact.email}`}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Adresse</div>
                    <div className="text-muted-foreground">
                      {companyData.contact.address.street}<br />
                      {companyData.contact.address.city}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Öffnungszeiten</span>
                  </div>
                  <div className="text-muted-foreground space-y-1">
                    <div>{companyData.businessHours.weekdays}</div>
                    <div>{companyData.businessHours.saturday}</div>
                    <div className="text-red-600 font-semibold">{companyData.businessHours.emergency}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-muted/50 border-0 h-96">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Standort</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden">
                  <iframe 
                    src={mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}