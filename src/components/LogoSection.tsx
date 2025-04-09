import React from 'react';
import Image from 'next/image';

const LogoSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-medium text-center text-spekit-navy mb-8">
          Fueling enablement at the world's most innovative companies
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <Image
            src="https://ext.same-assets.com/2407783698/1216445126.png"
            alt="Ibotta logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />

          <Image
            src="https://ext.same-assets.com/2407783698/3228264369.webp"
            alt="Data Axle logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />

          <Image
            src="https://ext.same-assets.com/2407783698/2543655286.png"
            alt="Southwest logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />

          <Image
            src="https://ext.same-assets.com/2407783698/3293001870.svg"
            alt="Copado logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />

          <Image
            src="https://ext.same-assets.com/4080854976/3284929490.png"
            alt="iHeartMedia logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
