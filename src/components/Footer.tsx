import React from 'react';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Features',
    links: [
      { name: 'Spekit AI', href: '/features/ai' },
      { name: 'SmartSend', href: '/features/smartsend' },
      { name: 'Sales Content Management', href: '/use-cases/content-management' },
      { name: 'Spotlights', href: '/features/spotlights' },
      { name: 'Knowledge Checks', href: '/features/knowledge-checks' },
      { name: 'Analytics & Insights', href: '/features/analytics' },
      { name: 'Integrations & Extensions', href: '/integrations' },
    ]
  },
  {
    title: 'Integrations',
    links: [
      { name: 'Salesforce', href: '/integrations' },
      { name: 'Content integrations', href: '/integrations' },
      { name: 'SSO integrations', href: '/integrations' },
      { name: 'Slack integration', href: '/integrations' },
    ]
  },
  {
    title: 'Explore',
    links: [
      { name: 'Why Spekit?', href: '/why_spekit' },
      { name: 'Getting Started', href: '/getting-started' },
      { name: 'Product Tour', href: 'https://tourial.spekit.com/pages/spekit-ai-powered-enablement' },
      { name: 'Content Templates', href: '/templates' },
      { name: 'Case Studies', href: '/case-studies' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Events', href: '/events' },
      { name: 'Partners', href: '/integrations' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Board & Investors', href: '/board-and-investors' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Trust Center', href: 'https://trust.spekit.com/' },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto text-spekit-pink">
                <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0ZM22.4 22.4H20.8V24H22.4V22.4ZM22.4 11.2H20.8V20.8H22.4V11.2ZM17.6 17.6H16V19.2H17.6V17.6ZM17.6 8H16V16H17.6V8ZM12.8 14.4H11.2V16H12.8V14.4ZM12.8 6.4H11.2V12.8H12.8V6.4Z" fill="#c12771"/>
              </svg>
            </Link>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="font-medium text-spekit-navy mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-spekit-navy/70 hover:text-spekit-pink text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-spekit-navy/60 mb-4 md:mb-0">
            © 2025 Spekit. All rights reserved.
          </div>

          <div className="flex space-x-4">
            <Link href="/legal/privacy-policy" className="text-xs text-spekit-navy/60 hover:text-spekit-pink">
              Privacy Policy
            </Link>
            <Link href="/vulnerability-disclosure-program" className="text-xs text-spekit-navy/60 hover:text-spekit-pink">
              Vulnerability Disclosure Program
            </Link>
            <Link href="/legal/spekit-acceptable-use-policy" className="text-xs text-spekit-navy/60 hover:text-spekit-pink">
              Acceptable Use Policy
            </Link>
            <Link href="https://status.spekit.com/" className="text-xs text-spekit-navy/60 hover:text-spekit-pink">
              Status
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-spekit-navy/60">
          Made with love in Denver
        </div>
      </div>
    </footer>
  );
};

export default Footer;
