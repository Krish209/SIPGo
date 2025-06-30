import Head from "next/head";

const PrivacyPolicy = () => {
  // SEO variables (customize these)
  const pageTitle = "Privacy Policy | SIPGo Financial Calculators";
  const pageDescription =
    "Learn how SIPGo protects your data when using our financial calculators. We comply with Indian data protection standards.";
  const canonicalUrl = "https://www.sipgo.in/privacy-policy";
  const effectiveDate = "2025-01-18";
  const lastUpdated = "2025-06-11";
  const logoUrl = "https://www.sipgo.in/images/logo.png";

  return (
    <section className="bg-white py-6 sm:py-12 px-4 sm:px-6 lg:px-8 text-[15px] md:text-base">
      <Head>
        {/* Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Privacy Policy, SIPGo, Financial Calculators, Data Protection, SIPGo Policy"
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Hreflang */}
        <link rel="alternate" hreflang="en" href={canonicalUrl} />
        <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={logoUrl} />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={logoUrl} />

        {/* Single High-Value Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description: pageDescription,
            url: canonicalUrl,
            datePublished: effectiveDate,
            dateModified: lastUpdated,
            publisher: {
              "@type": "Organization",
              name: "SIPGo",
              logo: {
                "@type": "ImageObject",
                url: logoUrl,
              },
            },
          })}
        </script>
      </Head>

      <div className="max-w-4xl leading-relaxed mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
          Privacy Policy
        </h1>
        <p className="mb-6">
          <strong>Effective Date</strong>: 11th June, 2025
        </p>

        {/* Introduction */}
        <div className="space-y-6 sm:space-y-6">
          <div>
            <p className="mb-2">
              Welcome to Sipgo.in. We value your trust and are committed to
              protecting your privacy. This Privacy Policy outlines how we
              handle information when you visit or interact with our website.
            </p>
            <p>
              By using Sipgo.in, you agree to the terms of this Privacy Policy.
              If you do not agree with our policies and practices, please do not
              use the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              1. Information We Do Not Collect
            </h2>
            <p>
              We do not collect any personal data from our users. Our service is
              designed to be used anonymously—no account creation or personal
              identification details (such as name, email, phone number, etc.)
              are required. Any data you input into the calculators remains
              local to your device and is not transmitted to our servers.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              2. Use of Information
            </h2>
            <p>
              Since we do not collect personal information, we do not use any
              user data for analytics, marketing, or any other purpose. Your
              information is neither tracked nor stored in any form.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              3. Third-Party Services
            </h2>
            <p className="mb-1">
              We use only two trusted third-party services to ensure website
              performance and analytics:
            </p>
            <ul className="list-disc pl-6 mb-2">
              <li>
                Google Analytics (anonymized traffic analysis) – This service
                provides aggregated insights into website usage without
                identifying individual users.
              </li>
              <li>
                Cloudflare (security & performance optimization) – Helps protect
                against malicious traffic and enhances site loading speed and
                availability.
              </li>
            </ul>
            <p>
              Neither of these services stores personally identifiable
              information (PII) from Sipgo.in users.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              Sipgo.in does not use cookies or tracking technologies. Your
              activity on the site is not monitored or stored. If this policy
              changes in the future, we will update this document and inform
              users accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              5. Data Security
            </h2>
            <p>
              Although no personal data is collected, we employ best practices
              and robust infrastructure to ensure the integrity, availability,
              and security of our service. We are committed to providing a safe
              browsing experience for all users.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              6. User Rights
            </h2>
            <p>
              Since no data is collected or store any personal data, no user
              rights related to data access, correction, or deletion apply.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              7. Children’s Privacy
            </h2>
            <p>
              Our website is not intended for children under the age of 13. We
              do not knowingly collect personal information from anyone under
              this age. If you believe we have inadvertently collected such
              information, please contact us, and we will promptly delete it.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              8. Links to External Sites
            </h2>
            <p>
              Our website may contain links to external websites (e.g.,
              government resources, financial blogs). We are not responsible for
              the content, privacy policies, or practices of these third-party
              sites. We encourage users to review their respective privacy
              policies before engaging with them.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with an updated effective date. We encourage
              you to check this page from time to time to stay informed.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              10. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              feel free to contact us at:{" "}
              <a href="mailto:support@sipgo.in" className="text-blue-600">
                support@sipgo.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
