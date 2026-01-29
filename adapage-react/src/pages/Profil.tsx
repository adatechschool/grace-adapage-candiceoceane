import { ProfilComponents } from "../components/ProfilComponents";
import { Carousel } from "../components/Carousel";
import { profil } from "../data/profil";

export default function Profil() {
  return (
    <section className="min-h-screen bg-card py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ProfilComponents
          name={profil.name}
          description={profil.description}
          image={profil.image}
        />

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-elips-orange mb-8">Galerie</h2>
          <Carousel images={profil.images} name={profil.name} />
        </div>
      </div>
    </section>
  );
}
