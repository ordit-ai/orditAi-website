const RefundPolicy = () => {
  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last updated: 12 June 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Preface</h2>
        <p>
          These refund policies govern your use of our website, mobile applications, and other products. Please read
          these terms in full before using our services. If you do not accept this policy, please do not use the website
          or any product offered by OrditAI. Your continued use confirms your acceptance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          At OrditAI, we offer intelligent, on-demand consulting, auditing, and accounting services through our AI,
          George. This refund policy explains how refunds work in relation to our wallet-based billing system.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">1. Prepaid Wallet Model</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Users must fund a wallet in advance.</li>
          <li>Wallets are debited in real time based on service usage.</li>
          <li>You are only charged for actual time or service used.</li>
          <li>Billing pauses when interaction with the AI stops.</li>
          <li>You maintain full control over usage and costs.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">2. No Refunds for Services Already Consumed</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>No refunds are issued for wallet debits already made.</li>
          <li>All charges reflect real-time consulting or auditing completed by the AI.</li>
          <li>It is your responsibility to monitor wallet usage and session engagement.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">3. Service Cancellation = Stop Using the AI</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>You can stop engaging with the AI at any time to end a session.</li>
          <li>No additional charges will apply once engagement ends.</li>
          <li>No cancellation fees or formal cancellation process required.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">4. Refunds for Wallet Balance</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>No refunds are offered for unused wallet balances.</li>
          <li>Wallet balances remain available for future sessions with no expiration.</li>
          <li>
            If you suspect a billing error, email us at{" "}
            <a href="mailto:support@orditai.com" className="text-blue-600 underline">
              support@orditai.com
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">5. Dispute Resolution</h3>
        <p>
          For technical or billing issues, please contact our support team within 7 business days of the transaction. We
          are committed to resolving issues promptly.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">6. Changes to This Policy</h3>
        <p>
          OrditAI reserves the right to update this refund policy at any time. The latest version will always be
          available on our website.
        </p>
      </section>

      <section className="mt-10 border-t pt-4 text-sm text-gray-500">
        <p className="mb-1 font-semibold">Quick Summary:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>1. Prepaid Wallet Model</li>
          <li>2. No Refunds for Services Already Consumed</li>
          <li>3. Stop Using the AI = Cancel Service</li>
          <li>4. No Refunds for Wallet Balance</li>
          <li>5. Dispute Resolution Available</li>
          <li>6. Subject to Change</li>
        </ul>
      </section>
    </div>
  );
};

export default RefundPolicy;
