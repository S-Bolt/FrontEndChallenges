import Image from "next/image";

export function CalculatorButton({ onHandleCalculate }) {
  return (
    <button
      onClick={onHandleCalculate}
      className="h-12 w-full rounded-3xl bg-primary lg:w-4/5"
    >
      <div className="flex items-center justify-center">
        <Image
          src="/icon-calculator.svg"
          alt="Calculator Icon"
          width={20}
          height={20}
          className="mx-2"
        />
        <span className="font-bold">Calculate Repayment</span>
      </div>
    </button>
  );
}
