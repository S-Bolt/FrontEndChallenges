export function MortgageAmount({ onUpdateMortgageAmount, value, error }) {
  function handleChange(e) {
    const sanitizeAmount = e.target.value.replace(/,/g, "");
    console.log(sanitizeAmount);
    const amount = parseFloat(sanitizeAmount) || 0;
    onUpdateMortgageAmount(amount);
  }

  return (
    <div className="lg:mb-2">
      <h3 className="mb-1 lg:mb-2">Mortgage Amount</h3>
      <div className="group flex items-center">
        <label
          htmlFor="mortgageAmount"
          className="rounded-l-md border border-r-0 border-neutral-slate-500 bg-neutral-slate-100 px-3 py-1 group-focus-within:border-primary group-focus-within:bg-primary"
        >
          $
        </label>
        <input
          id="mortgageAmount"
          type="text"
          value={value}
          onChange={handleChange}
          className="font-family-Jakarta focus-bg-primary h-[2.15rem] w-full rounded-r-md border border-l-0 border-neutral-slate-500 pl-2 font-bold focus:border-primary focus:outline-none"
        ></input>
      </div>
      <div className="mt-1 h-5">
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}
