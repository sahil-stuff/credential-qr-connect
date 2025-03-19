
import React from 'react';
import Button from './Button';
import { ArrowRight, Shield, QrCode, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full">
        <div className="absolute top-16 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            Streamlined Credential Verification
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 text-balance animate-fade-up">
            Secure Digital Credentials with Verifiable Trust
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 text-balance max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Our platform verifies, shares, and manages digital credentials with seamless QR verification and W3C standards compliance for ultimate security and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button 
              size="lg" 
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stat Cards */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 relative z-10 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <div className="glass-card p-6 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Tamper-Proof</h3>
            <p className="text-sm text-foreground/70">Cryptographically secured credentials that cannot be forged or altered.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <QrCode className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Verification</h3>
            <p className="text-sm text-foreground/70">Scan and verify credentials in seconds with our advanced QR technology.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">W3C Compliant</h3>
            <p className="text-sm text-foreground/70">Built on open standards for global interoperability and acceptance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
