import { useState } from "react";

export function MortgageTypes({ onUpdateMortgageType, error }) {
  const [selectedType, setSelectedType] = useState("");

  function toggleType(type) {
    setSelectedType(type);
    onUpdateMortgageType(type);
  }
  function handleChange(e) {
    onUpdateMortgageType(e.target.value);
  }

  return (
    <div>
      <h3 className="lg:mb-2">Mortgage Type</h3>
      <div className="flex flex-col md:mb-1">
        <label
          onClick={() => toggleType("repayment")}
          className={`mb-3 flex h-[2.15rem] w-full cursor-pointer items-center space-x-4 border font-bold ${selectedType === "repayment" ? "border-primary bg-primary" : "border-neutral-slate-500"}`}
        >
          <input
            type="radio"
            name="mortgageType"
            value="repayment"
            checked={selectedType === "repayment"}
            onChange={handleChange}
            className="ml-4 accent-white"
          ></input>
          <span className="font-family-Jakarta">Repayment</span>
        </label>

        <label
          onClick={() => toggleType("interest-only")}
          className={`mb-1 flex h-[2.15rem] w-full cursor-pointer items-center space-x-4 border font-bold lg:mb-2 ${selectedType === "interest-only" ? "border-primary bg-primary" : "border-neutral-slate-500"}`}
        >
          <input
            type="radio"
            name="mortgageType"
            value="interest-only"
            checked={selectedType === "interest-only"}
            onChange={handleChange}
            className="ml-4 accent-white"
          ></input>
          <span className="font-family-Jakarta font-bold">Interest Only</span>
        </label>
        <div className="mt-1 h-5">
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
