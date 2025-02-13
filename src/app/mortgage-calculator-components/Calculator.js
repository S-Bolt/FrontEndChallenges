/* eslint-disable react/no-unescaped-entities */
import { TopLine } from "./TopLine";
import { MortgageAmount } from "./MortgageAmount";
import { TermAndRates } from "./TermAndRates";
import { MortgageTypes } from "./MortgageTypes";
import { CalculatorButton } from "./CalculatorButton";
import { useState } from "react";

export default function Calculator() {
  const [mortgageData, setMortgageData] = useState({
    amount: 0,
    term: 0,
    rate: 0,
    type: "repayment",
  });
  const [result, setResult] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
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
    setMortgageData({ amount: 0, term: 0, rate: 0, type: "repayment" });
    setResult({ monthlyPayment: 0, totalInterest: 0 });
  };

  const handleCalculate = () => {
    const { amount, term, rate, type } = mortgageData;
    const n = term * 12;
    let monthlyPayment = 0;
    let totalInterest = 0;

    if (type === "repayment") {
      // Repayment (Principal & Interest) Mortgage Calculation
      const r = rate / 100 / 12;
      // Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
      monthlyPayment =
        (amount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      totalInterest = monthlyPayment * n - amount;
    } else if (type === "interest-only") {
      // Interest-Only Mortgage Calculation
      monthlyPayment = (amount * (rate / 100)) / 12;
      totalInterest = monthlyPayment * n;
    }

    setResult({ monthlyPayment, totalInterest });
  };

  return (
    <div className="flex h-[50rem] items-center justify-center bg-neutral-slate-100 lg:h-[42rem]">
      {/* Component housing */}
      <div className="flex h-full w-full flex-col self-center bg-neutral-white rounded-3xl  md:h-2/3 md:w-3/4 md:flex-row">
        {/* Calculator Left Side */}
        <div className="h-2/3 w-full p-8 md:h-full md:w-1/2 ">
          <TopLine onClearForm={clearForm} />
          <MortgageAmount onUpdateMortgageAmount={updateMortgageAmount} />
          <TermAndRates onUpdateTerm={updateTerm} onUpdateRate={updateRate} />
          <MortgageTypes />
          <CalculatorButton onHandleCalculate={handleCalculate} />
        </div>

        {/* Results Right Side */}
        <div className="h-1/3 w-full bg-neutral-slate-900 rounded-tr-3xl rounded-br-3xl rounded-bl-[3.5rem] p-8 flex flex-col  md:h-full md:w-1/2">
          {/* Your results */}
          <h3 className="text-neutral-white text-2xl font-semibold font-family-Jakarta mb-2">
            Your results
          </h3>
          <p className="text-neutral-slate-500 font-semibold font-family-Jakarta mb-8">
            Your results are shown below based on the information you provided
            to adjust the results, edit the form and click "calculate
            repayments" again.
          </p>

          {/* Your monthly replayments */}
          <div className="bg-neutral-slate-800">
            <div className="m-6">
              <p className="text-neutral-slate-500 font-semibold font-family-Jakarta mb-2">
                Your monthly repayments
              </p>
              <h1 className="text-primary text-[3.5rem] font-semibold font-family-Jakarta mb-6 border-b-2 border-neutral-slate-700">
                $1,794.74
              </h1>
            </div>
            <div className="m-6">
              <p className="text-neutral-slate-500 font-semibold font-family-Jakarta mb-2">
                Total you'll repay over the term
              </p>
              <h3 className="text-neutral-white text-2xl font-semibold font-family-Jakarta mb-2">
                $539,322.94
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
