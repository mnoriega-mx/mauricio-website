"use client";

import { usePdfPreview } from "./PdfPreviewContext";

function EyeIcon({ size = 13 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const VARIANTS = {
  pill:
    "inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700",
  link:
    "inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700",
};

export default function PdfPreviewButton({
  url,
  title,
  label,
  variant = "pill",
}) {
  const { openPdf } = usePdfPreview();

  return (
    <button
      type="button"
      onClick={() => openPdf({ url, title })}
      className={VARIANTS[variant]}
    >
      <EyeIcon />
      {label}
    </button>
  );
}
