import EMIFAQ from "@/app/emi-calculator/EMI Faq";
import EMIInfo from "@/app/emi-calculator/EMI Info";

const loanConfigs = {
  "home-loan-calculator": {
    loanType: "home",
    defaultValues: { loan: 3000000, rate: 7.5, tenure: 20 },
    title: "Home Loan Calculator",
    meta: {
      title: "Home Loan Calculator - EMI, Interest & Payment",
      description: "Calculate EMI for your home loan easily...",
      keywords: "home loan, emi calculator",
    },
    FAQ: EMIFAQ,
    Info: EMIInfo,
  },
  "car-loan-calculator": {
    loanType: "car",
    defaultValues: { loan: 500000, rate: 9, tenure: 7 },
    title: "Car Loan Calculator",
    meta: {
      title: "Car Loan Calculator - Easy EMI Estimation",
      description: "Estimate car loan EMI quickly...",
      keywords: "car loan, emi calculator",
    },
    FAQ: EMIFAQ,
    Info: EMIInfo,
  },
  "personal-loan-calculator": {
    loanType: "personal",
    defaultValues: { loan: 200000, rate: 11, tenure: 4 },
    title: "Personal Loan Calculator",
    meta: {
      title: "Personal Loan EMI Calculator Online",
      description: "Calculate EMI for personal loans in seconds...",
      keywords: "personal loan, emi calculator",
    },
    FAQ: EMIFAQ,
    Info: EMIInfo,
  },
  "education-loan-calculator": {
    loanType: "education",
    defaultValues: { loan: 1000000, rate: 8.5, tenure: 10 },
    title: "Education Loan Calculator",
    meta: {
      title: "Education Loan EMI Calculator - Study Loan Estimator",
      description: "Easily calculate your EMI for education loans, including interest and repayment.",
      keywords: "education loan, student loan, emi calculator, study loan",
    },
    FAQ: EMIFAQ,
    Info: EMIInfo,
  },
};

export default loanConfigs;
