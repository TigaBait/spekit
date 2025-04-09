import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Feature 1 */}
      <div className="container mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <div className="bg-spekit-navy rounded-xl overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2407783698/1055159663.svg"
                alt="Spekit logo"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-spekit-navy mb-4">
              Scale your efforts: create content once, use it everywhere
            </h2>
            <p className="text-lg text-spekit-navy/70 mb-6">
              Easily repurpose your content for any use case. Whether creating an SOP, delivering a webinar, or onboarding new hires, Spekit automatically adapts your content to the right format. No more duplicating content, no more time down the drain.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="container mx-auto mb-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://ext.same-assets.com/4080854976/660150131.avif"
                alt="Spekit dashboard"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-spekit-navy mb-4">
              Improve content quality without increasing cost
            </h2>
            <p className="text-lg text-spekit-navy/70 mb-6">
              Automatically keep content fresh by syncing changes from content repositories. Streamline deduplication and content management processes with Spekit AI governance.
            </p>
            <Button variant="outline" className="border-spekit-pink text-spekit-pink hover:bg-spekit-pink/10 rounded-full">
              Learn more about sales content management
            </Button>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="container mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <div className="bg-spekit-pink/10 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-spekit-pink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-semibold text-spekit-navy mb-2">Uncover hidden content needs and knowledge gaps</h3>
                <p className="text-spekit-navy/70">
                  Stop guessing what content and enablement your reps need; learn from what they're using.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-spekit-navy/10 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-spekit-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-xl font-semibold text-spekit-navy mb-2">Track content engagement to refine and improve</h3>
                <p className="text-spekit-navy/70">
                  Get insights into how your teams, users, and customers engage with content—tracking views, clicks, and time spent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-spekit-navy mb-4">Personalize and simplify change management</h3>
                <p className="text-spekit-navy/70 mb-6">
                  Cut through the noise and speed up adoption with focused change communication. Spekit's built-in tools send targeted emails, in-app alerts, and notifications within your workflow—perfect for process, product, or GTM updates.
                </p>
                <Button className="bg-spekit-pink hover:bg-opacity-90 text-white rounded-full">
                  Start driving change
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl bg-gradient-light-pink p-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <blockquote className="italic text-spekit-navy mb-4 text-lg">
                  "With Spekit, enablement is transformed from an event or a destination to a living, breathing, connected component of the employee experience."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-spekit-pink rounded-full flex items-center justify-center text-white font-bold">
                    SL
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-spekit-navy">Samantha Luke</p>
                    <p className="text-sm text-spekit-navy/70">Director, Training and Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
