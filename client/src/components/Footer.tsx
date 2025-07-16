import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Wrench, Phone, Smartphone, Mail, MapPin, Tag, Shield } from "lucide-react";
import companyData from "@/config/company.json";

const iconMap = {
  Tag,
  Shield
};

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
                <h3 className="text-xl font-bold">{companyData.company.shortName}</h3>
                <p className="text-sm text-gray-400">Sanitär-Technik</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {companyData.company.description}
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 w-10 h-10 p-0"
                onClick={() => window.open(companyData.socialMedia.facebook, "_blank")}
              >
                <i className="fab fa-facebook-f" />
              </Button>
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 w-10 h-10 p-0"
                onClick={() => window.open(companyData.socialMedia.whatsapp, "_blank")}
              >
                <i className="fab fa-whatsapp" />
              </Button>
              <Button 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 w-10 h-10 p-0"
                onClick={() => window.open(companyData.socialMedia.googleMaps, "_blank")}
              >
                <i className="fab fa-google" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {companyData.services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${companyData.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <a href={`tel:${companyData.contact.mobile.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.contact.mobile}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{companyData.contact.address.street}, {companyData.contact.address.city}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Zertifikate</h4>
            <div className="space-y-4">
              {companyData.certifications.map((cert, index) => {
                const IconComponent = iconMap[cert.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                      <IconComponent className={`h-6 w-6 ${cert.color}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{cert.name}</div>
                      <div className="text-xs text-gray-400">{cert.status}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <Separator className="my-12 bg-gray-700" />
        
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {companyData.company.name}. Alle Rechte vorbehalten.</p>
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