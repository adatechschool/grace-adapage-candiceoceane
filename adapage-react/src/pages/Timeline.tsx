import { TimelineComponents } from "../components/TimelineComponents";
import { profil } from "../data/profil";
import type { Timeline as TimelineType } from "../Types/data";

function Timeline() {
  return (
    <section className="min-h-screen bg-card py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-elips-orange mb-4">
          Parcours
        </h1>

        <div className="flex flex-col items-center">
          {profil.timeline.map((event: TimelineType, index: number) => (
            <TimelineComponents
              key={index}
              timeline={event}
              isLast={index === profil.timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
