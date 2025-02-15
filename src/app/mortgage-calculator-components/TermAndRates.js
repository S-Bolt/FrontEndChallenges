export function TermAndRates({
  onUpdateTerm,
  onUpdateRate,
  termValue,
  rateValue,
  termError,
  rateError,
}) {
  function handleTermChange(e) {
    onUpdateTerm(e.target.value);
  }

  function handleRateChange(e) {
    onUpdateRate(e.target.value);
  }

  return (
    <div className="flex flex-col lg:mb-2 lg:flex-row lg:space-x-6">
      <div className="w-full">
        <h3 className="lg:mb-2">Mortgage Term</h3>
        <div className="group flex items-center">
          <input
            id="termInput"
            type="text"
            value={termValue}
            onChange={handleTermChange}
            className="font-family-Jakarta h-9 w-full rounded-l-md border border-r-0 border-neutral-slate-500 pl-2 font-bold focus:border-primary focus:outline-none"
          ></input>
          <label
            htmlFor="termInput"
            className="h-9 rounded-r-md border border-l-0 border-neutral-slate-500 bg-neutral-slate-100 px-3 py-1 group-focus-within:border-primary group-focus-within:bg-primary"
          >
            Years
          </label>
        </div>
        <div className="mt-1 h-5">
          {termError && <p className="text-sm text-red-500">{termError}</p>}
        </div>
      </div>

      <div className="w-full">
        <h3 className="lg:mb-2">Interest Rate</h3>
        <div className="group flex items-center">
          <input
            id="rateInput"
            type="text"
            value={rateValue}
            onChange={handleRateChange}
            className="font-family-Jakarta h-9 w-full rounded-l-md border border-r-0 border-neutral-slate-500 pl-2 font-bold focus:border-primary focus:outline-none"
          ></input>
          <label
            htmlFor="rateInput"
            className="h-9 rounded-r-md border border-l-0 border-neutral-slate-500 bg-neutral-slate-100 px-3 py-1 group-focus-within:border-primary group-focus-within:bg-primary"
          >
            %
          </label>
        </div>
        <div className="mt-1 h-5">
          {rateError && <p className="text-sm text-red-500">{rateError}</p>}
        </div>
      </div>
    </div>
  );
}
