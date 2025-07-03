// utils/LoanConfig.jsx

import CarLoanFAQ from "@/app/[loan]/emi-calculator/Car Loan EMI Faq";
import CarLoanInfo from "@/app/[loan]/emi-calculator/Car Loan EMI Info";
import EducationLoanFAQ from "@/app/[loan]/emi-calculator/Education Loan EMI Faq";
import EducationLoanInfo from "@/app/[loan]/emi-calculator/Education Loan EMI Info";
import EMIFAQ from "@/app/[loan]/emi-calculator/EMI Faq";
import EMIInfo from "@/app/[loan]/emi-calculator/EMI Info";
import HomeLoanFAQ from "@/app/[loan]/emi-calculator/Home Loan EMI Faq";
import HomeLoanInfo from "@/app/[loan]/emi-calculator/Home Loan EMI Info";
import PersonalLoanFAQ from "@/app/[loan]/emi-calculator/Personal Loan EMI Faq";
import PersonalLoanInfo from "@/app/[loan]/emi-calculator/Personal Loan EMI Info";

const loanConfigs = {
  "emi-calculator": {
    loanType: "EMI",
    schemaType: "LoanCalculator",
    defaultValues: { loan: 1000000, rate: 7, tenure: 10 },
    title: "EMI Calculator",
    canonical: "https://www.sipgo.in/emi-calculator",
    meta: {
      title: "EMI Calculator - Calculate Loan EMI Instantly",
      description:
        "Calculate your monthly EMI for any type of loan using our EMI Calculator.",
      keywords: "EMI Calculator, Loan EMI, Monthly Payment Calculator",
    },
    FAQ: EMIFAQ,
    Info: EMIInfo,
  },
  "home-loan-calculator": {
    loanType: "home",
    schemaType: "MortgageLoan",
    defaultValues: { loan: 3000000, rate: 7.5, tenure: 20 },
    title: "Home Loan Calculator",
    canonical: "https://www.sipgo.in/home-loan-calculator",
    meta: {
      title: "Home Loan Calculator - EMI, Interest & Payment",
      description:
        "Calculate your home loan EMI with our mortgage calculator. Plan your housing loan payments effectively.",
      keywords: "Home Loan Calculator, Mortgage Calculator, Housing Loan EMI",
    },
    FAQ: HomeLoanFAQ,
    Info: HomeLoanInfo,
  },
  "car-loan-calculator": {
    loanType: "car",
    schemaType: "AutoLoan",
    defaultValues: { loan: 500000, rate: 9, tenure: 7 },
    title: "Car Loan Calculator",
    canonical: "https://www.sipgo.in/car-loan-calculator",
    meta: {
      title: "Car Loan Calculator - Easy EMI Estimation",
      description:
        "Calculate your car loan EMI with our specialized calculator. Adjust loan amount, interest rate, and tenure.",
      keywords: "Car Loan Calculator, Auto Loan EMI, Vehicle Loan Calculator",
    },
    FAQ: CarLoanFAQ,
    Info: CarLoanInfo,
  },
  "personal-loan-calculator": {
    loanType: "personal",
    schemaType: "PersonalLoan",
    defaultValues: { loan: 200000, rate: 11, tenure: 4 },
    title: "Personal Loan Calculator",
    canonical: "https://www.sipgo.in/personal-loan-calculator",
    meta: {
      title: "Personal Loan EMI Calculator Online",
      description:
        "Calculate your personal loan EMI with our easy-to-use calculator. Compare different loan scenarios.",
      keywords:
        "Personal Loan Calculator, Unsecured Loan EMI, Quick Loan Calculator",
    },
    FAQ: PersonalLoanFAQ,
    Info: PersonalLoanInfo,
  },
  "education-loan-calculator": {
    loanType: "education",
    schemaType: "EducationalLoan",
    defaultValues: { loan: 1000000, rate: 8.5, tenure: 10 },
    title: "Education Loan Calculator",
    canonical: "https://www.sipgo.in/education-loan-calculator",
    meta: {
      title: "Education Loan EMI Calculator - Study Loan Estimator",
      description:
        "Calculate your education loan EMI and plan your student loan repayments effectively.",
      keywords:
        "Education Loan Calculator, Student Loan EMI, Study Loan Planner",
    },
    FAQ: EducationLoanFAQ,
    Info: EducationLoanInfo,
  },
};

export default loanConfigs;
