import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Wrench, Phone, Smartphone, Mail, MapPin, Tag, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">STO Oerlicke</h3>
                <p className="text-sm text-gray-400">Sanitär-Technik</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Ihr Meisterbetrieb für Sanitär- und Heizungstechnik in Fulda. 
              Seit 1999 mit Erfahrung und Qualität.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 w-10 h-10 p-0"
                onClick={() => window.open("https://www.facebook.com", "_blank")}
              >
                <i className="fab fa-facebook-f" />
              </Button>
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 w-10 h-10 p-0"
                onClick={() => window.open("https://wa.me/491715044073", "_blank")}
              >
                <i className="fab fa-whatsapp" />
              </Button>
              <Button 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 w-10 h-10 p-0"
                onClick={() => window.open("https://www.google.com/maps/place/G%C3%BCntherstr.+9,+36043+Fulda", "_blank")}
              >
                <i className="fab fa-google" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Notdienst 24h</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Badsanierung</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Heizungsanlagen</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Solaranlagen</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Regenwassernutzung</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:06619427416" className="hover:text-white transition-colors">0661 942 7416</a>
              </li>
              <li className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <a href="tel:01715044073" className="hover:text-white transition-colors">0171 504 4073</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@oerlicke.de" className="hover:text-white transition-colors">info@oerlicke.de</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Güntherstr. 9, 36043 Fulda</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Zertifikate</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Tag className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Handwerkskammer</div>
                  <div className="text-xs text-gray-400">Zertifiziert</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">TÜV</div>
                  <div className="text-xs text-gray-400">Geprüft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-12 bg-gray-700" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Sanitär-Technik Oerlicke. Alle Rechte vorbehalten.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
