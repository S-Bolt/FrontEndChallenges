/* eslint-disable react/no-unescaped-entities */
import { TopLine } from "./TopLine";
import { MortgageAmount } from "./MortgageAmount";
import { TermAndRates } from "./TermAndRates";
import { MortgageTypes } from "./MortgageTypes";
import { CalculatorButton } from "./CalculatorButton";
import { ResultEmpty } from "./calculator-results-components/ResultEmpty";
import { YourResults } from "./calculator-results-components/YourResults";
import { useCalculator } from "./_hooks_/useCalculator";

export default function Calculator() {
  const {
    state: {
      amount,
      term,
      rate,
      type,
      monthlyPayment,
      totalInterest,
      totalPayment,
      errors,
    },
    updateField,
    updateType,
    clearForm,
    calculate,
  } = useCalculator();

  return (
    <div className="flex h-[50rem] items-center justify-center bg-neutral-slate-100 md:h-[52rem]">
      {/* Component housing */}
      <div className="flex h-full w-full flex-col self-center rounded-3xl bg-neutral-white md:h-2/3 md:w-3/4 md:flex-row">
        {/* Calculator Left Side */}
        <div className="h-2/3 w-full p-6 md:h-full md:w-1/2 md:p-8 lg:p-10">
          <TopLine onClearForm={clearForm} />
          <MortgageAmount
            onUpdateMortgageAmount={(val) => updateField("amount", val)}
            value={amount}
            error={errors.amount}
          />
          <TermAndRates
            termValue={term}
            rateValue={rate}
            onUpdateTerm={(val) => updateField("term", val)}
            onUpdateRate={(val) => updateField("rate", val)}
            termError={errors.term}
            rateError={errors.rate}
          />
          <MortgageTypes
            selectedType={type}
            onUpdateMortgageType={(val) => updateType(val)}
            error={errors.type}
          />
          <CalculatorButton onHandleCalculate={calculate} />
        </div>

        {/* Results Right Side */}
        <div
          data-testid="results-container"
          className={
            monthlyPayment === 0 || isNaN(monthlyPayment)
              ? "flex h-1/3 w-full flex-col items-center justify-center bg-neutral-slate-900 p-2 md:h-full md:w-1/2 md:rounded-bl-[3.5rem] md:rounded-br-3xl md:rounded-tr-3xl md:p-8 lg:p-10"
              : "flex h-1/3 w-full flex-col bg-neutral-slate-900 p-4 md:h-full md:w-1/2 md:rounded-bl-[3.5rem] md:rounded-br-3xl md:rounded-tr-3xl md:p-8 lg:p-10"
          }
        >
          {/* Your results */}
          {monthlyPayment === 0 || isNaN(monthlyPayment) ? (
            <ResultEmpty />
          ) : (
            <YourResults
              result={{ monthlyPayment, totalInterest, totalPayment }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
