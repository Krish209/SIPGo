"use client";

import React, { useState } from "react";

const PersonalLoanFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a Personal Loan EMI?",
      answer:
        "A Personal Loan EMI is a fixed monthly payment made by a borrower to repay a personal loan. It includes both principal and interest components, spread over a fixed tenure.",
    },
    {
      question: "How is the EMI for a personal loan calculated?",
      answer:
        "EMI is calculated based on the loan amount, interest rate, and tenure using the standard EMI formula. Online EMI calculators can help you compute it easily.",
    },
    {
      question: "Is there any collateral required for a personal loan?",
      answer:
        "No, personal loans are unsecured loans and do not require any collateral or security. Approval is usually based on credit score and income.",
    },
    {
      question: "Can I prepay my personal loan before the end of tenure?",
      answer:
        "Yes, most banks allow prepayment of personal loans. This helps reduce your interest burden, but some lenders may charge a prepayment penalty.",
    },
    {
      question: "Will my EMI change if interest rates change?",
      answer:
        "If your personal loan is on a floating interest rate, the EMI may change. For fixed-rate personal loans, the EMI remains constant throughout the tenure.",
    },
    {
      question: "What is the usual tenure for personal loan EMIs?",
      answer:
        "Personal loan tenures typically range from 12 to 60 months. Shorter tenures have higher EMIs but lower overall interest.",
    },
    {
      question: "Can I get a personal loan with a low credit score?",
      answer:
        "It is possible but difficult. A lower credit score may lead to loan rejection or higher interest rates. Improving your credit score increases approval chances.",
    },
    {
      question: "How can I reduce the EMI burden on my personal loan?",
      answer:
        "You can reduce EMI by opting for a longer tenure, negotiating for a lower interest rate, or prepaying part of the loan.",
    },
  ];

  return (
    <div className="p-2 vs:p-4 mb-4 text-primary">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/personal-loan-calculator#faq",
          name: "Personal Loan EMI FAQs",
          headline: "Personal Loan EMI FAQs",
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
        Frequently Asked Questions - Personal Loan EMI
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

export default PersonalLoanFAQ;
