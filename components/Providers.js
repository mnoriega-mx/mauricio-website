"use client";

import { PdfPreviewProvider } from "./PdfPreviewContext";

export default function Providers({ children }) {
  return <PdfPreviewProvider>{children}</PdfPreviewProvider>;
}
