const PrivacyPolicy = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: May 26, 2025</p>

        <p className="mb-4">
          This privacy policy ("Privacy Policy") explains how personal information is collected, used, stored, and
          disclosed by Ordit Technologies Limited (
          <a href="https://orditai.com" className="text-blue-600 underline">
            https://orditai.com
          </a>
          , "we”, “us”, “our"). This Privacy Policy applies to users ("you") of our websites, applications, and other
          services including account creation and use of our AI ("George") and related services ("Services").
        </p>

        <p className="mb-4">
          This Privacy Policy is part of our Terms of Use. By accessing or using our Services, you agree to both this
          Privacy Policy and our Terms of Use. If you do not agree to any provision, you may not use our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Application of this Privacy Policy</h2>
        <p className="mb-4">
          This policy applies to all devices used to access our Services: desktop, mobile, tablet, etc.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Information We Collect</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Information You Provide Us</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Business/company name, type, contact details.</li>
          <li>Information submitted through forms, chat, or customer service interactions.</li>
          <li>Client and business ownership documentation.</li>
          <li>Survey responses.</li>
          <li>Financial documents shared with George.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect or Generate</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Phone numbers, emails, and contents of communication.</li>
          <li>Social media messages/posts and public profile details.</li>
          <li>App usage details, payment history, partner service interests.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Information Automatically Collected</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Log data: IP, OS, device IDs, system activity.</li>
          <li>Crash logs and configuration data.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Cookies and Similar Technologies</h3>
        <p className="mb-4">
          We use session, persistent, and third-party cookies to improve Services. You can control cookie behavior via
          browser settings. Disabling cookies may impact functionality.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Do-Not-Track Signals</h3>
        <p className="mb-4">We do not currently respond to DNT signals.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">How We Use Information</h2>
        <p className="mb-4">We use personal data under the following bases:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>Contractual:</strong> To provide requested services and support.
          </li>
          <li>
            <strong>Legal:</strong> Compliance with laws and verification checks.
          </li>
          <li>
            <strong>Legitimate interest:</strong> For service improvement, marketing, analytics, and security.
          </li>
          <li>
            <strong>Consent:</strong> For emails, profile sharing, and partner data sharing.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Who We Share Your Data With</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Service providers (analytics, support, emailing, LLM providers).</li>
          <li>Authorized individuals (e.g., solicitors).</li>
          <li>Authorities (fraud, law enforcement).</li>
          <li>In corporate transactions (mergers, acquisitions).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Your Rights</h2>
        <p className="mb-4">
          You can opt out of marketing communications, access, correct, or request deletion of your data by contacting
          us at{" "}
          <a href="mailto:contact@orditai.com" className="text-blue-600 underline">
            contact@orditai.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Security</h2>
        <p className="mb-4">
          We use technical and physical safeguards to protect data but cannot guarantee complete security. Protect your
          login credentials and notify us of unauthorized use.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Children’s Privacy</h2>
        <p className="mb-4">
          Our Services are not for users under 18. We do not knowingly collect information from minors.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Third-Party Links</h2>
        <p className="mb-4">
          We are not responsible for third-party privacy practices. Review their policies before engaging.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Policy Updates</h2>
        <p className="mb-4">
          We may update this policy and will notify users accordingly. Continued use of Services implies acceptance of
          changes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Contact Us</h2>
        <p>
          If you have questions, email us at{" "}
          <a href="mailto:contact@orditai.com" className="text-blue-600 underline">
            contact@orditai.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
