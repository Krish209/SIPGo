"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head"; // for SEO, Schema Markup, etc.
import { DoughnutChart } from "../../utils/Donut";
import { BarChart } from "../../utils/Bar";
import { formatNumber, formatChartNumber } from "../../utils/NumberFormater";
import ROIInfo from "./ROI Info";
import ROIFAQ from "./ROI Faq";

function ROICalc() {
  const [investedAmount, setInvestedAmount] = useState(50000); // Default ₹50,000
  const [returnedAmount, setReturnedAmount] = useState(75000); // Default ₹75,000
  const [yearsInvested, setYearsInvested] = useState(5); // Default 5 years

  const [totalGain, setTotalGain] = useState(0); // Total Gain
  const [roi, setRoi] = useState(0); // Simple ROI
  const [cagr, setCagr] = useState(0); // CAGR

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  const maxInvestedAmount = 1000000; // Max limit for invested amount
  const maxReturnedAmount = 1000000; // Max limit for returned amount
  const maxYearsInvested = 50; // Max years of investment

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    investedAmount: "",
    returnedAmount: "",
    yearsInvested: "",
  });

  useEffect(() => {
    if (investedAmount <= 0 || returnedAmount <= 0 || yearsInvested <= 0) {
      setErrorMessages({
        investedAmount:
          investedAmount <= 0
            ? "Invested Amount must be greater than zero"
            : "",
        returnedAmount:
          returnedAmount <= 0
            ? "Returned Amount must be greater than zero"
            : "",
        yearsInvested:
          yearsInvested <= 0
            ? "Investment Duration must be greater than zero"
            : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      investedAmount: "",
      returnedAmount: "",
      yearsInvested: "",
    });

    // Calculate Simple ROI = (Final Amount - Initial Investment) / Initial Investment * 100
    const simpleROI =
      ((returnedAmount - investedAmount) / investedAmount) * 100;
    setRoi(simpleROI.toFixed(2));

    // Calculate CAGR = (Final Amount / Initial Investment) ^ (1 / Years Invested) - 1
    const cagrCalc =
      Math.pow(returnedAmount / investedAmount, 1 / yearsInvested) - 1;
    setCagr((cagrCalc * 100).toFixed(2));

    // Total Gain = Final Amount - Initial Investment
    const totalGainCalc = returnedAmount - investedAmount;
    setTotalGain(totalGainCalc);

    // Prepare chart data for ROI and Total Amount
    let barDataROI = [];
    for (let i = 1; i <= yearsInvested; i++) {
      let yearlyROI = investedAmount * (1 + cagrCalc * i);
      barDataROI.push(yearlyROI);
    }

    const labels = Array.from(
      { length: yearsInvested },
      (_, index) => `${index + 1} Year${index + 1 > 1 ? "s" : ""}`
    );

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Investment Growth",
          data: barDataROI,
          backgroundColor: "rgba(153,102,255,0.6)",
        },
      ],
    });

    // Donut chart data
    setDonutChartData({
      labels: ["Invested Amount", "Returned Amount"],
      datasets: [
        {
          data: [investedAmount, returnedAmount],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [investedAmount, returnedAmount, yearsInvested]);

  // Handlers for inputs
  const handleInvestedAmountChange = (e) =>
    setInvestedAmount(
      Math.max(0, Math.min(Number(e.target.value), maxInvestedAmount))
    );
  const handleReturnedAmountChange = (e) =>
    setReturnedAmount(
      Math.max(0, Math.min(Number(e.target.value), maxReturnedAmount))
    );
  const handleYearsInvestedChange = (e) =>
    setYearsInvested(
      Math.max(0, Math.min(Number(e.target.value), maxYearsInvested))
    );

  // For Schema
  const pageTitle = "ROI Calculator - Return on Investment Calculator";
  const pageDescription =
    "Calculate your Return on Investment (ROI) with our simple and accurate ROI Calculator. Ideal for evaluating business and personal investment returns.";
  const canonicalUrl = "https://www.sipgo.in/roi-calculator";

  return (
    <div className="p-2 vs:p-4 bg-white text-night">
      <>
        {/* ========== CRITICAL SCHEMA MARKUP ========== */}

        <script type="application/ld+json">
          {JSON.stringify({
            // Primary WebPage Schema
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            "@id": canonicalUrl,
            isPartOf: {
              "@type": "WebSite",
              name: "SIPGo Financial Calculators",
              url: "https://www.sipgo.in",
            },
            dateModified: "2025-06-15T00:00:00Z",
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/roi-calculator#breadcrumb",
            name: "ROI Calculator Navigation Path",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.sipgo.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "ROI Calculator",
                item: "https://www.sipgo.in/roi-calculator",
              },
            ],
          })}
        </script>
      </>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-2 sm:my-4">
        ROI Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border border-gray-200">
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Amount Invested */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="invested-amount-label" className="font-medium">
                    Invested Amount
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={investedAmount}
                      onChange={handleInvestedAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.investedAmount ? "border-red-500" : ""
                      }`}
                      placeholder="50000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.investedAmount && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.investedAmount}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxInvestedAmount}
                step="1000"
                value={investedAmount}
                onChange={handleInvestedAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="invested-amount-label"
              />
            </div>

            {/* Amount Returned */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="returned-amount-label" className="font-medium">
                    Returned Amount
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={returnedAmount}
                      onChange={handleReturnedAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.returnedAmount ? "border-red-500" : ""
                      }`}
                      placeholder="75000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.returnedAmount && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.returnedAmount}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxReturnedAmount}
                step="1000"
                value={returnedAmount}
                onChange={handleReturnedAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="returned-amount-label"
              />
            </div>

            {/* Years Invested */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="years-invested-label" className="font-medium">
                    Investment Duration (years)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={yearsInvested}
                      onChange={handleYearsInvestedChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.yearsInvested ? "border-red-500" : ""
                      }`}
                      placeholder="5"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      Year(s)
                    </span>
                  </div>
                </div>
                {errorMessages.yearsInvested && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.yearsInvested}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxYearsInvested}
                step="1"
                value={yearsInvested}
                onChange={handleYearsInvestedChange}
                className="w-full cursor-pointer"
                aria-labelledby="years-invested-label"
              />
            </div>
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Doughnut Chart */}
              {donutChartData && donutChartData.datasets ? (
                <div className="h-32 vs:h-44 w-auto lg:h-44 mx-auto">
                  <DoughnutChart data={donutChartData} />
                </div>
              ) : null}

              {/* Legend */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5 justify-between">
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex justify-between">
                      <span className="text-[14px] sm:text-base lg:text-[17px]">
                        Total Gain on Investment
                      </span>
                      <span className="text-base sm:text-lg lg:text-[19px]">
                        ₹{formatChartNumber(totalGain)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[14px] sm:text-base lg:text-[17px]">
                        Return on Investment (ROI)
                      </span>
                      <span className="text-base sm:text-lg lg:text-[19px]">
                        {roi}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[14px] sm:text-base lg:text-[17px]">
                        Compound Annual Growth Rate (CAGR)
                      </span>
                      <span className="text-base sm:text-lg lg:text-[19px]">
                        {cagr}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        {/* <div className="py-4 lg:py-6 lg:p-6 p-1 sm:p-2 rounded-xl border border-gray-200 overflow-hidden">
          {chartData && chartData.datasets ? (
            <div className="w-full">
              <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
                Investment Growth Over Time
              </h2>
              <div className="h-72 md:h-96 w-full mx-auto">
                <BarChart data={chartData} />
              </div>
            </div>
          ) : null}
        </div> */}
      </div>
    </div>
  );
}

export default ROICalc;
