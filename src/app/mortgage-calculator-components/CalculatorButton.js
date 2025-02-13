import Image from "next/image";

export function CalculatorButton({ onHandleCalculate }) {
  return (
    <button
      onClick={onHandleCalculate}
      className="bg-primary w-4/5 h-12 rounded-2xl"
    >
      <div className="flex justify-center items-center">
        <Image
          src="/icon-calculator.svg"
          alt="Calculator Icon"
          width={20}
          height={20}
          className="mx-2 "
        />
        <span className="font-bold">Calculate Repayment</span>
      </div>
    </button>
  );
}
