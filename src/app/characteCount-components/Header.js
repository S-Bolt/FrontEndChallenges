"use client";
import Image from "next/image";

export function Header() {
  return (
    <div className="m-4 flex items-center justify-between">
      <div className="text-dm-sans flex text-neutral-white">
        <Image
          src="/character-count/logo-dark-theme.svg"
          alt="sun"
          width={150}
          height={20}
          className=""
        />
      </div>
      <button>
        <div className="items-center rounded-sm bg-neutral-slate-700 p-1">
          <Image
            src="/character-count/icon-sun.svg"
            alt="sun"
            width={20}
            height={20}
            className="bg-neutral-slate-700"
          />
        </div>
      </button>
    </div>
  );
}
