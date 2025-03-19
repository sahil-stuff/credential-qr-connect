
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white text-lg font-bold">VC</span>
          </span>
          <span className="hidden sm:inline">CredVerify</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a 
            href="#scanner" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            QR Scanner
          </a>
          <a 
            href="#verification" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Verification
          </a>
          <a 
            href="#sharing" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            W3C Standard
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[var(--navbar-height)] bg-white z-40 transform transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ "--navbar-height": isScrolled ? "60px" : "76px" } as React.CSSProperties}
      >
        <div className="flex flex-col p-6 space-y-6">
          <a 
            href="#features" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#scanner" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            QR Scanner
          </a>
          <a 
            href="#verification" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Verification
          </a>
          <a 
            href="#sharing" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            W3C Standard
          </a>
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="outline" className="w-full">
              Log In
            </Button>
            <Button className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
