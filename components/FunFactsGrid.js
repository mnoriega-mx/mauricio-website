"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function FunFactsGrid() {
  const [flipped, setFlipped] = useState({});

  const toggle = (i) =>
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <ul className="grid grid-cols-3 gap-2">
      {profile.funFacts.map((fact, i) => {
        const isFlipped = !!flipped[i];
        return (
          <li key={fact.text} className="[perspective:1000px]">
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={isFlipped}
              aria-label={
                isFlipped ? "Hide fun fact" : "Reveal fun fact"
              }
              className="group relative h-20 w-full cursor-pointer transition-transform duration-500 ease-out [transform-style:preserve-3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              style={{
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <span className="absolute inset-0 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-3xl shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-md [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                {fact.emoji}
              </span>
              <span className="absolute inset-0 flex items-center justify-center rounded-xl border border-blue-500 bg-gradient-to-br from-blue-500 to-blue-600 px-2 text-center text-[11px] font-medium leading-tight text-white shadow-sm [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
                {fact.text}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
