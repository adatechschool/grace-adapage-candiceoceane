import { InfoCardComponents } from "../components/InfoCardComponents";
import { profil } from "../data/profil";
import type { InfoCard as InfoCardType } from "../Types/data";

export default function InfoCard() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-elips-turquoise/10 to-elips-cream/50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-elips-orange mb-12">
          Infos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profil.infoCard.map((info: InfoCardType, index: number) => (
            <InfoCardComponents key={index} infocard={info} />
          ))}
        </div>
      </div>
    </section>
  );
}
