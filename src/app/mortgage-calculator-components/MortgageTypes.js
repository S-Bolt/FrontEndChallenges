export function MortgageTypes() {
  return (
    <div>
      <h3>Mortgage Type</h3>
      <div className="flex flex-col gap-3 mb-4 ">
        <div className="space-x-4 w-full h-[2.15rem] border border-neutral-slate-500 flex items-center">
          <input type="radio" className="ml-4"></input>
          <span className="font-family-Jakarta font-bold">Repayment</span>
        </div>
        <div className="space-x-4 w-full h-[2.15rem] border border-neutral-slate-500 flex items-center">
          <input type="radio" className="ml-4"></input>
          <span className="font-family-Jakarta font-bold">Interest Only</span>
        </div>
      </div>
    </div>
  );
}
