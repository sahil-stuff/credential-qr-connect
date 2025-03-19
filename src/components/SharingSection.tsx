import React from 'react';
import Button from './Button';
import { Globe, FileCode, Share2, ArrowRight, Shield } from 'lucide-react';

const SharingSection = () => {
  return (
    <section id="sharing" className="section-padding bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider animate-fade-in">W3C Standards</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-up">
            Global Certificate Sharing with W3C Standards
          </h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Our platform adheres to the W3C Verifiable Credentials standard, ensuring global interoperability and acceptance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Global Interoperability</h4>
                <p className="text-foreground/70">
                  Our credentials work across platforms, countries, and systems thanks to the W3C Verifiable Credentials Data Model.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileCode className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Open Standards</h4>
                <p className="text-foreground/70">
                  Built on open web standards that ensure long-term compatibility and avoid vendor lock-in.
                </p>
                <div className="mt-4 p-3 bg-secondary/50 rounded-lg text-sm font-mono text-foreground/80 overflow-x-auto">
                  <pre>
{`{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "https://example.com/credentials/123",
  "type": ["VerifiableCredential", "AlumniCredential"],
  "issuer": "https://university.edu/issuers/123",
  "issuanceDate": "2020-01-01T19:23:24Z",
  ...
}`}
                  </pre>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Selective Disclosure</h4>
                <p className="text-foreground/70">
                  Share only the information you want to disclose while maintaining the verifiability of your credentials.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Learn About W3C Standards
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-x-0 top-10 bottom-0 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-2xl -z-10 transform rotate-6"></div>
              
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl shadow-subtle overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-12 bg-primary/10 flex items-center px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto font-medium text-sm text-foreground/70">W3C Verifiable Credential</div>
                </div>
                
                <div className="pt-16 pb-6 px-6">
                  <div className="space-y-5">
                    <div>
                      <h5 className="text-xs uppercase text-foreground/50 mb-1">Credential Type</h5>
                      <p className="text-sm font-semibold">Professional Certification</p>
                    </div>
                    
                    <div>
                      <h5 className="text-xs uppercase text-foreground/50 mb-1">Issued By</h5>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs mr-2">C</div>
                        <p className="text-sm font-semibold">Certified Institute of Technology</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-xs uppercase text-foreground/50 mb-1">Issuance Date</h5>
                      <p className="text-sm">2023-06-15</p>
                    </div>
                    
                    <div>
                      <h5 className="text-xs uppercase text-foreground/50 mb-1">Credential Subject</h5>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs mr-2">J</div>
                        <p className="text-sm font-semibold">Jane Doe</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-xs uppercase text-foreground/50 mb-1">Expiration</h5>
                      <p className="text-sm">2026-06-15</p>
                    </div>
                    
                    <div className="pt-4">
                      <div className="w-full h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-medium text-primary flex items-center">
                          <ShieldCheck className="w-4 h-4 mr-2" /> Cryptographically Verified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/70 backdrop-blur-md shadow-subtle rounded-lg flex items-center justify-center animate-float">
                <Globe className="w-8 h-8 text-primary/80" />
              </div>
              
              <div className="absolute -bottom-10 -left-6 w-12 h-12 bg-white/70 backdrop-blur-md shadow-subtle rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="w-6 h-6 text-primary/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default SharingSection;

