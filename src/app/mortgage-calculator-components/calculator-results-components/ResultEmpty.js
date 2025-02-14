/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export function ResultEmpty() {
  return (
    <>
      <Image
        src="/illustration-empty.svg"
        alt="Calculator Icon"
        width={200}
        height={200}
        className="mx-2 mt-6 h-32 w-32 md:mt-0 md:h-48 md:w-48"
      />
      <h3 className="font-family-Jakarta mb-2 text-xl font-semibold text-neutral-white md:text-2xl">
        Results shown here
      </h3>
      <p className="font-family-Jakarta mb-8 text-center text-sm font-semibold text-neutral-slate-500 md:text-base">
        Complet the form and click "calculate repayments" to see weat your
        monthly repayments would be.
      </p>
    </>
  );
}
