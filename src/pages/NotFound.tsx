
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-lg w-full text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-9xl font-bold text-primary/5">404</div>
          </div>
          <div className="relative z-10 py-16">
            <h1 className="text-4xl font-bold mb-4 animate-fade-up">Page Not Found</h1>
            <p className="text-lg text-foreground/70 mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Button 
                icon={<Home className="w-4 h-4" />}
                onClick={() => window.location.href = '/'}
              >
                Return Home
              </Button>
              <Button 
                variant="outline" 
                icon={<ArrowLeft className="w-4 h-4" />}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
