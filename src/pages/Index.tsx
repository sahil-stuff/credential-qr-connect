import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import QRDemo from '@/components/QRDemo';
import VerificationSection from '@/components/VerificationSection';
import SharingSection from '@/components/SharingSection';
import Button from '@/components/Button';
import { Check, ArrowRight, QrCode, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider animate-fade-in">Core Features</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-up">
              A Complete Credential Solution
            </h3>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              Our platform offers all the tools you need to issue, verify, and share credentials with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<QrCode className="w-6 h-6 text-primary" />}
              title="QR Code Verification"
              description="Scan and verify credentials in seconds with our intuitive QR code technology."
              className="animate-fade-up"
              index={0}
            />
            
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-primary" />}
              title="Tamper-Proof Security"
              description="Advanced cryptography ensures credentials cannot be forged or altered."
              className="animate-fade-up"
              index={1}
            />
            
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-primary" />}
              title="Global Standards"
              description="W3C compliant for universal recognition and interoperability."
              className="animate-fade-up"
              index={2}
            />
          </div>
          
          <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
            <Button 
              variant="outline" 
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Explore All Features
            </Button>
          </div>
        </div>
      </section>
      
      {/* QR Scanner Demo */}
      <QRDemo />
      
      {/* Verification Section */}
      <VerificationSection />
      
      {/* W3C Standards Section */}
      <SharingSection />
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-up">
            Ready to Transform Your Credential Experience?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Join thousands of organizations that trust our platform for secure, verifiable credentials.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm">Easy Integration</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm">Enterprise Support</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm">99.9% Uptime</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm">Free Trial</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button 
              size="lg" 
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-white text-lg font-bold">VC</span>
                </span>
                <span>CredVerify</span>
              </div>
              <p className="text-sm text-foreground/70 mt-2">Secure Verifiable Credentials</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} CredVerify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

import { ShieldCheck } from 'lucide-react';

export default Index;
