import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-spekit-navy text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          AI-powered enablement that works where your reps work
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Instantly empower your reps with everything they need to succeed, at their fingertips, the moment they need it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-spekit-pink hover:bg-opacity-90 text-white rounded-full px-6 py-3 text-base font-medium">
            Get started
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-6 py-3 text-base font-medium">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
