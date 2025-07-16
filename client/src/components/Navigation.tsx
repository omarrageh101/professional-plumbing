import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Wrench } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-lg border-b" : "glassmorphism"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">STO Oerlicke</h1>
              <p className="text-xs text-muted-foreground">Sanitär-Technik</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Über uns
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Bewertungen
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:06619427416" 
              className="hidden md:flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">0661 942 7416</span>
            </a>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Über uns
                  </button>
                  <button 
                    onClick={() => scrollToSection("testimonials")}
                    className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Bewertungen
                  </button>
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Kontakt
                  </button>
                  <div className="pt-4 border-t">
                    <a 
                      href="tel:06619427416" 
                      className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-semibold">0661 942 7416</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
