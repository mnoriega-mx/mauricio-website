import { work, volunteering } from "@/data/experience";

function ExperienceItem({ item }) {
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
        <h4 className="text-base font-semibold text-gray-900">{item.role}</h4>
        <div className="mt-0.5 text-sm text-blue-600">{item.company}</div>
        <div className="mt-1 text-xs text-gray-500">
          {item.period} · {item.location}
        </div>
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
      </div>
    </article>
  );
}

function Column({ title, items }) {
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

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
          <Column title="Work Experience" items={work} />
          <Column title="Volunteering" items={volunteering} />
        </div>
      </div>
    </section>
  );
}
