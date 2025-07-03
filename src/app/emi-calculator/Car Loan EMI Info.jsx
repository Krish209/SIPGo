import React from "react";

export default function CarLoanInfo() {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Ultimate Guide to Car Loans (2025)
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        Are you planning to buy a new or used vehicle and considering financing
        options? A <strong>car loan</strong> can be a practical solution to drive
        away with your dream car without paying the full cost upfront. This
        detailed guide covers everything about car loans — how they work, types,
        interest rates, eligibility, application process, pros and cons, and tips
        to get the best deal.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What Is a Car Loan?</h2>
      <p className="mb-6 leading-relaxed">
        A <strong>car loan</strong> is a type of <em>secured loan</em> used
        specifically to purchase a vehicle. You borrow money from a lender (bank,
        credit union, online lender, or dealership), and in return, you agree to
        repay it over a fixed term, usually in <strong>monthly installments</strong>.
        The loan is secured by the vehicle itself, meaning the lender can{" "}
        <strong>repossess the car</strong> if you fail to make payments.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Consider a Car Loan?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Avoid depleting your savings</li>
        <li>Spread out payments over time</li>
        <li>Buy a better car than you could afford with cash</li>
        <li>Build or improve your credit history</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Car Loan Terminology</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                Term
              </th>
              <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                Definition
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Principal", "The amount you borrow (excluding interest)."],
              [
                "Interest Rate (APR)",
                "Annual Percentage Rate – includes interest and fees, expressed as a yearly percentage.",
              ],
              ["Loan Term", "Duration of the loan, typically 24 to 84 months."],
              [
                "Down Payment",
                "The upfront amount you pay, reducing the total loan needed.",
              ],
              [
                "Monthly Payment",
                "Fixed amount due each month, including principal and interest.",
              ],
              ["Amortization", "The process of paying off the loan in regular installments."],
              [
                "Lien",
                "Legal claim by the lender on the car until the loan is repaid.",
              ],
            ].map(([term, def]) => (
              <tr key={term} className="border-t border-gray-300 dark:border-gray-700">
                <td className="py-2 px-4 font-medium">{term}</td>
                <td className="py-2 px-4">{def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How Does a Car Loan Work?</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>Choose a car and determine your budget.</li>
        <li>Apply for financing through a bank, dealership, or online lender.</li>
        <li>
          Lender evaluates your <em>credit score</em>, income, and financial
          stability.
        </li>
        <li>
          If approved, you sign a loan agreement and take possession of the car.
        </li>
        <li>You make monthly payments until the loan is fully repaid.</li>
        <li>
          Once paid off, the <strong>lien is removed</strong>, and the car title is
          transferred to your name.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Car Loans</h2>
      <div className="space-y-6">
        {[
          {
            title: "New Car Loans",
            description:
              "Used to purchase brand-new vehicles. Often come with lower interest rates (especially from manufacturers). May include promotional offers (0% APR, cash back).",
          },
          {
            title: "Used Car Loans",
            description:
              "For previously owned vehicles. Slightly higher rates due to higher depreciation risk. Loan terms may be shorter.",
          },
          {
            title: "Refinancing Loans",
            description:
              "Replace your existing car loan with a new one. Benefit from lower interest rates or reduced monthly payments. Best for improving cash flow or lowering total interest.",
          },
          {
            title: "Private Party Auto Loans",
            description:
              "For purchasing a vehicle from an individual (not a dealership). May require additional documentation and inspections.",
          },
          {
            title: "Buy Here, Pay Here (BHPH)",
            description:
              "Financing provided directly by the dealership. High-interest rates and strict terms. Often used by buyers with poor credit.",
          },
        ].map(({ title, description }) => (
          <div key={title} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Car Loan Interest Rates in 2025</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                Credit Score Range
              </th>
              <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                Average APR (New Cars)
              </th>
              <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                Average APR (Used Cars)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["781–850 (Excellent)", "4.5% or lower", "5.0% or lower"],
              ["661–780 (Good)", "5.5% – 7.5%", "6.5% – 9.0%"],
              ["601–660 (Fair)", "9% – 13%", "10% – 16%"],
              ["300–600 (Poor)", "14% – 20%+", "16% – 25%+"],
            ].map(([score, newCar, usedCar]) => (
              <tr
                key={score}
                className="border-t border-gray-300 dark:border-gray-700"
              >
                <td className="py-2 px-4 font-medium">{score}</td>
                <td className="py-2 px-4">{newCar}</td>
                <td className="py-2 px-4">{usedCar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Factors That Affect Your Car Loan Approval</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
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

      <h2 className="text-2xl font-semibold mt-8 mb-4">How to Apply for a Car Loan</h2>
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

      <h2 className="text-2xl font-semibold mt-8 mb-4">Expert Tips for Getting the Best Car Loan</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
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

      <h2 className="text-2xl font-semibold mt-8 mb-4">Pros and Cons of Car Loans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">Pros</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Flexible repayment terms</li>
            <li>Build credit history</li>
            <li>Access better or newer vehicles</li>
            <li>Allows you to keep cash reserves</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-400">Cons</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Total cost increases due to interest</li>
            <li>Risk of repossession</li>
            <li>Negative equity if the car depreciates faster than the loan balance</li>
            <li>May require insurance with higher coverage</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-6 mb-12">
        {[
          {
            question: "What is the ideal loan term for a car loan?",
            answer:
              "Shorter terms (36-48 months) save on interest, but have higher monthly payments. Avoid long terms (72+ months) unless necessary.",
          },
          {
            question: "Can I get a car loan with bad credit?",
            answer:
              "Yes, but expect higher interest rates. Consider applying with a co-signer or seeking lenders that specialize in subprime loans.",
          },
          {
            question: "Does getting pre-approved hurt my credit?",
            answer:
              "No. Pre-approvals typically use a soft credit check, which does not affect your score.",
          },
          {
            question: "Can I pay off a car loan early?",
            answer:
              "Yes, but check if your lender charges prepayment penalties.",
          },
        ].map(({ question, answer }) => (
          <div key={question} className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
            <h3 className="font-semibold text-lg mb-2">{question}</h3>
            <p>{answer}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-12">
        © 2025 Car Loans Guide. All rights reserved.
      </p>
    </section>
  );
}
