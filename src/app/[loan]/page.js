import loanConfigs from "@/utils/LoanConfig";
import EMICalculator from "../emi-calculator/EMI Calc";

export async function generateMetadata({ params }) {
  const config = loanConfigs[params.loan] || {};
  return {
    title: config.meta?.title || "EMI Calculator",
    description: config.meta?.description,
    keywords: config.meta?.keywords,
  };
}

export default function LoanPage({ params }) {
  const loanSlug = params.loan;
  const config = loanConfigs[loanSlug];

  if (!config) return <h1>404 - Invalid Loan Type</h1>;

  const { title, loanType, defaultValues, FAQ: FAQComponent, Info: InfoComponent } = config;

  return (
    <div className="">
      <EMICalculator loanType={loanType} defaultValues={defaultValues} />
      <InfoComponent />
      <FAQComponent />
    </div>
  );
}
