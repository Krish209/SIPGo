"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head"; // for SEO, Schema Markup, etc.
import { formatNumber, formatChartNumber } from "../../utils/NumberFormater";
import { BarChart } from "../../utils/Bar";
import { DoughnutChart } from "../../utils/Donut";
import LumpsumInfo from "./Lumpsum Info";
import LumpsumFAQ from "./Lumpsum Faq";

function LumpsumCalc() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000); // Default ₹1000 for SIP
  const [lumpsumAmount, setLumpsumAmount] = useState(10000); // Default ₹10000 for Lump Sum
  const [rateOfInterest, setRateOfInterest] = useState(12); // Default 12% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Default 5 years
  const [isSIP, setIsSIP] = useState(false); // default to Lumpsum

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  const [calculateWithInflation, setCalculateWithInflation] = useState(false);
  const [inflationRate, setInflationRate] = useState(6);

  // Error States
  const [errorMessages, setErrorMessages] = useState({
    monthlyInvestment: "",
    lumpsumAmount: "",
    rateOfInterest: "",
    investmentPeriod: "",
  });

  // Maximum limits for inputs
  const maxMonthlyInvestment = 5000000;
  const maxLumpsumAmount = 10000000;
  const maxRateOfInterest = 30;
  const maxInvestmentPeriod = 50;

  const handleMonthlyInvestmentChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxMonthlyInvestment)
    );
    setMonthlyInvestment(value);
  };

  const handleLumpsumAmountChange = (e) => {
    let value = Math.max(0, Math.min(Number(e.target.value), maxLumpsumAmount));
    setLumpsumAmount(value);
  };

  const handleRateOfInterestChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxRateOfInterest)
    );
    setRateOfInterest(value);
  };

  const handleInvestmentPeriodChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxInvestmentPeriod)
    );
    setInvestmentPeriod(value);
  };

  // Recalculate data if inputs are valid
  useEffect(() => {
    // Check if values are valid
    if (
      monthlyInvestment < 500 ||
      lumpsumAmount < 500 ||
      rateOfInterest <= 0 ||
      investmentPeriod <= 0
    ) {
      setErrorMessages({
        monthlyInvestment:
          monthlyInvestment < 500 ? "Investment must be at least ₹500" : "",
        lumpsumAmount:
          lumpsumAmount < 500 ? "Investment must be at least ₹500" : "",
        rateOfInterest:
          rateOfInterest <= 0
            ? "Rate of interest must be greater than zero"
            : "",
        investmentPeriod:
          investmentPeriod <= 0
            ? "Investment period must be greater than zero"
            : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      monthlyInvestment: "",
      lumpsumAmount: "",
      rateOfInterest: "",
      investmentPeriod: "",
    });

    const monthlyRate = rateOfInterest / 12 / 100;
    const inflationMultiplier = calculateWithInflation
      ? 1 + inflationRate / 100
      : 1;

    let totalValueCalc = 0;
    let investedAmountCalc = 0;
    let estimatedReturnsCalc = 0;
    let barDataInvested = [];
    let barDataReturns = [];
    let labels = [];
    let maxMonths = investmentPeriod * 12;

    if (isSIP) {
      // SIP Calculation
      for (let i = 1; i <= maxMonths; i++) {
        totalValueCalc += monthlyInvestment * Math.pow(1 + monthlyRate, i);
        investedAmountCalc += monthlyInvestment;

        estimatedReturnsCalc = totalValueCalc - investedAmountCalc;

        if (calculateWithInflation) {
          totalValueCalc *= inflationMultiplier;
          investedAmountCalc *= inflationMultiplier;
          estimatedReturnsCalc *= inflationMultiplier;
        }

        if (i % 12 === 0) {
          barDataInvested.push(investedAmountCalc);
          barDataReturns.push(estimatedReturnsCalc);
          labels.push(`${i / 12} Year${i / 12 > 1 ? "s" : ""}`);
        }
      }
    } else {
      // Lump Sum Calculation
      let tot = 0;
      let estireturn = 0;

      for (let i = 1; i <= investmentPeriod; i++) {
        tot = lumpsumAmount * Math.pow(1 + rateOfInterest / 100, i);
        estireturn = tot - lumpsumAmount;

        barDataInvested.push(lumpsumAmount);
        barDataReturns.push(estireturn);
        labels.push(`${i} Year${i > 1 ? "s" : ""}`);
      }

      totalValueCalc =
        lumpsumAmount * Math.pow(1 + rateOfInterest / 100, investmentPeriod);
      investedAmountCalc = lumpsumAmount;
      estimatedReturnsCalc = totalValueCalc - investedAmountCalc;

      if (calculateWithInflation) {
        totalValueCalc *= inflationMultiplier;
        investedAmountCalc *= inflationMultiplier;
        estimatedReturnsCalc *= inflationMultiplier;
      }
    }

    setInvestedAmount(investedAmountCalc);
    setEstimatedReturns(estimatedReturnsCalc);
    setTotalValue(totalValueCalc);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Invested Amount",
          data: barDataInvested,
          backgroundColor: "rgba(75,192,192,0.6)",
        },
        {
          label: "Estimated Returns",
          data: barDataReturns,
          backgroundColor: "rgba(153,102,255,0.6)",
        },
      ],
    });

    setDonutChartData({
      labels: ["Invested Amount", "Estimated Returns"],
      datasets: [
        {
          data: [investedAmountCalc, estimatedReturnsCalc],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [
    monthlyInvestment,
    lumpsumAmount,
    rateOfInterest,
    investmentPeriod,
    calculateWithInflation,
    inflationRate,
    isSIP,
  ]);

  // For schema
  const pageTitle =
    "Lumpsum Calculator - Calculate Returns on One-Time Investment";
  const pageDescription =
    "Estimate the future value of your one-time mutual fund investment using our Lumpsum Calculator. Ideal for long-term wealth creation planning.";
  const canonicalUrl = "https://www.sipgo.in/lumpsum-calculator";

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
            "@id": "https://www.sipgo.in/lumpsum-calculator#breadcrumb",
            name: "Lumpsum Calculator Navigation Path",
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
                name: "Lumpsum Calculator",
                item: "https://www.sipgo.in/lumpsum-calculator",
              },
            ],
          })}
        </script>
      </>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-2 sm:my-4">
        Lump Sum Calculator
      </h1>

      {/* Lump Sum / SIP Button Toggle */}
      <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 px-0.5 vs:p-0 mb-4">
        <button
          onClick={() => setIsSIP(true)}
          className={`px-6 py-2 border-2 border-tomato text-sm font-bold rounded-lg ${
            isSIP ? "bg-tomato text-white" : "bg-white text-black hover:bg-gray-200 cursor-pointer"
          }`}
        >
          SIP
        </button>

        <button
          onClick={() => setIsSIP(false)}
          className={`px-6 py-2 border-2 border-tomato text-sm font-bold rounded-lg ${
            !isSIP ? "bg-tomato text-white" : "bg-white text-black hover:bg-gray-200 cursor-pointer"
          }`}
        >
          Lumpsum
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border border-gray-200">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Monthly Investment or Lump Sum Amount */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="monthly-investment-label" className="font-medium">
                    {isSIP ? "Monthly Investment" : "Lump Sum Investment"}
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={isSIP ? monthlyInvestment : lumpsumAmount}
                      onChange={
                        isSIP
                          ? handleMonthlyInvestmentChange
                          : handleLumpsumAmountChange
                      }
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages[
                          isSIP ? "monthlyInvestment" : "lumpsumAmount"
                        ]
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder={isSIP ? "1000" : "10000"}
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>

                {/* Error Message */}
                {errorMessages[
                  isSIP ? "monthlyInvestment" : "lumpsumAmount"
                ] && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {
                      errorMessages[
                        isSIP ? "monthlyInvestment" : "lumpsumAmount"
                      ]
                    }
                  </p>
                )}
              </div>

              <div className="">
                <input
                  type="range"
                  min="500"
                  max={isSIP ? maxMonthlyInvestment : maxLumpsumAmount}
                  step="100"
                  value={isSIP ? monthlyInvestment : lumpsumAmount}
                  onChange={
                    isSIP
                      ? handleMonthlyInvestmentChange
                      : handleLumpsumAmountChange
                  }
                  className="w-full cursor-pointer"
                  aria-labelledby="monthly-investment-label"
                />
              </div>
            </div>

            {/* Rate of Interest */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="rate-label" className="font-medium">
                    Expected Rate of Interest (p.a)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={rateOfInterest}
                      onChange={handleRateOfInterestChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.rateOfInterest ? "border-red-500" : ""
                      }`}
                      placeholder="12"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>

                {errorMessages.rateOfInterest && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.rateOfInterest}
                  </p>
                )}
              </div>
              <div className="">
                <input
                  type="range"
                  min="1"
                  max={maxRateOfInterest}
                  step="0.1"
                  value={rateOfInterest}
                  onChange={handleRateOfInterestChange}
                  className="w-full cursor-pointer"
                  aria-labelledby="rate-label"
                />
              </div>
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="investment-period-label" className="font-medium">
                    Investment Period
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={investmentPeriod}
                      onChange={handleInvestmentPeriodChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.investmentPeriod ? "border-red-500" : ""
                      }`}
                      placeholder="5"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      Year(s)
                    </span>
                  </div>
                </div>

                {/* Error Message */}
                {errorMessages.investmentPeriod && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.investmentPeriod}
                  </p>
                )}
              </div>

              <div className="">
                <input
                  type="range"
                  min="1"
                  max={maxInvestmentPeriod}
                  step="1"
                  value={investmentPeriod}
                  onChange={handleInvestmentPeriodChange}
                  className="w-full cursor-pointer"
                  aria-labelledby="investment-period-label"
                />
              </div>
            </div>
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base">
            {" "}
            {/* Add w-full for responsiveness */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              {donutChartData && donutChartData.datasets ? (
                <div className="h-32 ws:h-44 md:h-32 w-auto lg:h-44 mx-auto">
                  <DoughnutChart data={donutChartData} />
                </div>
              ) : null}

              {/* Legend */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                {/* Invested Amount */}
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-mint"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Invested Amount</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(investedAmount)}{" "}
                      {formatNumber(investedAmount)
                        ? `(${formatNumber(investedAmount)})`
                        : null}
                    </span>
                  </div>
                </div>

                {/* Estimated Returns */}
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Estimated Returns</span>
                    <span className="font-semibold">
                      {" "}
                      ₹{formatChartNumber(estimatedReturns)}{" "}
                      {formatNumber(estimatedReturns)
                        ? `(${formatNumber(estimatedReturns)})`
                        : null}
                    </span>
                  </div>
                </div>

                {/* Total Value */}
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-gray-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Total Value</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(totalValue)}{" "}
                      {formatNumber(totalValue)
                        ? `(${formatNumber(totalValue)})`
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked Bar Chart */}
        <div className="py-4 lg:py-6 lg:p-6 p-1 sm:p-2 rounded-xl border border-gray-200 overflow-hidden">
          {chartData && chartData.labels && chartData.datasets ? (
            <div className="w-full">
              <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
                Investment Growth Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
              <div className="text-[15px] md:text-base">
                The above chart shows how the power of compounding can increase
                the returns every year.
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LumpsumCalc;
