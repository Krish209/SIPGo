"use client";

import React, { useState } from "react";

const CarLoanFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a Car Loan EMI?",
      answer:
        "A Car Loan EMI (Equated Monthly Installment) is a fixed monthly payment made by a borrower to repay a car loan over time, including both principal and interest.",
    },
    {
      question: "How is the EMI for a car loan calculated?",
      answer:
        "Car loan EMI is calculated based on the loan amount, interest rate, and loan tenure using a standard formula or EMI calculator.",
    },
    {
      question: "Can I prepay my car loan EMI?",
      answer:
        "Yes, most lenders allow full or partial prepayment of car loans. This helps reduce the total interest paid or shorten the loan duration.",
    },
    {
      question: "Is there a prepayment penalty on car loans?",
      answer:
        "Some banks or NBFCs charge a fee for early repayment. Always check the loan agreement or consult the lender for prepayment terms.",
    },
    {
      question: "What happens if I miss an EMI payment?",
      answer:
        "Missing an EMI can attract late fees, impact your credit score, and may lead to legal action if default continues. Contact your lender in case of financial hardship.",
    },
    {
      question: "Does my credit score affect car loan EMI?",
      answer:
        "Yes, a higher credit score can get you a lower interest rate, which reduces your EMI. Poor credit may lead to higher EMIs or loan rejection.",
    },
    {
      question: "Can I change my EMI amount later?",
      answer:
        "Some lenders allow EMI restructuring or refinancing, especially if your financial situation changes. Check with your bank or financial institution.",
    },
    {
      question: "What is the ideal loan tenure for a car loan?",
      answer:
        "Shorter tenures mean higher EMIs but less interest. Longer tenures reduce EMIs but increase total interest. Choose based on your repayment capacity.",
    },
  ];

  return (
    <div className="p-2 vs:p-4 mb-4 text-primary">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/car-loan-calculator#faq",
          name: "Car Loan EMI FAQs",
          headline: "Car Loan EMI FAQs",
          mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
              dateCreated: "2025-04-01",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ".faq-answer",
              },
            },
          })),
        })}
      </script>

      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Car Loan EMI
      </h2>

      <div className="space-y-2">
        {questions.map((item, index) => (
          <div key={index} className="overflow-hidden border-b border-gray-200">
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

export default CarLoanFAQ;
