import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-black mb-8 tracking-tight">Terms of Use</h1>
      <div className="space-y-6 text-star-dark/80 font-medium leading-relaxed">
        <p>Last updated: April 2026</p>
        
        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">1. Acceptance of Terms</h2>
          <p>By downloading or using Star Task, these terms will automatically apply to you. You should make sure therefore that you read them carefully before using the app.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of Star Task per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">3. Subscriptions and Billing</h2>
          <p>Star Task may offer premium features which are accessible via in-app purchases or recurring subscriptions. If you choose to subscribe, billing is handled securely via Apple App Store infrastructure. You can cancel your subscription at any time via your Apple ID Settings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">4. Modifications to the App</h2>
          <p>We are committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason.</p>
        </section>
      </div>
    </div>
  );
}
