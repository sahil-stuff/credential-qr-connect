
import React, { useState } from 'react';
import Button from './Button';
import { QrCode, Check, X } from 'lucide-react';

const QRDemo = () => {
  const [scanStep, setScanStep] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
  
  const handleStartScan = () => {
    setScanStep('scanning');
    
    // Simulate scanning process
    setTimeout(() => {
      // 80% chance of success for demo purposes
      const isSuccess = Math.random() > 0.2;
      setScanStep(isSuccess ? 'success' : 'error');
      
      // Reset after showing result
      setTimeout(() => {
        setScanStep('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="scanner" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider animate-fade-in">QR Verification</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-up">Verify Credentials with a Simple Scan</h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Our intuitive QR scanner allows for immediate verification of credentials, providing instant trust and confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Open the Scanner</h4>
                  <p className="text-foreground/70">Launch the QR scanner directly from the app with a single tap.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Scan Credential QR</h4>
                  <p className="text-foreground/70">Point your camera at any credential QR code to instantly begin verification.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Instant Results</h4>
                  <p className="text-foreground/70">Receive immediate verification with detailed credential information.</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={handleStartScan}
                  icon={<QrCode className="w-4 h-4" />}
                  isLoading={scanStep === 'scanning'}
                >
                  {scanStep === 'idle' ? 'Try Demo Scanner' : 
                   scanStep === 'scanning' ? 'Scanning...' : 
                   scanStep === 'success' ? 'Verified!' : 'Invalid Credential'}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Scanner UI */}
              <div className={`absolute inset-0 rounded-2xl overflow-hidden border-2 ${
                scanStep === 'idle' ? 'border-muted-foreground/30' : 
                scanStep === 'scanning' ? 'border-primary animate-pulse-soft' : 
                scanStep === 'success' ? 'border-green-500' : 
                'border-red-500'
              } shadow-lg transition-all duration-300`}>
                <div className="absolute inset-0 bg-black/5"></div>
                
                {/* Scanner overlay with corner brackets */}
                <div className="absolute inset-0 p-8">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary/80"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary/80"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary/80"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary/80"></div>
                </div>
                
                {/* Scanner line animation */}
                {scanStep === 'scanning' && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary animate-bounce" style={{ animationDuration: '1.5s' }}></div>
                )}
                
                {/* Simulated QR code */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {scanStep === 'idle' && (
                    <div className="w-32 h-32 bg-white/80 rounded-lg flex items-center justify-center">
                      <QrCode className="w-24 h-24 text-foreground/80" />
                    </div>
                  )}
                  
                  {scanStep === 'scanning' && (
                    <div className="w-40 h-40 bg-white/90 rounded-lg flex items-center justify-center animate-pulse-soft">
                      <QrCode className="w-32 h-32 text-primary/80" />
                    </div>
                  )}
                  
                  {scanStep === 'success' && (
                    <div className="p-6 bg-white/90 rounded-lg text-center space-y-4 scale-in animate-scale-in">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <Check className="w-10 h-10 text-green-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Credential Verified</h5>
                        <p className="text-sm text-foreground/70">Valid Digital Certificate</p>
                      </div>
                    </div>
                  )}
                  
                  {scanStep === 'error' && (
                    <div className="p-6 bg-white/90 rounded-lg text-center space-y-4 animate-scale-in">
                      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <X className="w-10 h-10 text-red-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Verification Failed</h5>
                        <p className="text-sm text-foreground/70">Invalid or Tampered Credential</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRDemo;
