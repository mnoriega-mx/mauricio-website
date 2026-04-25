import EducationTabs from "./EducationTabs";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-page">
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">Where I&apos;ve studied.</h2>
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          Three institutions across two countries. Switch tabs to see the
          courses I&apos;ve taken at each.
        </p>

        <div className="mt-12">
          <EducationTabs />
        </div>
      </div>
    </section>
  );
}
