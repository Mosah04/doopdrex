import SimpleButton from "@/components/SimpleButton";

const CallSection = () => {
  return (
    <section className="relative px-6 lg:px-56 py-6 rounded-xl place-content-center text-center min-h-[40vh]">
      <div className="absolute top-0 left-0 rounded-[inherit] bg-[url('../../public/backFoot.svg')] bg-no-repeat bg-center bg-cover bg-opacity-0 h-full w-full opacity-45 -z-10" />
      <div className="p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg shadow-lg space-y-4">
        <span className="text-2xl font-bold">Vous avez un projet en tête?</span>
        <p className="leading-relaxed">
          Contactez-nous dès aujourd&apos;hui pour une consultation
          personnalisée et découvrez comment DoopDrex peut transformer vos idées
          en succès digital. Nous sommes prêts à discuter de vos besoins et à
          vous proposer des solutions sur mesure pour faire de votre vision une
          réalité.
        </p>
        <SimpleButton>Contactez-nous</SimpleButton>
      </div>
    </section>
  );
};

export default CallSection;
