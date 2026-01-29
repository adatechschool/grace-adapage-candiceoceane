import { ProfilComponents } from "../components/ProfilComponents";
import { profil } from "../data/profil";

export default function Profil() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-elips-turquoise/20 via-elips-cream/30 to-elips-orange/10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ProfilComponents
          name={profil.name}
          description={profil.description}
          image={profil.image}
        />
      </div>
    </section>
  );
}
