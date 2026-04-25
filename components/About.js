import { profile } from "@/data/profile";

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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-blue-200 hover:shadow-sm"
              >
                <div className="font-serif text-4xl text-blue-600 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
