import { TimelineComponents } from "../components/TimelineComponents";
import { profil } from "../data/profil";
import type { Timeline as TimelineType } from "../Types/data";

function Timeline() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-elips-turquoise/20 via-elips-cream/30 to-elips-orange/10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-elips-orange mb-4">
          Parcours
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-elips-orange to-elips-gold mx-auto mb-12"></div>

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
