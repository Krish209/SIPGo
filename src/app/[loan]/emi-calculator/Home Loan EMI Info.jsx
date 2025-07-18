import React from "react";

export default function HomeLoanInfo() {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-07-17").toISOString();

  return (
    <article className="p-2 vs:p-4 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/home-loan-calculator#guide",
          "@id": "https://www.sipgo.in/home-loan-calculator#guide",
          headline: "EMI Calculator – Estimate Monthly Loan Repayments",
          description:
            "Find your monthly EMI, total interest payable, and amortization schedule with SIPGo's EMI Calculator.",
          image: "https://www.sipgo.in/images/logo.png",
          author: {
            "@type": "Organization",
            name: "SIPGo",
            url: "https://www.sipgo.in/",
          },
          datePublished: datePublished,
          dateModified: dateModified,
          publisher: {
            "@type": "Organization",
            name: "SIPGo",
            logo: {
              "@type": "ImageObject",
              url: "https://www.sipgo.in/images/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.sipgo.in/home-loan-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "EMI Guide Sections",
            table: [
              "What is EMI?",
              "Components of EMI",
              "How does EMI Work?",
              "Types of EMI Calculation",
              "Types of Loans That Use EMIs",
              "Loan Amortization",
              "Prepayment and Loan Foreclosure",
              "Advantages of EMI",
              "Disadvantages of EMI",
              "Conclusion",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Home Loans - A Comprehensive Guide About Mortgage Loans
      </h2>

      <p className="mb-2">
        Are you planning to buy a house? Understanding{" "}
        <strong>home loans</strong> or <strong>mortgage loans</strong> is
        crucial before taking the plunge. This detailed guide covers all you
        need to know — from types of home loans, eligibility, application
        process, to tips on choosing the best loan for your needs.
      </p>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is a Home Loan?
        </h3>
        <p className="mb-2">
          A <strong>home loan</strong>, also called a <strong>mortgage</strong>,
          is a type of secured loan specifically used to buy residential
          property. The borrower borrows money from a bank or lender and agrees
          to repay it with interest over a fixed tenure, generally ranging from
          10 to 30 years.
        </p>
        <p className="mb-2">
          The property itself acts as collateral, meaning if the borrower
          defaults on payments, the lender can take possession of the property.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of Home Loans in 2025
        </h3>
        <p className="mb-2">
          Understanding the different types of home loans helps you choose the
          right one:
        </p>

        <h4 className="text-lg md:text-xl font-semibold mb-2">
          1. Fixed-Rate Home Loan
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Interest Rate:</strong> Fixed throughout the loan tenure.
          </li>
          <li>
            <strong>Benefits:</strong> Predictable EMIs (monthly payments),
            easier budgeting.
          </li>
          <li>
            <strong>Best for:</strong> Borrowers who prefer stability and don’t
            want to worry about fluctuating interest rates.
          </li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold mb-2">
          2. Floating/Variable-Rate Home Loan
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Interest Rate:</strong> Changes based on market conditions
            or benchmarks like the RBI repo rate, LIBOR, or prime lending rates.
          </li>
          <li>
            <strong>Benefits:</strong> Interest rates may fall during economic
            downturns.
          </li>
          <li>
            <strong>Risks:</strong> EMIs can increase if interest rates rise.
          </li>
          <li>
            <strong>Best for:</strong> Borrowers who can handle potential
            fluctuations and want to take advantage of falling rates.
          </li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold mb-2">
          3. Government-Subsidized Home Loans
        </h4>
        <p className="mb-4">
          Examples include schemes like the{" "}
          <strong>Pradhan Mantri Awas Yojana (PMAY)</strong> in India or{" "}
          <strong>FHA loans</strong> in the United States. Typically offer{" "}
          <strong>lower interest rates</strong>, relaxed eligibility, and
          benefits for first-time homebuyers or low-income families.
        </p>

        <h4 className="text-lg md:text-xl font-semibold mb-2">
          4. Home Construction Loan
        </h4>
        <p className="mb-4">
          Designed for borrowers who want to build a house from scratch. Funds
          are released in stages based on construction progress.
        </p>

        <h4 className="text-lg md:text-xl font-semibold mb-2">
          5. Home Improvement Loan
        </h4>
        <p className="mb-4">
          For renovating or making major repairs to your existing property.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Components of a Home Loan
        </h3>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Principal Amount:</strong> The actual loan amount borrowed.
          </li>
          <li>
            <strong>Interest Rate:</strong> The cost of borrowing, expressed as
            a percentage. Can be fixed or floating.
          </li>
          <li>
            <strong>Loan Tenure:</strong> Period over which you repay the loan,
            generally between 10 to 30 years.
          </li>
          <li>
            <strong>Down Payment:</strong> Initial payment made upfront.
            Typically <strong>10-25%</strong> of the property’s purchase price.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Home Loan Eligibility Criteria
        </h3>
        <p className="mb-2">Lenders evaluate borrowers based on:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Age:</strong> Usually between 21-65 years.
          </li>
          <li>
            <strong>Income:</strong> Steady and sufficient income to repay the
            loan.
          </li>
          <li>
            <strong>Employment Status:</strong> Salaried, self-employed, or
            business owners.
          </li>
          <li>
            <strong>Credit Score:</strong> Typically 750+ is ideal for best
            interest rates.
          </li>
          <li>
            <strong>Existing Debt:</strong> High debt-to-income ratio may reduce
            eligibility.
          </li>
          <li>
            <strong>Property Type and Location:</strong> Some lenders have
            restrictions on property types.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Documents Required for Home Loan Application
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Identity Proof:</strong> Passport, Aadhaar card, driving
            license, or voter ID.
          </li>
          <li>
            <strong>Address Proof:</strong> Utility bills, rental agreement, or
            passport.
          </li>
          <li>
            <strong>Income Proof:</strong>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Salaried: Salary slips, Form 16, bank statements.</li>
              <li>Self-employed: Income tax returns, business financials.</li>
            </ul>
          </li>
          <li>
            <strong>Property Documents:</strong> Title deed, sale agreement,
            property tax receipt.
          </li>
          <li>
            <strong>Bank Statements:</strong> Usually for the past 3-6 months.
          </li>
          <li>
            <strong>Photographs:</strong> Passport-sized.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Home Loan Interest Rates in 2025
        </h3>
        <p className="mb-2">
          Interest rates vary by country, lender, credit profile, and loan type.
          Currently, typical home loan rates range between{" "}
          <strong>6% to 9% per annum</strong> in many countries.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Fixed rates</strong> tend to be slightly higher than
            floating rates.
          </li>
          <li>
            Rates are influenced by central bank policies, inflation, and market
            demand.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Calculate Your Home Loan EMI?
        </h3>
        <p className="mb-2">
          You can use an online <strong>home loan EMI calculator</strong> to
          estimate monthly payments based on:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li>Loan amount</li>
          <li>Interest rate</li>
          <li>Loan tenure</li>
        </ul>
        <p className="mb-2">
          This helps you budget and decide the loan amount you can afford.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Advantages of Taking a Home Loan
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Enables home ownership without paying the full amount upfront.
          </li>
          <li>Can build your credit history if repayments are timely.</li>
          <li>
            Potential tax benefits on principal and interest paid (varies by
            country).
          </li>
          <li>Locks in property price in an inflationary market.</li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Common Home Loan Terms Explained
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Prepayment:</strong> Paying extra installments to reduce
            principal.
          </li>
          <li>
            <strong>Foreclosure:</strong> Paying off the entire loan before
            tenure ends.
          </li>
          <li>
            <strong>Processing Fees:</strong> One-time fee for processing the
            loan application.
          </li>
          <li>
            <strong>Penalty Charges:</strong> Fees charged for delayed EMIs or
            foreclosure.
          </li>
          <li>
            <strong>Loan-to-Value Ratio (LTV):</strong> Percentage of the
            property value that the lender will finance (usually 75%-90%).
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Step-by-Step Process to Apply for a Home Loan
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Check Eligibility:</strong> Review income, credit score,
            age, etc.
          </li>
          <li>
            <strong>Compare Lenders:</strong> Interest rates, tenure options,
            processing fees.
          </li>
          <li>
            <strong>Apply:</strong> Fill the application form and submit
            documents.
          </li>
          <li>
            <strong>Verification:</strong> Lender verifies documents, income,
            and property details.
          </li>
          <li>
            <strong>Loan Approval:</strong> If eligible, loan is sanctioned.
          </li>
          <li>
            <strong>Disbursement:</strong> Loan amount is transferred to the
            borrower or seller.
          </li>
          <li>
            <strong>Repayment:</strong> Start paying monthly EMIs as per
            schedule.
          </li>
        </ol>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Tips to Choose the Best Home Loan
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Check the <strong>effective interest rate</strong> including fees.
          </li>
          <li>
            Review <strong>prepayment and foreclosure policies</strong>.
          </li>
          <li>
            Compare <strong>loan tenure options</strong> for affordable EMIs.
          </li>
          <li>
            Maintain a <strong>good credit score</strong> to negotiate better
            rates.
          </li>
          <li>
            Consider <strong>flexible EMI options</strong> if available.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p className="mb-2">
          A home loan is a powerful financial tool to help you own your dream
          home without large upfront capital. However, it’s important to
          understand all terms, interest rates, eligibility criteria, and your
          repayment capacity before applying.
        </p>
        <p className="mb-2">
          <strong>
            Always compare multiple lenders, read the fine print, and choose the
            loan that fits your financial situation best.
          </strong>
        </p>
      </section>
    </article>
  );
}
