"use client";

import { useState } from "react";
import { highSchool, university, masters } from "@/data/education";
import PdfPreviewButton from "./PdfPreviewButton";

const TABS = [
  { id: "masters", label: "Master's", meta: "Internship phase", data: masters },
  {
    id: "university",
    label: "University",
    meta: "Bachelor's",
    data: university,
  },
  {
    id: "highschool",
    label: "High School",
    meta: "Bachiller + IB",
    data: highSchool,
  },
];

function StatusPill({ semester }) {
  if (semester.ongoing) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Ongoing
      </span>
    );
  }
  if (semester.pending) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        Pending
      </span>
    );
  }
  return null;
}

export default function EducationTabs() {
  const [activeId, setActiveId] = useState("masters");
  const active = TABS.find((t) => t.id === activeId);
  const data = active.data;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Education institutions"
        className="flex gap-1 overflow-x-auto border-b border-gray-200"
      >
        {TABS.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`relative flex shrink-0 flex-col items-start gap-0.5 px-4 py-3 text-left transition-colors sm:px-6 ${
                isActive
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <span className="text-sm font-medium sm:text-base">
                {tab.label}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-gray-400">
                {tab.meta}
              </span>
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full transition-all duration-200 sm:inset-x-5 ${
                  isActive ? "bg-blue-600" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        key={activeId}
        className="animate-fade-in-up pt-10 md:pt-12"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start md:gap-8">
          <div>
            <h3 className="font-serif text-2xl text-gray-900 md:text-3xl">
              {data.institution}
            </h3>
            <p className="mt-1 text-base text-gray-600">{data.degree}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {data.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {data.location}
              </span>
            </div>
          </div>

          {data.documents && data.documents.length > 0 && (
            <div className="flex flex-wrap gap-2 md:justify-end">
              {data.documents.map((doc) => (
                <PdfPreviewButton
                  key={doc.label}
                  url={doc.href}
                  title={`${data.institution} — ${doc.label}`}
                  label={doc.label}
                  variant="pill"
                />
              ))}
            </div>
          )}
        </div>

        {data.note && (
          <p className="mt-6 flex gap-3 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm leading-relaxed text-gray-700">
            <span aria-hidden className="mt-0.5 shrink-0 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </span>
            <span>{data.note}</span>
          </p>
        )}

        <div className="mt-8 space-y-5">
          {data.semesters.map((semester) => (
            <div
              key={semester.title}
              className="grid gap-3 border-b border-gray-200/70 pb-5 last:border-0 last:pb-0 md:grid-cols-[180px_1fr] md:gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {semester.title}
                  </span>
                  <StatusPill semester={semester} />
                </div>
                {semester.period && (
                  <div className="mt-0.5 text-xs text-gray-500">
                    {semester.period}
                  </div>
                )}
              </div>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {semester.courses.map((course) => (
                  <li
                    key={course}
                    className="flex items-start gap-2 text-sm leading-snug text-gray-600"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400"
                    />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
