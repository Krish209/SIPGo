"use client";

import React, { useState } from "react";

const faqsData = {
  emi: {
    id: "emi",
    title: "EMI FAQs",
    urlId: "emi-calculator",
    questions: [
      {
        question: "What is an EMI?",
        answer:
          "An EMI (Equated Monthly Installment) is a fixed monthly payment a borrower makes to a lender on a specific date. It includes both principal and interest and is used to repay a loan over a set period.",
      },
      {
        question: "What are the components of an EMI?",
        answer:
          "EMI consists of two parts: principal (the borrowed amount) and interest (the cost of borrowing). The EMI ensures both are paid off over the loan tenure.",
      },
      {
        question: "What factors affect the EMI amount?",
        answer:
          "1. Loan Amount\n2. Interest Rate\n3. Loan Tenure\n\nHigher loan amount, interest rate, or longer tenure increases the EMI.",
      },
      {
        question: "Can I prepay or make part payments to reduce my EMI?",
        answer:
          "Yes, many lenders allow prepayment or part payments which reduce the outstanding loan, lowering your EMI or loan tenure depending on lender terms.",
      },
      {
        question: "Is there a penalty for prepaying the EMI?",
        answer:
          "Some lenders may charge a prepayment penalty, while others don’t. Always check your loan agreement for prepayment terms.",
      },
      {
        question: "Can my EMI increase if interest rates rise?",
        answer:
          "For floating rate loans, EMI can increase if interest rates rise. For fixed-rate loans, EMI stays the same throughout the tenure.",
      },
      {
        question: "How does a longer loan tenure impact EMI?",
        answer:
          "Longer tenure lowers the EMI amount but increases total interest paid. Shorter tenure means higher EMI but less interest overall.",
      },
      {
        question: "Can I change the EMI amount during the loan tenure?",
        answer:
          "It depends on your lender. Some allow EMI changes through loan restructuring or refinancing. Check with your lender for options.",
      },
    ],
  },
  car: {
    id: "car-loan",
    title: "Car Loan EMI FAQs",
    urlId: "car-loan-calculator",
    questions: [
      {
        question: "What is a Car Loan EMI?",
        answer:
          "Car Loan EMI is the fixed monthly payment you make to repay your car loan, covering both principal and interest over the loan tenure.",
      },
      {
        question: "How is Car Loan EMI calculated?",
        answer:
          "EMI for car loans is calculated using the loan amount, interest rate, and tenure. Online calculators can help determine exact amounts.",
      },
      {
        question: "Can I prepay my car loan EMI?",
        answer:
          "Yes, prepayment is allowed by many lenders, which can reduce your loan tenure or EMI amount. Check with your lender for terms.",
      },
      {
        question: "Is there a penalty for prepayment of car loan?",
        answer:
          "Some lenders may charge a prepayment penalty; others may not. Verify this in your loan agreement.",
      },
      {
        question: "Does the EMI change if interest rates fluctuate?",
        answer:
          "Floating rate car loans may have changing EMIs if interest rates change, while fixed-rate loans maintain constant EMIs.",
      },
      {
        question: "What factors influence my car loan EMI?",
        answer:
          "Loan amount, interest rate, tenure, and down payment affect your EMI amount.",
      },
      {
        question: "Can I increase or decrease my car loan EMI later?",
        answer:
          "Some lenders offer EMI restructuring options subject to approval.",
      },
      {
        question: "What happens if I miss a car loan EMI?",
        answer:
          "Missing EMIs may lead to penalties, affect credit score, and possible legal actions.",
      },
    ],
  },
  home: {
    id: "home-loan",
    title: "Home Loan EMI FAQs",
    urlId: "home-loan-calculator",
    questions: [
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
    ],
  },
  education: {
    id: "education-loan",
    title: "Education Loan EMI FAQs",
    urlId: "education-loan-calculator",
    questions: [
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
    ],
  },
  personal: {
    id: "personal-loan",
    title: "Personal Loan EMI FAQs",
    urlId: "personal-loan-calculator",
    questions: [
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
    ],
  },
};

const LoanFAQTabs = () => {
  const [activeTab, setActiveTab] = useState("emi");
  const [activeIndex, setActiveIndex] = useState(null);

  const { title, questions, urlId } = faqsData[activeTab];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mb-8 max-w-3xl text-primary">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-6 border-b border-gray-300">
        {Object.entries(faqsData).map(([key, { title }]) => (
          <button
            key={key}
            className={`px-4 py-2 m-1 rounded-t-md font-semibold text-sm md:text-base
              ${
                activeTab === key
                  ? "border-b-2 border-blue-600 text-blue-700"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            onClick={() => {
              setActiveTab(key);
              setActiveIndex(null); // reset FAQ open on tab change
            }}
            aria-selected={activeTab === key}
            role="tab"
            type="button"
          >
            {title.replace(" FAQs", "")}
          </button>
        ))}
      </div>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" key={`jsonld-${activeTab}`}>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `https://www.sipgo.in/${urlId}#faq`,
          name: title,
          headline: title,
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
        {title}
      </h2>

      {/* FAQ List */}
      <div
        className="space-y-2"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {questions.map((item, index) => (
          <div key={index} className="overflow-hidden border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full px-2 py-2 md:py-3 cursor-pointer hover:bg-gray-100 text-left"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-panel-${activeTab}-${index}`}
              id={`faq-header-${activeTab}-${index}`}
            >
              <h3
                className={`${
                  activeIndex === index ? "" : "truncate"
                } text-[15px] md:text-base font-medium`}
              >
                {item.question}
              </h3>
              <span className="text-xl" aria-hidden="true">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div
                className="text-[14px] md:text-[15px] px-2 py-1 md:py-3 faq-answer"
                id={`faq-panel-${activeTab}-${index}`}
                role="region"
                aria-labelledby={`faq-header-${activeTab}-${index}`}
              >
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

export default LoanFAQTabs;
