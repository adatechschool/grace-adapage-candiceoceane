import type { Timeline } from "../Types/data";

interface TimelineProps {
  timeline: Timeline;
  isLast: boolean;
}

export function TimelineComponents({ timeline, isLast }: TimelineProps) {
  return (
    <div className="flex w-full max-w-3xl">
      {/* Colonne gauche : Année */}
      <div className="w-1/2 text-right pr-8 py-6">
        <span className="text-2xl font-bold text-elips-gold">
          {timeline.year}
        </span>
      </div>

      {/* Ligne centrale avec point */}
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 shrink-0 bg-elips-orange rounded-full shadow-lg"></div>
        {!isLast && <div className="w-1 h-full bg-elips-orange"></div>}
      </div>

      {/* Colonne droite : Description */}
      <div className="w-1/2 pl-8 py-6">
        <div className="bg-white/80  p-4 rounded-lg border border-elips-orange/20 shadow-md ">
          <p className="text-elips-black/80">{timeline.description}</p>
        </div>
      </div>
    </div>
  );
}
