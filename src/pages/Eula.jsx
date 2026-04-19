import React from 'react';

export default function Eula() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-black mb-8 tracking-tight">End User License Agreement (EULA)</h1>
      <div className="space-y-6 text-star-dark/80 font-medium leading-relaxed">
        <p>Last updated: April 2026</p>
        
        <section>
          <p>
            Star Task is licensed to you (End-User) by the developer, solely for use under the terms of this License Agreement.
            By downloading, installing, or using the app, you agree to be bound by the terms of the Licensed Application End User License Agreement (the "Standard EULA") provided by Apple.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">1. Standard EULA</h2>
          <p>
            You agree that the terms of the Standard EULA apply to your use of Star Task. The Standard EULA can be found at the following link:
          </p>
          <a 
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-star-gold hover:text-yellow-600 transition-colors hover:underline font-bold mt-2 inline-block drop-shadow-sm"
          >
            Apple Standard End User License Agreement
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">2. Acknowledgement</h2>
          <p>
            You and the developer acknowledge that this EULA is concluded between you and the developer only, and not with Apple Inc. The developer, not Apple, is solely responsible for the Licensed Application and the content thereof.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">3. Scope of License</h2>
          <p>
            The license granted to you for the Star Task Application is a non-transferable license to use the Licensed Application on any Apple-branded Products that you own or control and as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
