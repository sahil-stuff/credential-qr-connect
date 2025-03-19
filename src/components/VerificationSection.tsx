
import React from 'react';
import { cn } from '@/lib/utils';
import { Shield, Key, Lock, ShieldCheck, FileCheck, AlertTriangle } from 'lucide-react';
import FeatureCard from './FeatureCard';

const VerificationSection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Cryptographic Security",
      description: "Military-grade encryption ensures credentials cannot be forged or tampered with."
    },
    {
      icon: <Key className="w-6 h-6 text-primary" />,
      title: "Public Key Infrastructure",
      description: "Leverages advanced PKI to provide the highest level of trust and security."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Zero-Knowledge Proofs",
      description: "Verify credentials without revealing unnecessary personal information."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Blockchain Anchoring",
      description: "Optional anchoring to blockchain for immutable verification records."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      title: "Audit Trails",
      description: "Complete, tamper-proof logs of all verification activities and access."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
      title: "Revocation Checks",
      description: "Real-time verification against revocation lists for ultimate security."
    }
  ];

  return (
    <section id="verification" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider animate-fade-in">Robust Verification</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-up">
            Bulletproof Security for Digital Credentials
          </h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Our verification system ensures the highest level of security and trust for all digital credentials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-up"
              index={i}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 max-w-3xl mx-auto mb-6 animate-fade-up">
            "Our verification technology combines multiple layers of security to create an impenetrable system that protects both issuers and holders of digital credentials."
          </p>
          <div className="flex items-center justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center">
              <span className="text-primary font-semibold">CTO</span>
            </div>
            <div className="ml-4 text-left">
              <p className="font-semibold">Dr. Alexandra Chen</p>
              <p className="text-sm text-foreground/70">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
