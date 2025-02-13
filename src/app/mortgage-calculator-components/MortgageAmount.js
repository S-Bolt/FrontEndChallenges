export function MortgageAmount({ onUpdateMortgageAmount }) {
  function handleChange(e) {
    const sanitizeAmount = e.target.value.replace(/,/g, "");
    console.log(sanitizeAmount);
    const amount = parseFloat(sanitizeAmount) || 0;
    onUpdateMortgageAmount(amount);
  }

  return (
    <div className="mb-4">
      <h3 className="mb-1">Mortgage Amount</h3>
      <div className="flex items-center ">
        <span className="px-3 py-1 bg-neutral-slate-100 border rounded-l-md border-neutral-slate-500 border-r-0">
          $
        </span>
        <input
          type="text"
          onChange={handleChange}
          className="w-full h-[2.15rem] border rounded-r-md border-neutral-slate-500 border-l-0 focus:border-primary font-bold font-family-Jakarta pl-2"
        ></input>
      </div>
    </div>
  );
}
