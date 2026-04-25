"use client";

import { useState } from "react";
import SafeImage from "./SafeImage";

const COLLAPSED_LENGTH = 220;

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const images = project.images || (project.image ? [project.image] : []);
  const hasMultiple = images.length > 1;
  const currentImage = images[imgIdx];

  const goPrev = (e) => {
    e.stopPropagation();
    setImgIdx((i) => (i - 1 + images.length) % images.length);
  };
  const goNext = (e) => {
    e.stopPropagation();
    setImgIdx((i) => (i + 1) % images.length);
  };

  const demoLabel = (() => {
    if (!project.demo) return null;
    if (/youtube\.com|youtu\.be/.test(project.demo)) return "Watch the demo";
    if (/itch\.io/.test(project.demo)) return "Play it on itch.io";
    if (/github\.io/.test(project.demo)) return "Play the game";
    return "View the demo";
  })();

  const isLong = project.description.length > COLLAPSED_LENGTH;
  const visibleText =
    expanded || !isLong
      ? project.description
      : project.description.slice(0, COLLAPSED_LENGTH).trimEnd() + "…";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
      <div className="relative">
        <SafeImage
          key={currentImage}
          src={currentImage}
          alt={`${project.title} screenshot ${hasMultiple ? imgIdx + 1 : ""}`.trim()}
          className="aspect-[16/10] w-full bg-gray-100"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        {project.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 backdrop-blur">
            {project.badge}
          </span>
        )}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-sm ring-1 ring-gray-200 backdrop-blur transition-all hover:bg-white hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-sm ring-1 ring-gray-200 backdrop-blur transition-all hover:bg-white hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImgIdx(i);
                  }}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === imgIdx
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-serif text-xl text-gray-900">{project.title}</h3>

        <p className="text-sm leading-relaxed text-gray-600">
          {visibleText}
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="ml-1 font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>

        <div className="mt-auto flex flex-col gap-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {(project.demo || project.github) && (
            <div className="flex flex-col gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 transition-all hover:border-blue-300 hover:bg-blue-100 hover:text-blue-800"
                >
                  {demoLabel}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.16 8.96 7.55 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.27-1.23-1.61-1.23-1.61-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.45-.28-5.03-1.22-5.03-5.45 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.71.77 1.13 1.75 1.13 2.95 0 4.24-2.58 5.17-5.04 5.44.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.76.53 4.39-1.46 7.55-5.57 7.55-10.41C23.01 5.24 18.27.5 12 .5z" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
