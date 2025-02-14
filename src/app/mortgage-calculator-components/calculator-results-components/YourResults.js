/* eslint-disable react/no-unescaped-entities */
export function YourResults({ result }) {
  return (
    <>
      <h3 className="font-family-Jakarta mb-1 text-base font-semibold text-neutral-white md:mb-2 md:text-2xl">
        Your results
      </h3>
      <p className="font-family-Jakarta mb-4 text-xs font-semibold text-neutral-slate-500 md:mb-8 lg:text-sm">
        Your results are shown below based on the information you provided to
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>

      {/* Your monthly replayments */}
      <div className="shadow-top rounded-md bg-neutral-slate-800">
        <div className="m-2 md:m-4 lg:m-6">
          <p className="font-family-Jakarta mb-2 text-xs font-semibold text-neutral-slate-500 lg:mb-4 lg:text-sm">
            Your monthly repayments
          </p>
          <h1 className="font-family-Jakarta mb-2 border-b-[1px] border-neutral-slate-700 text-2xl font-semibold text-primary md:mb-4 md:pb-6 md:text-3xl lg:pb-8 lg:text-[3rem]">
            {`$${result.monthlyPayment.toFixed(2)}`}
          </h1>
        </div>
        <div className="m-2 md:m-4 lg:m-6">
          <p className="font-family-Jakarta mb-1 text-xs font-semibold text-neutral-slate-500 md:pt-1 lg:mb-2 lg:text-sm">
            Total you'll repay over the term
          </p>
          <h3 className="font-family-Jakarta mb-2 text-base font-semibold text-neutral-white md:text-xl">
            {`$${result.totalPayment.toFixed(2)}`}
          </h3>
        </div>
      </div>
    </>
  );
}
