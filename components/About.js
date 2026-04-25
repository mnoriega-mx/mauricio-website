import { profile } from "@/data/profile";
import FunFactsGrid from "./FunFactsGrid";

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-page">
        <p className="section-eyebrow">About me</p>
        <h2 className="section-title">A short introduction.</h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-gray-600 md:text-lg">
            {profile.bio.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs uppercase tracking-wider text-gray-500">
                Languages
              </span>
              {profile.languages.map((lang) => (
                <span
                  key={lang.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700"
                >
                  <span className="font-medium text-gray-900">
                    {lang.name}
                  </span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-500">{lang.level}</span>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gray-900">
              A few randoms about me.
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Click any card to flip it.
            </p>
            <div className="mt-6">
              <FunFactsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
