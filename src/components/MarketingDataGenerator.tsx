import React, { useState } from "react";

const MarketingDataGenerator = () => {
  const parentKeywords = [
    "SEO",
    "Content Marketing",
    "Email Marketing",
    "Social Media",
    "PPC",
  ];
  const childKeywords = [
    "CTR",
    "Impressions",
    "Clicks",
    "Conversions",
    "Bounce Rate",
  ];

  const generateData = () => {
    const data = [];

    parentKeywords.forEach((parent) => {
      childKeywords.forEach((child) => {
        data.push({
          parentKeyword: parent,
          childKeyword: child,
          value: Math.floor(Math.random() * (10000 - 1000) + 1000),
        });
      });
    });

    return data;
  };

  const downloadCSV = (data) => {
    const csvContent =
      "Parent Keyword,Child Keyword,Value\n" +
      data
        .map((row) => `${row.parentKeyword},${row.childKeyword},${row.value}`)
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "marketing_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        onClick={() => {
          const data = generateData();
          downloadCSV(data);
        }}
      >
        Download Marketing Data CSV
      </button>
    </div>
  );
};

export default MarketingDataGenerator;
