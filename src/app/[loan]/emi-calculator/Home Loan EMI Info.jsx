import React from "react";

export default function HomeLoanInfo() {
  return (
    <article className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md prose prose-indigo prose-lg">
      <h1 className="text-4xl font-bold mb-6">
        Complete Guide to Home Loans: Everything You Need to Know About Mortgage Loans in 2025
      </h1>

      <p>
        Are you planning to buy a house? Understanding{" "}
        <strong>home loans</strong> or <strong>mortgage loans</strong> is crucial before taking the plunge.
        This detailed guide covers all you need to know — from types of home loans,
        eligibility, application process, to tips on choosing the best loan for your needs.
      </p>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">What is a Home Loan? | Definition of a Mortgage Loan</h2>
        <p>
          A <strong>home loan</strong>, also called a <strong>mortgage</strong>, is a type of secured loan
          specifically used to buy residential property. The borrower borrows money from a bank or lender and
          agrees to repay it with interest over a fixed tenure, generally ranging from 10 to 30 years.
        </p>
        <p>
          The property itself acts as collateral, meaning if the borrower defaults on payments, the lender can
          take possession of the property.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Types of Home Loans in 2025</h2>
        <p>Understanding the different types of home loans helps you choose the right one:</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">1. Fixed-Rate Home Loan</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Interest Rate:</strong> Fixed throughout the loan tenure.</li>
          <li><strong>Benefits:</strong> Predictable EMIs (monthly payments), easier budgeting.</li>
          <li><strong>Best for:</strong> Borrowers who prefer stability and don’t want to worry about fluctuating interest rates.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">2. Floating/Variable-Rate Home Loan</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Interest Rate:</strong> Changes based on market conditions or benchmarks like the RBI repo rate, LIBOR, or prime lending rates.</li>
          <li><strong>Benefits:</strong> Interest rates may fall during economic downturns.</li>
          <li><strong>Risks:</strong> EMIs can increase if interest rates rise.</li>
          <li><strong>Best for:</strong> Borrowers who can handle potential fluctuations and want to take advantage of falling rates.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">3. Government-Subsidized Home Loans</h3>
        <p>
          Examples include schemes like the <strong>Pradhan Mantri Awas Yojana (PMAY)</strong> in India or{" "}
          <strong>FHA loans</strong> in the United States. Typically offer <strong>lower interest rates</strong>, relaxed eligibility,
          and benefits for first-time homebuyers or low-income families.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">4. Home Construction Loan</h3>
        <p>
          Designed for borrowers who want to build a house from scratch. Funds are released in stages based on construction progress.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">5. Home Improvement Loan</h3>
        <p>
          For renovating or making major repairs to your existing property.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Key Components of a Home Loan</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Principal Amount:</strong> The actual loan amount borrowed.
          </li>
          <li>
            <strong>Interest Rate:</strong> The cost of borrowing, expressed as a percentage. Can be fixed or floating.
          </li>
          <li>
            <strong>Loan Tenure:</strong> Period over which you repay the loan, generally between 10 to 30 years.
          </li>
          <li>
            <strong>Equated Monthly Installment (EMI):</strong> Fixed monthly payment that includes principal and interest.<br />
            EMI formula: <code>EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]</code> <br />
            (P = principal, R = monthly interest rate, N = number of months)
          </li>
          <li>
            <strong>Down Payment:</strong> Initial payment made upfront. Typically <strong>10-25%</strong> of the property’s purchase price.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Home Loan Eligibility Criteria</h2>
        <p>Lenders evaluate borrowers based on:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Age:</strong> Usually between 21-65 years.</li>
          <li><strong>Income:</strong> Steady and sufficient income to repay the loan.</li>
          <li><strong>Employment Status:</strong> Salaried, self-employed, or business owners.</li>
          <li><strong>Credit Score:</strong> Typically 750+ is ideal for best interest rates.</li>
          <li><strong>Existing Debt:</strong> High debt-to-income ratio may reduce eligibility.</li>
          <li><strong>Property Type and Location:</strong> Some lenders have restrictions on property types.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Documents Required for Home Loan Application</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Identity Proof:</strong> Passport, Aadhaar card, driving license, or voter ID.</li>
          <li><strong>Address Proof:</strong> Utility bills, rental agreement, or passport.</li>
          <li>
            <strong>Income Proof:</strong>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Salaried: Salary slips, Form 16, bank statements.</li>
              <li>Self-employed: Income tax returns, business financials.</li>
            </ul>
          </li>
          <li><strong>Property Documents:</strong> Title deed, sale agreement, property tax receipt.</li>
          <li><strong>Bank Statements:</strong> Usually for the past 3-6 months.</li>
          <li><strong>Photographs:</strong> Passport-sized.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Home Loan Interest Rates in 2025</h2>
        <p>
          Interest rates vary by country, lender, credit profile, and loan type. Currently, typical home loan rates
          range between <strong>6% to 9% per annum</strong> in many countries.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Fixed rates</strong> tend to be slightly higher than floating rates.</li>
          <li>Rates are influenced by central bank policies, inflation, and market demand.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">How to Calculate Your Home Loan EMI?</h2>
        <p>
          You can use an online <strong>home loan EMI calculator</strong> to estimate monthly payments based on:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Loan amount</li>
          <li>Interest rate</li>
          <li>Loan tenure</li>
        </ul>
        <p>
          This helps you budget and decide the loan amount you can afford.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Advantages of Taking a Home Loan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Enables home ownership without paying the full amount upfront.</li>
          <li>Can build your credit history if repayments are timely.</li>
          <li>Potential tax benefits on principal and interest paid (varies by country).</li>
          <li>Locks in property price in an inflationary market.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Common Home Loan Terms Explained</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Prepayment:</strong> Paying extra installments to reduce principal.</li>
          <li><strong>Foreclosure:</strong> Paying off the entire loan before tenure ends.</li>
          <li><strong>Processing Fees:</strong> One-time fee for processing the loan application.</li>
          <li><strong>Penalty Charges:</strong> Fees charged for delayed EMIs or foreclosure.</li>
          <li><strong>Loan-to-Value Ratio (LTV):</strong> Percentage of the property value that the lender will finance (usually 75%-90%).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Step-by-Step Process to Apply for a Home Loan</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Check Eligibility:</strong> Review income, credit score, age, etc.</li>
          <li><strong>Compare Lenders:</strong> Interest rates, tenure options, processing fees.</li>
          <li><strong>Apply:</strong> Fill the application form and submit documents.</li>
          <li><strong>Verification:</strong> Lender verifies documents, income, and property details.</li>
          <li><strong>Loan Approval:</strong> If eligible, loan is sanctioned.</li>
          <li><strong>Disbursement:</strong> Loan amount is transferred to the borrower or seller.</li>
          <li><strong>Repayment:</strong> Start paying monthly EMIs as per schedule.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Tips to Choose the Best Home Loan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Check the <strong>effective interest rate</strong> including fees.</li>
          <li>Review <strong>prepayment and foreclosure policies</strong>.</li>
          <li>Compare <strong>loan tenure options</strong> for affordable EMIs.</li>
          <li>Maintain a <strong>good credit score</strong> to negotiate better rates.</li>
          <li>Consider <strong>flexible EMI options</strong> if available.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Frequently Asked Questions (FAQs)</h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold">Can I get a home loan with a low credit score?</dt>
            <dd className="ml-4">
              It's challenging but some lenders specialize in loans for lower credit scores, often at higher interest rates.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Is it better to choose a fixed or floating interest rate?</dt>
            <dd className="ml-4">
              Fixed rates offer stability; floating rates may save money if interest rates fall.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Can I prepay my home loan?</dt>
            <dd className="ml-4">
              Most lenders allow prepayment, but some may charge penalties—check your loan agreement.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">What happens if I default on my home loan?</dt>
            <dd className="ml-4">
              The lender may initiate foreclosure and sell your property to recover dues.
            </dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-10 mb-4">Conclusion: Is a Home Loan Right for You?</h2>
        <p>
          A home loan is a powerful financial tool to help you own your dream home without large upfront capital.
          However, it’s important to understand all terms, interest rates, eligibility criteria, and your repayment
          capacity before applying.
        </p>
        <p>
          <strong>Always compare multiple lenders, read the fine print, and choose the loan that fits your financial situation best.</strong>
        </p>
      </section>
    </article>
  );
}
