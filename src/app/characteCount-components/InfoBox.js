"use client";
import Image from "next/image";

export function InfoBox({ value, label, imageSrc, altText, bgColor }) {
  return (
    <div className="flex w-full justify-end">
      <div
        className={`flex flex-1 items-center justify-between rounded-lg ${bgColor} overflow-hidden`}
      >
        <div className="">
          <div className="text-dm-sans mx-4 mb-1 text-3xl font-bold">
            {value}
          </div>
          <div className="text-dm-sans mx-4 text-sm">{label}</div>
        </div>
        <div className="">
          <Image
            src={imageSrc}
            alt={altText}
            width={100}
            height={100}
            className={`rounded-r-lg ${bgColor} `}
          />
        </div>
      </div>
    </div>
  );
}
