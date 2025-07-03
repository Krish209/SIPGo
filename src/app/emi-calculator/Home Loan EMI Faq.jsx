"use client";

import React, { useState } from "react";

const HomeLoanFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a Home Loan EMI?",
      answer:
        "A Home Loan EMI (Equated Monthly Installment) is the fixed monthly payment made by a borrower to repay a home loan. It includes both principal and interest components.",
    },
    {
      question: "How is Home Loan EMI calculated?",
      answer:
        "Home Loan EMI is calculated using the formula: EMI = [P × R × (1+R)^N]/[(1+R)^N–1], where P = principal, R = monthly interest rate, and N = loan tenure in months. Online calculators can simplify this.",
    },
    {
      question: "Can I get a lower EMI on my home loan?",
      answer:
        "You can lower your EMI by choosing a longer loan tenure, negotiating a lower interest rate, or opting for a larger down payment. Refinancing can also help if better rates are available.",
    },
    {
      question: "Is prepayment allowed in home loans?",
      answer:
        "Yes, most lenders allow partial or full prepayment. This reduces your principal balance and can lower the EMI or reduce the loan tenure.",
    },
    {
      question: "Are there any charges for prepaying a home loan?",
      answer:
        "Many lenders, especially for floating-rate loans, do not charge prepayment penalties. However, fixed-rate loans might have some fees. Always review your loan terms.",
    },
    {
      question: "What happens if I default on my EMI payments?",
      answer:
        "Defaulting on EMI payments can lead to penalties, impact your credit score, and may result in legal action or property seizure in extreme cases. Contact your lender immediately if you're facing issues.",
    },
    {
      question: "Can the EMI amount change during the loan tenure?",
      answer:
        "For floating interest rate loans, EMIs may change based on market interest rate fluctuations. Fixed-rate loans typically have a consistent EMI throughout the tenure.",
    },
    {
      question: "How does tenure affect my EMI and interest outgo?",
      answer:
        "Longer tenure reduces EMI but increases the total interest paid. Shorter tenure increases EMI but lowers total interest. Choose based on your financial comfort and goals.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/home-loan-calculator#faq",
          "name": "Home Loan EMI FAQs",
          "headline": "Home Loan EMI FAQs",
          "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer,
              "dateCreated": "2025-04-01",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ".faq-answer"
              }
            },
          })),
        })}
      </script>

      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Home Loan EMI
      </h2>

      <div className="space-y-2">
        {questions.map((item, index) => (
          <div key={index} className="overflow-hidden border-b">
            <div
              className="flex justify-between items-center px-2 py-2 md:py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`${
                  activeIndex === index ? "" : "truncate"
                } text-[15px] md:text-base font-medium`}
              >
                {item.question}
              </h3>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="text-[14px] md:text-[15px] px-2 py-1 md:py-3 faq-answer">
                {item.answer.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeLoanFAQ;
