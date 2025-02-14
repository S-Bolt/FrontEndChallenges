export function TermAndRates({
  onUpdateTerm,
  onUpdateRate,
  termValue,
  rateValue,
  termError,
  rateError,
}) {
  function handleTermChange(e) {
    const term = e.target.value;
    onUpdateTerm(term === "" ? "" : parseFloat(term));
  }

  function handleRateChange(e) {
    const rate = e.target.value;
    onUpdateRate(rate === "" ? "" : parseFloat(rate));
  }

  return (
    <div className="flex flex-col lg:mb-2 lg:flex-row lg:space-x-6">
      <div>
        <h3 className="lg:mb-2">Mortgage Term</h3>
        <div className="group flex items-center md:mb-1 lg:mb-0">
          <input
            type="text"
            value={termValue}
            onChange={handleTermChange}
            className="font-family-Jakarta h-[2.15rem] w-full rounded-l-md border border-r-0 border-neutral-slate-500 pl-2 font-bold focus:border-primary focus:outline-none"
          ></input>
          <label className="rounded-r-md border border-l-0 border-neutral-slate-500 bg-neutral-slate-100 px-3 py-1 group-focus-within:border-primary group-focus-within:bg-primary">
            Years
          </label>
        </div>
        <div className="mt-1 h-5">
          {termError && <p className="text-sm text-red-500">{termError}</p>}
        </div>
      </div>

      <div>
        <h3 className="lg:mb-2">Interest Rate</h3>
        <div className="group flex items-center">
          <input
            type="text"
            value={rateValue}
            onChange={handleRateChange}
            className="font-family-Jakarta h-[2.15rem] w-full rounded-l-md border border-r-0 border-neutral-slate-500 pl-2 font-bold focus:border-primary focus:outline-none"
          ></input>
          <label className="rounded-r-md border border-l-0 border-neutral-slate-500 bg-neutral-slate-100 px-3 py-1 group-focus-within:border-primary group-focus-within:bg-primary">
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
