"use client";

import React, { useState } from "react";

const EducationLoanFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is an Education Loan EMI?",
      answer:
        "Education Loan EMI (Equated Monthly Installment) is the monthly repayment amount for your student loan. It includes both principal and interest components and starts after the moratorium period.",
    },
    {
      question: "When does EMI repayment start for education loans?",
      answer:
        "Repayment usually starts after a moratorium period, which includes the course duration plus 6 to 12 months (known as the grace period). Interest may accrue during this time.",
    },
    {
      question: "How is EMI for an education loan calculated?",
      answer:
        "EMI is calculated based on the loan amount, interest rate, and repayment tenure using the standard EMI formula or an online EMI calculator.",
    },
    {
      question: "Can I repay my education loan before the EMI starts?",
      answer:
        "Yes, you can start making payments during the moratorium period. This helps reduce the interest burden and overall loan cost.",
    },
    {
      question: "Is there a penalty for prepaying an education loan?",
      answer:
        "Most public banks do not charge prepayment penalties for education loans. However, private lenders may have different terms. Always verify with your lender.",
    },
    {
      question: "Does my academic performance affect my loan EMI?",
      answer:
        "No, academic performance doesn't directly affect EMI. However, better placements may help you repay your loan faster.",
    },
    {
      question: "Can I get a subsidy on my education loan EMI?",
      answer:
        "Yes, eligible students can get interest subsidies under government schemes like the Central Sector Interest Subsidy (CSIS). This reduces the EMI burden.",
    },
    {
      question: "Can I increase or decrease the EMI later?",
      answer:
        "Yes, you can often restructure your repayment plan with your bank. This includes changing EMI amounts or extending the tenure, subject to bank approval.",
    },
  ];

  return (
    <div className="p-2 vs:p-4 mb-4 text-primary">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/education-loan-calculator#faq",
          name: "Education Loan EMI FAQs",
          headline: "Education Loan EMI FAQs",
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
        Frequently Asked Questions - Education Loan EMI
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

export default EducationLoanFAQ;
