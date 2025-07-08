import Table from "@/utils/Table";
import React from "react";

export default function CarLoanInfo() {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();

  const columns = [
    { key: "term", header: "Term" },
    { key: "definition", header: "Definition" },
  ];

  const data = [
    {
      term: "Principal",
      definition: "The amount you borrow (excluding interest).",
    },
    {
      term: "Interest Rate (APR)",
      definition:
        "Annual Percentage Rate – includes interest and fees, expressed as a yearly percentage.",
    },
    {
      term: "Loan Term",
      definition: "Duration of the loan, typically 24 to 84 months.",
    },
    {
      term: "Down Payment",
      definition: "The upfront amount you pay, reducing the total loan needed.",
    },
    {
      term: "Monthly Payment",
      definition:
        "Fixed amount due each month, including principal and interest.",
    },
    {
      term: "Amortization",
      definition: "The process of paying off the loan in regular installments.",
    },
    {
      term: "Lien",
      definition:
        "Legal claim by the lender on the car until the loan is repaid.",
    },
  ];

  const columns2 = [
    { key: "creditScore", header: "Credit Score Range" },
    { key: "newCarApr", header: "Average APR (New Cars)" },
    { key: "usedCarApr", header: "Average APR (Used Cars)" },
  ];

  const data2 = [
    {
      creditScore: "781–850 (Excellent)",
      newCarApr: "4.5% or lower",
      usedCarApr: "5.0% or lower",
    },
    {
      creditScore: "661–780 (Good)",
      newCarApr: "5.5% – 7.5%",
      usedCarApr: "6.5% – 9.0%",
    },
    {
      creditScore: "601–660 (Fair)",
      newCarApr: "9% – 13%",
      usedCarApr: "10% – 16%",
    },
    {
      creditScore: "300–600 (Poor)",
      newCarApr: "14% – 20%+",
      usedCarApr: "16% – 25%+",
    },
  ];

  return (
    <article className="p-2 vs:p-4 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/car-loan-calculator#guide",
          "@id": "https://www.sipgo.in/car-loan-calculator#guide",
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
            "@id": "https://www.sipgo.in/car-loan-calculator",
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
        Car Loan - A Comprehensive Guide
      </h2>

      <p className="mb-2">
        Are you planning to buy a new or used vehicle and considering financing
        options? A <strong>car loan</strong> can be a practical solution to
        drive away with your dream car without paying the full cost upfront.
        This detailed guide covers everything about car loans — how they work,
        types, interest rates, eligibility, application process, pros and cons,
        and tips to get the best deal.
      </p>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What Is a Car Loan?
        </h3>
        <p className="mb-2">
          A <strong>car loan</strong> is a type of <em>secured loan</em> used
          specifically to purchase a vehicle. You borrow money from a lender
          (bank, credit union, online lender, or dealership), and in return, you
          agree to repay it over a fixed term, usually in{" "}
          <strong>monthly installments</strong>. The loan is secured by the
          vehicle itself, meaning the lender can{" "}
          <strong>repossess the car</strong> if you fail to make payments.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Why Consider a Car Loan?
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Avoid depleting your savings</li>
          <li>Spread out payments over time</li>
          <li>Buy a better car than you could afford with cash</li>
          <li>Build or improve your credit history</li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Car Loan Terminology
        </h3>
        <div className="overflow-x-auto mb-6">
          <Table columns={columns} data={data} />
        </div>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does a Car Loan Work?
        </h3>
        <ol className="list-decimal list-inside pl-6 mb-6 space-y-2">
          <li>Choose a car and determine your budget.</li>
          <li>
            Apply for financing through a bank, dealership, or online lender.
          </li>
          <li>
            Lender evaluates your <em>credit score</em>, income, and financial
            stability.
          </li>
          <li>
            If approved, you sign a loan agreement and take possession of the
            car.
          </li>
          <li>You make monthly payments until the loan is fully repaid.</li>
          <li>
            Once paid off, the <strong>lien is removed</strong>, and the car
            title is transferred to your name.
          </li>
        </ol>
      </section>

      {/* Types of Car Loans */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of Car Loans
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>New Car Loans</strong>: Used to purchase brand-new vehicles.
            Often come with lower interest rates (especially from
            manufacturers). May include promotional offers (0% APR, cash back).
          </li>
          <li>
            <strong>Used Car Loans</strong>: For previously owned vehicles.
            Slightly higher rates due to higher depreciation risk. Loan terms
            may be shorter.
          </li>
          <li>
            <strong>Refinancing Loans</strong>: Replace your existing car loan
            with a new one. Benefit from lower interest rates or reduced monthly
            payments. Best for improving cash flow or lowering total interest.
          </li>
          <li>
            <strong>Private Party Auto Loans</strong>: For purchasing a vehicle
            from an individual (not a dealership). May require additional
            documentation and inspections.
          </li>
          <li>
            <strong>Buy Here, Pay Here (BHPH)</strong>: Financing provided
            directly by the dealership. High-interest rates and strict terms.
            Often used by buyers with poor credit.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Car Loan Interest Rates in 2025
        </h3>
        <div className="overflow-x-auto mb-6">
          <Table columns={columns2} data={data2} />
        </div>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Factors That Affect Your Car Loan Approval
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          {[
            "Credit Score – A higher score means lower interest rates and better terms.",
            "Income – Lenders assess your ability to repay based on income.",
            "Debt-to-Income Ratio (DTI) – Lower ratios show better financial health.",
            "Employment Stability – Long-term employment boosts approval chances.",
            "Down Payment – A larger down payment reduces lender risk.",
            "Vehicle Age & Type – Newer vehicles often secure better loan terms.",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Apply for a Car Loan
        </h3>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          {[
            "Determine your budget and ideal loan term.",
            "Check your credit score on platforms like Credit Karma or Experian.",
            "Compare lenders: banks, credit unions, online lenders, and dealership financing.",
            "Get pre-approved to see your rates without affecting your credit.",
            "Choose a vehicle within your pre-approval amount.",
            "Submit your full application and provide documents: proof of identity, income, residence, and vehicle info.",
            "Sign the loan agreement after approval.",
            "Take delivery of the car and begin making payments.",
          ].map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Expert Tips for Getting the Best Car Loan
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          {[
            "Improve your credit score before applying",
            "Make a sizable down payment (ideally 20%)",
            "Choose the shortest term you can afford to save on interest",
            "Avoid dealership markups by arranging external financing",
            "Compare at least 3 lenders",
            "Beware of add-ons like GAP insurance or extended warranties unless necessary",
            "Watch for early repayment penalties",
          ].map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      {/* Pros and Cons Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of Car Loan
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Affordability</strong>: You can buy a car without paying the
            full amount upfront, which makes vehicles more accessible.
          </li>
          <li>
            <strong>Flexible Payment Options</strong>: Car loans offer different
            terms (e.g., 36, 60, or 72 months) and interest rates, allowing you
            to choose what fits your budget.
          </li>
          <li>
            <strong>Builds Credit History</strong>: Making timely payments can
            improve your credit score and establish a positive credit history.
          </li>
          <li>
            <strong>Access to Better Cars</strong>: You may afford a newer or
            better vehicle than if you had to pay in cash.
          </li>
          <li>
            <strong>Fixed Interest Rates</strong>: Most car loans come with
            fixed rates, meaning your monthly payment won't change.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of Car Loan
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Interest Costs</strong>: You’ll pay more than the actual
            price of the car due to interest, especially with longer loan terms.
          </li>
          <li>
            <strong>Depreciation</strong>: Cars lose value quickly. You might
            owe more on the loan than the car is worth (called being "upside
            down").
          </li>
          <li>
            <strong>Long-Term Commitment</strong>: Loan terms can last up to 6-7
            years, which is a significant financial commitment.
          </li>
          <li>
            <strong>Potential for Repossession</strong>: Missing payments can
            lead to repossession of your vehicle and damage your credit score.
          </li>
          <li>
            <strong>Insurance Requirements</strong>: Lenders often require full
            coverage insurance, which is more expensive than basic coverage.
          </li>
        </ul>
      </section>
    </article>
  );
}
