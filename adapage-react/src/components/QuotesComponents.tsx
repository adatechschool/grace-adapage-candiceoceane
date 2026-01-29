import type { Quotes } from "../Types/data";

interface QuotesProps {
  quotes: Quotes;
}

export function QuotesComponents({ quotes }: QuotesProps) {
  return (
    <article className="relative bg-elips-cream/30 border-l-4 border-elips-orange rounded-r-lg p-6 my-6 shadow-md">
      {/* Guillemet décoratif */}
      <span className="absolute top-2 left-4 text-6xl text-elips-orange/20 font-serif">
        "
      </span>

      <blockquote className="relative z-10">
        <p className="text-xl italic text-elips-black pl-6">"{quotes.text}"</p>
        <footer className="mt-4 text-right">
          <cite className="text-elips-gold font-semibold not-italic">
            — {quotes.source}
          </cite>
        </footer>
      </blockquote>
    </article>
  );
}
