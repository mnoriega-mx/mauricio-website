import { certifications } from "@/data/certifications";
import PdfPreviewButton from "./PdfPreviewButton";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-page">
        <p className="section-eyebrow">Certifications</p>
        <h2 className="section-title">Continued learning.</h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>

              <div>
                <h3 className="font-medium leading-snug text-gray-900">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {cert.issuer} · {cert.date}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>

              {(cert.verify || cert.pdf) && (
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm font-medium">
                  {cert.pdf && (
                    <PdfPreviewButton
                      url={cert.pdf}
                      title={cert.title}
                      label="View certificate"
                      variant="link"
                    />
                  )}
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-600 transition-colors hover:text-gray-900"
                    >
                      Verify
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
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
