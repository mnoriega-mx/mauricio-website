"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const PdfPreviewContext = createContext(null);

export function PdfPreviewProvider({ children }) {
  const [pdf, setPdf] = useState(null);

  const openPdf = useCallback((next) => setPdf(next), []);
  const closePdf = useCallback(() => setPdf(null), []);

  useEffect(() => {
    if (!pdf) return;
    const onKey = (e) => {
      if (e.key === "Escape") closePdf();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [pdf, closePdf]);

  return (
    <PdfPreviewContext.Provider value={{ openPdf }}>
      {children}
      {pdf && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={pdf.title}
          onClick={closePdf}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/70 p-3 backdrop-blur-sm sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-5 py-3">
              <h3 className="truncate text-sm font-medium text-gray-900 sm:text-base">
                {pdf.title}
              </h3>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Open in new tab
                </a>
                <button
                  type="button"
                  onClick={closePdf}
                  aria-label="Close preview"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
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
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={`${pdf.url}#view=FitH`}
              title={pdf.title}
              className="flex-1 w-full bg-gray-100"
            />
          </div>
        </div>
      )}
    </PdfPreviewContext.Provider>
  );
}

export function usePdfPreview() {
  const ctx = useContext(PdfPreviewContext);
  if (!ctx) {
    throw new Error("usePdfPreview must be used within PdfPreviewProvider");
  }
  return ctx;
}
