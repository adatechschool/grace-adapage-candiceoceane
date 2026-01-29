import { profil } from "../data/profil";
import { QuotesComponents } from "../components/QuotesComponents";

export default function Quotes() {
  return (
    <section className="min-h-screen bg-card py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-elips-orange mb-12">
          Citations
        </h1>

        {profil.quotes.map((quote, index: number) => (
          <QuotesComponents key={index} quotes={quote} />
        ))}
      </div>
    </section>
  );
}
