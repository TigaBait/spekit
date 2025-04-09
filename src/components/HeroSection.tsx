import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:py-28 lg:py-32 px-4 md:px-6 bg-gradient-light-pink relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block rounded-xl text-sm font-medium text-spekit-pink mb-4 px-3 py-1 bg-spekit-pink/10">
            Sales enablement teams
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spekit-navy mb-6 leading-tight">
            The future of content management: easy, efficient, effective
          </h1>
          <p className="text-lg text-spekit-navy/70 mb-8 max-w-xl">
            Discover how Spekit accelerates efficiency, alignment, and revenue across your teams.
          </p>
          <Button className="bg-spekit-pink hover:bg-opacity-90 text-white rounded-full px-6 py-3 text-base font-medium">
            Get started
          </Button>
        </div>
        <div className="relative">
          <div className="relative rounded-md overflow-hidden shadow-lg">
            <Image
              src="https://ext.same-assets.com/2407783698/3480568992.png"
              alt="Spekit platform interface"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute top-1/4 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white p-3 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="bg-spekit-pink w-8 h-8 flex items-center justify-center rounded-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">AI-powered enablement</p>
                <p className="text-sm font-semibold text-spekit-navy">for revenue teams</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/4 left-0 transform -translate-x-1/4 translate-y-1/4 bg-white p-3 rounded-xl shadow-lg">
            <p className="text-xs font-medium text-gray-500">Reps demand instant, just-in-time</p>
            <p className="text-sm font-semibold text-spekit-navy">enablement. Spekit makes it easy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
