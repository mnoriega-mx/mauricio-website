"use client";

import { useState } from "react";
import { work, competitions, volunteering } from "@/data/experience";

function ExperienceItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="relative pb-8 pl-6 last:pb-0">
      <span
        aria-hidden
        className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-blue-600 bg-white"
      />
      <span
        aria-hidden
        className="absolute left-0 top-3 h-full w-px -translate-x-1/2 bg-gray-200 last:hidden"
      />
      <div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-3 text-left"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-base font-semibold text-gray-900">
                {item.role}
              </h4>
              {item.upcoming && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-2 text-[12px] font-medium text-yellow-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                  Upcoming
                </span>
              )}
            </div>
            <div className="mt-0.5 text-sm text-blue-600">{item.company}</div>
            <div className="mt-1 text-xs text-gray-500">
              {item.period ? `${item.period} · ${item.location}` : item.location}
            </div>
          </div>
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`mt-1.5 h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path d="M5 8l5 5 5-5" />
          </svg>
        </button>
        {open && (
          <ul className="mt-3 space-y-2">
            {item.bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm leading-relaxed text-gray-600"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function Group({ title, items, openFirst = false }) {
  return (
    <div>
      <h3 className="mb-8 font-serif text-2xl text-gray-900 md:text-3xl">
        {title}
      </h3>
      <div>
        {items.map((item, index) => (
          <ExperienceItem
            key={`${item.company}-${index}`}
            item={item}
            defaultOpen={openFirst && index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-page">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">What I&apos;ve worked on.</h2>

        <div className="mt-14 max-w-3xl space-y-14">
          <Group title="Work Experience" items={work} />
          <Group title="Competitions & Challenges" items={competitions} />
          <Group title="Volunteering" items={volunteering} />
        </div>
      </div>
    </section>
  );
}
