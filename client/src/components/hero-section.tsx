import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&h=1380')"
        }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ihr Meisterbetrieb für{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Sanitär & Heizung
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Seit 1999 in Fulda - Notdienst 24h • Meisterqualität • Faire Preise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = "tel:06619427416"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Jetzt anrufen
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="glassmorphism text-blue-200 border-white/20 hover:bg-white/20 hover:text-blue-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://wa.me/491715044073", "_blank")}
            >
              <i className="fab fa-whatsapp mr-2" />
              WhatsApp
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span>TÜV zertifiziert</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span>24h Notdienst</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>5.0 Google Bewertung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
