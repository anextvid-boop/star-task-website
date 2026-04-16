import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-black mb-8 tracking-tight">Privacy Policy</h1>
      <div className="space-y-6 text-star-dark/80 font-medium leading-relaxed">
        <p>Last updated: April 2026</p>
        
        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">1. Information Collection</h2>
          <p>Star Task is designed with your privacy in mind. We prioritize keeping your focus secure. All core task data is stored securely and locally on your device via standard native capabilities or your private iCloud account. We do not aggregate your task data on external servers without explicit consent.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">2. Third-Party Services</h2>
          <p>We use industry-standard localized tools to securely facilitate features like payment processing and anonymous analytics to improve the app experience. These services only receive the minimum necessary data required to function.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">3. Data Retention</h2>
          <p>As task data is predominantly stored in your localized container or personal cloud environments, data retention relies entirely on your local management. Uninstalling the app and removing local app data will completely purge your focus records.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">4. Contact Us</h2>
          <p>If you have questions regarding this Privacy Policy, please contact us at support@startaskapp.com.</p>
        </section>
      </div>
    </div>
  );
}
