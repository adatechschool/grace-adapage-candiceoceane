import type { InfoCard } from "../Types/data";

interface InfoCardProps {
  infocard: InfoCard;
}

export function InfoCardComponents({ infocard }: InfoCardProps) {
  return (
    <article className="bg-white/80 backdrop-blur-sm border border-elips-orange/20 rounded-xl p-6 shadow-lg ">
      <h3 className="text-sm uppercase tracking-wider text-elips-gold font-semibold mb-2">
        {infocard.title}
      </h3>
      <p className="text-2xl font-bold text-elips-orange">{infocard.value}</p>
    </article>
  );
}
