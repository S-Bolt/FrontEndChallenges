/* eslint-disable react/no-unescaped-entities */
import { TopLine } from "./TopLine";
import { MortgageAmount } from "./MortgageAmount";
import { TermAndRates } from "./TermAndRates";
import { MortgageTypes } from "./MortgageTypes";
import { CalculatorButton } from "./CalculatorButton";
import { ResultEmpty } from "./calculator-results-components/ResultEmpty";
import { useState } from "react";
import { YourResults } from "./calculator-results-components/YourResults";

export default function Calculator() {
  const [mortgageData, setMortgageData] = useState({
    amount: 0,
    term: 0,
    rate: 0,
    type: "",
  });

  const [result, setResult] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayment: 0,
  });

  const [errors, setErrors] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });

  function updateMortgageAmount(amount) {
    setMortgageData((prev) => ({ ...prev, amount }));
  }

  function updateTerm(term) {
    setMortgageData((prev) => ({ ...prev, term }));
  }

  function updateRate(rate) {
    setMortgageData((prev) => ({ ...prev, rate }));
  }

  const updateMortgageType = (type) => {
    setMortgageData((prev) => ({ ...prev, type }));
  };

  const clearForm = () => {
    setMortgageData({ amount: 0, term: 0, rate: 0, type: "" });
    setResult({ monthlyPayment: 0, totalInterest: 0, totalPayment: 0 });
    setErrors({ amount: "", term: "", rate: "", type: "" });
  };

  const handleCalculate = () => {
    const { amount, term, rate, type } = mortgageData;

    const newErrors = {
      amount: amount ? "" : "This field is required",
      term: term ? "" : "This field is required",
      rate: rate ? "" : "This field is required",
      type: type ? "" : "This field is required",
    };

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setErrors({ amount: "", term: "", rate: "", type: "" });

    const n = term * 12;
    let monthlyPayment = 0;
    let totalInterest = 0;
    let totalPayment = 0;

    if (type === "repayment") {
      // Repayment (Principal & Interest) Mortgage Calculation
      const r = rate / 100 / 12;
      // Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
      monthlyPayment =
        (amount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      totalInterest = monthlyPayment * n - amount;
      totalPayment = amount + totalInterest;
    } else if (type === "interest-only") {
      // Interest-Only Mortgage Calculation
      monthlyPayment = (amount * (rate / 100)) / 12;
      totalInterest = monthlyPayment * n;
      totalPayment = amount + totalInterest;
    }

    setResult({ monthlyPayment, totalInterest, totalPayment });
  };

  return (
    <div className="flex h-[50rem] items-center justify-center bg-neutral-slate-100 md:h-[52rem]">
      {/* Component housing */}
      <div className="flex h-full w-full flex-col self-center rounded-3xl bg-neutral-white md:h-2/3 md:w-3/4 md:flex-row">
        {/* Calculator Left Side */}
        <div className="h-2/3 w-full p-6 md:h-full md:w-1/2 md:p-8 lg:p-10">
          <TopLine onClearForm={clearForm} />
          <MortgageAmount
            onUpdateMortgageAmount={updateMortgageAmount}
            value={mortgageData.amount}
            error={errors.amount}
          />
          <TermAndRates
            onUpdateTerm={updateTerm}
            onUpdateRate={updateRate}
            rateValue={mortgageData.rate}
            termValue={mortgageData.term}
            rateError={errors.rate}
            termError={errors.term}
          />
          <MortgageTypes
            onUpdateMortgageType={updateMortgageType}
            error={errors.type}
          />
          <CalculatorButton onHandleCalculate={handleCalculate} />
        </div>

        {/* Results Right Side */}
        <div
          className={
            result.monthlyPayment === 0 || isNaN(result.monthlyPayment)
              ? "flex h-1/3 w-full flex-col items-center justify-center bg-neutral-slate-900 p-2 md:h-full md:w-1/2 md:rounded-bl-[3.5rem] md:rounded-br-3xl md:rounded-tr-3xl md:p-8 lg:p-10"
              : "flex h-1/3 w-full flex-col bg-neutral-slate-900 p-4 md:h-full md:w-1/2 md:rounded-bl-[3.5rem] md:rounded-br-3xl md:rounded-tr-3xl md:p-8 lg:p-10"
          }
        >
          {/* Your results */}
          {result.monthlyPayment === 0 || isNaN(result.monthlyPayment) ? (
            <ResultEmpty />
          ) : (
            <YourResults result={result} />
          )}
        </div>
      </div>
    </div>
  );
}
