// app/[loan]/page.js

import { notFound } from "next/navigation";
import loanConfigs from "@/utils/LoanConfig";
import EMICalculator from "./emi-calculator/EMI Calc";

export async function generateMetadata({ params }, parent) {
  const { loan } = await params;
  const config = loanConfigs[loan];
  if (!config) return {};

  return {
    title: config.meta.title,
    description: config.meta.description,
    keywords: config.meta.keywords,
    alternates: {
      canonical: config.canonical,
    },
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      url: config.canonical,
      type: "website",
      images: ["https://www.sipgo.in/images/logo.png"],
    },
    twitter: {
      title: config.meta.title,
      description: config.meta.description,
      card: "summary_large_image",
      images: ["https://www.sipgo.in/images/logo.png"],
    },
  };
}

export default async function LoanPage({ params }) {
  const { loan } = await params;
  const config = loanConfigs[loan];
  if (!config) notFound();

  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <EMICalculator 
        defaultValues={config.defaultValues}
        title={config.title}
        canonical={config.canonical}
        meta={config.meta}
      />
      <config.Info />
      <config.FAQ />
    </div>
  );
}

// import { notFound } from "next/navigation";
// import loanConfigs from "@/utils/LoanConfig";
// import EMICalculator from "./emi-calculator/EMI Calc";

// export async function generateMetadata({ params }) {
//   const config = loanConfigs[params.loan];
//   if (!config) return {};
  
//   return {
//     title: config.meta.title,
//     description: config.meta.description,
//     alternates: {
//       canonical: config.canonical,
//     },
//     keywords: config.meta.keywords,
//     openGraph: {
//       title: config.meta.title,
//       description: config.meta.description,
//       url: config.canonical,
//       type: 'website',
//       images: ["https://www.sipgo.in/images/logo.png"],
//     },
//     twitter: {
//       title: config.meta.title,
//       description: config.meta.description,
//       card: 'summary_large_image',
//       images: ["https://www.sipgo.in/images/logo.png"],
//     },
//   };
// }

// export default function LoanPage({ params }) {
//   const config = loanConfigs[params.loan];
//   if (!config) notFound();

//   return (
//     <div className="space-y-8">
//       <EMICalculator 
//         defaultValues={config.defaultValues}
//         title={config.title}
//         canonical={config.canonical}
//         meta={config.meta}
//       />
//       <config.Info />
//       <config.FAQ />
//     </div>
//   );
// }
