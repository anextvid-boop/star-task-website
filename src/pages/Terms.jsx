import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-black mb-8 tracking-tight">Terms of Use</h1>
      <div className="space-y-6 text-star-dark/80 font-medium leading-relaxed">
        <p>Last updated: April 2026</p>
        
        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">1. Acceptance of Terms & EULA</h2>
          <p>By downloading or using Star Task, these terms will automatically apply to you. This is an End User License Agreement (EULA) between you and the developer of Star Task, not Apple Inc. Apple is not responsible for the app or its content.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of Star Task per device for personal, non-commercial transitory viewing only. This is the grant of a limited, non-transferable license, not a transfer of title.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">3. Subscriptions and Auto-Renewal</h2>
          <p>Star Task may offer premium features through recurring subscriptions ("Star Task Pro"). By selecting a subscription, you agree to the following:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Payment will be charged to your Apple ID Account at confirmation of purchase.</li>
            <li>Subscriptions automatically renew unless auto-renew is turned off at least 24-hours before the end of the current billing period.</li>
            <li>Your account will be charged for renewal within 24-hours prior to the end of the current period.</li>
            <li>You can manage or cancel your subscriptions by going to your App Store Account Settings after purchase.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-star-dark mb-4 mt-8">4. Disclaimers & Limitations of Liability</h2>
          <p>The app is provided "as is". We are committed to ensuring that the app is as useful and efficient as possible, but we reserve the right to make changes. In no event shall the developer or Apple be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the app.</p>
        </section>
      </div>
    </div>
  );
}
