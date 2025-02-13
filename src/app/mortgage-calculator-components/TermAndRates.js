export function TermAndRates({ onUpdateTerm, onUpdateRate }) {
  function handleTermChange(e) {
    const term = parseFloat(e.target.value);
    onUpdateTerm(term);
  }

  function handleRateChange(e) {
    const rate = parseFloat(e.target.value);
    onUpdateRate(rate);
  }

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 mb-4">
      <div>
        <h3>Mortgage Term</h3>
        <div className="flex items-center mb-2 lg:mb-0">
          <input
            type="text"
            onChange={handleTermChange}
            className="w-full h-[2.15rem] border rounded-l-md border-neutral-slate-500 border-r-0 focus:border-primary font-bold font-family-Jakarta pl-2"
          ></input>
          <span className="px-3 py-1 bg-neutral-slate-100 border rounded-r-md border-neutral-slate-500 border-l-0">
            Years
          </span>
        </div>
      </div>

      <div>
        <h3>Interest Rate</h3>
        <div className="flex items-center ">
          <input
            type="text"
            onChange={handleRateChange}
            className="w-full h-[2.15rem] border rounded-l-md border-neutral-slate-500 border-r-0 focus:border-primary font-bold font-family-Jakarta pl-2"
          ></input>
          <span className="px-3 py-1 bg-neutral-slate-100 border rounded-r-md border-neutral-slate-500 border-l-0">
            %
          </span>
        </div>
      </div>
    </div>
  );
}
