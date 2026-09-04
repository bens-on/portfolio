import BackLink from "@/components/BackLink";
import ExperienceCard from "@/components/ExperienceCard";
import ScrollAnimations from "@/components/ScrollAnimations";
import { coursesBySemester } from "@/data/masters";

export default function MastersPage() {
  const semesters = coursesBySemester();

  return (
    <main className="mx-auto max-w-7xl p-6 sm:p-10 pt-20 sm:pt-24">
      <div className="mb-8 sm:mb-12">
        <h1 className="font-header text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Masters Portfolio
        </h1>
        <p className="text-foreground/80">
          Courses that count toward the MSEE at Colorado State, including
          dual-counted BSEE work from the accelerated program — why I took each
          one, and what I learned.
        </p>
      </div>

      <div className="space-y-10 sm:space-y-12">
        {semesters.map((semester) => (
          <section key={semester.term}>
            <h2 className="font-header text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)] mb-4 sm:mb-6">
              {semester.term}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {semester.courses.map((course, index) => (
                <ScrollAnimations key={course.title} delay={index * 80}>
                  <ExperienceCard {...course} />
                </ScrollAnimations>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <BackLink />
      </div>
    </main>
  );
}
