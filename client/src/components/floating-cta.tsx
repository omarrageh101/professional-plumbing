import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="floating-btn">
      <Button 
        size="lg"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        onClick={() => window.location.href = "tel:06619427416"}
      >
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-semibold">Soforthilfe</span>
        </div>
      </Button>
    </div>
  );
}
