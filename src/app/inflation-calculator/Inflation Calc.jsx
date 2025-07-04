"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head"; // for SEO, Schema Markup, etc.
import { BarChart } from "../../utils/Bar";
import { DoughnutChart } from "../../utils/Donut";
import { formatNumber, formatChartNumber } from "../../utils/NumberFormater";
import InflationInfo from "./Inflation Info";
import InflationFAQ from "./Inflation Faq";

function InflationCalc() {
  const [initialAmount, setInitialAmount] = useState(10000); // Default ₹10000
  const [annualInflationRate, setAnnualInflationRate] = useState(5); // Default 5% p.a.
  const [years, setYears] = useState(10); // Default 10 years

  const [adjustedAmount, setAdjustedAmount] = useState(0);
  const [inflatedAmount, setInflatedAmount] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    initialAmount: "",
    annualInflationRate: "",
    years: "",
  });

  const maxInitialAmount = 10000000;
  const maxAnnualInflationRate = 20;
  const maxYears = 50;

  useEffect(() => {
    if (initialAmount < 1000 || annualInflationRate < 0 || years <= 0) {
      setErrorMessages({
        initialAmount:
          initialAmount <= 0 ? "Initial amount must be at least ₹1000" : "",
        annualInflationRate:
          annualInflationRate < 0 ? "Inflation rate must be at least zero" : "",
        years: years <= 0 ? "Number of years must be at least zero" : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      initialAmount: "",
      annualInflationRate: "",
      years: "",
    });

    let inflatedAmountCalc = initialAmount;

    // Arrays to store yearly values for the bar chart
    const barDataInflated = [];
    const barDataAdjusted = [];
    let accumulatedValue = initialAmount;

    // Calculate the inflated amount for each year
    for (let year = 1; year <= years; year++) {
      // Apply inflation for the current year
      inflatedAmountCalc = inflatedAmountCalc * (1 + annualInflationRate / 100);

      // Save the data for the current year
      barDataAdjusted.push(initialAmount);
      barDataInflated.push(inflatedAmountCalc);
    }

    const adjustedAmountCalc = inflatedAmountCalc - initialAmount;

    setAdjustedAmount(adjustedAmountCalc);
    setInflatedAmount(inflatedAmountCalc);

    // Chart Data
    const labels = Array.from(
      { length: years },
      (_, index) => `${index + 1} Year${index + 1 > 1 ? "s" : ""}`
    );

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Adjusted Amount",
          data: barDataAdjusted,
          backgroundColor: "rgba(75,192,192,0.6)",
        },
        {
          label: "Inflated Amount",
          data: barDataInflated,
          backgroundColor: "rgba(153,102,255,0.6)",
        },
      ],
    });

    setDonutChartData({
      labels: ["Adjusted Amount", "Inflated Amount"],
      datasets: [
        {
          data: [initialAmount, inflatedAmountCalc],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [initialAmount, annualInflationRate, years]);

  // Handlers for inputs
  const handleInitialAmountChange = (e) =>
    setInitialAmount(
      Math.max(0, Math.min(Number(e.target.value), maxInitialAmount))
    );
  const handleAnnualInflationRateChange = (e) =>
    setAnnualInflationRate(
      Math.max(0, Math.min(Number(e.target.value), maxAnnualInflationRate))
    );
  const handleYearsChange = (e) =>
    setYears(Math.max(0, Math.min(Number(e.target.value), maxYears)));

  // For Schema
  const pageTitle = "Inflation Calculator - Estimate Future Value of Money";
  const pageDescription =
    "Understand how inflation affects your savings with our Inflation Calculator. Plan better by adjusting your investment goals for inflation.";
  const canonicalUrl = "https://www.sipgo.in/inflation-calculator";

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
            "@id": "https://www.sipgo.in/inflation-calculator#breadcrumb",
            name: "Inflation Calculator Navigation Path",
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
                name: "Inflation Calculator",
                item: "https://www.sipgo.in/inflation-calculator",
              },
            ],
          })}
        </script>
      </>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-2 sm:my-4">
        Inflation Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border border-gray-200">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Initial Amount */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="initial-amount-label" className="font-medium">
                    Initial Amount
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={initialAmount}
                      onChange={handleInitialAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.initialAmount ? "border-red-500" : ""
                      }`}
                      placeholder="10000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.initialAmount && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.initialAmount}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxInitialAmount}
                step="100"
                value={initialAmount}
                onChange={handleInitialAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="initial-amount-label"
              />
            </div>

            {/* Inflation Rate */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="inflation-rate-label" className="font-medium">
                    Inflation Rate (p.a)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={annualInflationRate}
                      onChange={handleAnnualInflationRateChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.annualInflationRate
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="5"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.annualInflationRate && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.annualInflationRate}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="0"
                max={maxAnnualInflationRate}
                step="0.1"
                value={annualInflationRate}
                onChange={handleAnnualInflationRateChange}
                className="w-full cursor-pointer"
                aria-labelledby="inflation-rate-label"
              />
            </div>

            {/* Years */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="years-label" className="font-medium">
                    Time Period (years)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={years}
                      onChange={handleYearsChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.years ? "border-red-500" : ""
                      }`}
                      placeholder="10"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      Year(s)
                    </span>
                  </div>
                </div>
                {errorMessages.years && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.years}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxYears}
                step="1"
                value={years}
                onChange={handleYearsChange}
                className="w-full cursor-pointer"
                aria-labelledby="years-label"
              />
            </div>
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Doughnut Chart */}
              {donutChartData && donutChartData.datasets ? (
                <div className="h-32 ws:h-44 md:h-32 w-auto lg:h-44 mx-auto">
                  <DoughnutChart data={donutChartData} />
                </div>
              ) : null}

              {/* Legend */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-mint"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Initial Amount</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(initialAmount)}{" "}
                      {formatNumber(initialAmount)
                        ? `(${formatNumber(initialAmount)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Inflated Amount</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(inflatedAmount)}{" "}
                      {formatNumber(inflatedAmount)
                        ? `(${formatNumber(inflatedAmount)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-gray-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Amount Increase</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(adjustedAmount)}{" "}
                      {formatNumber(adjustedAmount)
                        ? `(${formatNumber(adjustedAmount)})`
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
          {chartData && chartData.datasets ? (
            <div className="w-full">
              <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
                Inflation Impact Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
              <div className="text-[15px] md:text-base">
                - The above chart shows how inflation reduces the purchasing
                power over time.
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default InflationCalc;
