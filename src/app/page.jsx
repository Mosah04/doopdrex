import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Image from "next/image";
import { TiFlowChildren } from "react-icons/ti";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { BsPuzzle } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";

import MorphGlass from "@/components/MorphGlass";
import CallSection from "@/components/CallSection";

export default function Home() {
  return (
    <div className="px-2 space-y-24">
      <section className="flex flex-col items-center justify-center gap-4 min-h-[60vh] bg-[url('../../public/bg-shape.svg')] bg-center bg-no-repeat bg-cover py-8">
        <h1 className="font-bold text-5xl md:text-7xl text-center">
          Transformez votre
          <span className="text-accent"> vision digitale </span>
          avec <span className="text-tertiary">DoopDrex </span>
        </h1>
        <p className="text-center font-semibold">
          Votre partenaire en création numérique, de la stratégie au
          déploiement. <br /> Ensemble, donnons vie à vos idées pour des
          solutions digitales sur-mesure et performantes.
        </p>
        <CTAButton>
          <span>Nous contacter</span>
          <FaPhoneAlt />
        </CTAButton>
      </section>
      <section>
        <article className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 space-y-8">
            {/* Section Title */}
            <h1 className="text-center font-extrabold text-accent">
              DoopDrex, qui sommes-nous ?
            </h1>
            <p className="font-bold text-2xl text-center">
              Agence digitale experte en création de solutions web, mobiles et
              en intégration de technologies d’intelligence artificielle.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Illustration */}
              <div className="max-md:hidden md:w-1/2 flex justify-center items-center">
                <Image
                  width={0}
                  height={0}
                  src="/question.svg"
                  alt="Illustration de question"
                  className="w-3/4 md:w-full h-auto animate-float"
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 space-y-6 text-gray-100">
                <MorphGlass title={"🛠️ Spécialistes du sur-mesure"}>
                  DoopDrex est une agence digitale spécialisée dans la création
                  de solutions numériques pour les entreprises de toutes
                  tailles.
                </MorphGlass>
                <MorphGlass title={"🌟 Votre vision, nos solutions"}>
                  Que vous soyez un entrepreneur, une PME ou une grande
                  organisation, notre expertise vous accompagne du concept au
                  déploiement final.
                </MorphGlass>
                <MorphGlass title={"🤝 Un accompagnement complet"}>
                  Nous créons des expériences uniques qui connectent et
                  fidélisent vos clients. Avec DoopDrex, bénéficiez d’une équipe
                  engagée pour réaliser vos objectifs.
                </MorphGlass>
                <MorphGlass title={"🧠 Notre Mission"}>
                  DoopDrex a pour mission de mettre l&rsquo;innovation
                  technologique au service de vos ambitions. Nous aidons nos
                  clients à atteindre leurs objectifs en développant des
                  solutions digitales sur mesure et optimisées pour leur
                  réussite.
                </MorphGlass>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="space-y-8">
        <h1 className="text-accent font-bold flex gap-2 justify-center items-center">
          <TiFlowChildren />
          Notre méthodologie
        </h1>
        <p className="font-bold text-2xl text-center">
          Une approche personnalisée et évolutive pour concrétiser vos projets
        </p>
        <CardContainer>
          <Card
            icon={<PiMagnifyingGlassBold className="text-6xl text-accent" />}
            title={"Une écoute attentive pour comprendre vos objectifs"}
          >
            <p className="leading-relaxed">
              Nous commençons par une écoute active pour bien comprendre vos
              attentes, vos priorités et les spécificités de votre secteur.
              Cette analyse approfondie nous permet d&apos;identifier des
              opportunités concrètes et de poser des bases solides pour la
              création de solutions alignées avec vos ambitions.
            </p>
          </Card>
          <Card
            icon={<BsPuzzle className="text-6xl text-accent" />}
            title={"Des propositions sur mesure, adaptées à vos ambitions"}
          >
            <p className="leading-relaxed">
              Nous ne croyons pas aux solutions standards. Notre équipe élabore
              des propositions uniques, intégrant vos préférences esthétiques,
              vos besoins fonctionnels, et les meilleures pratiques en matière
              d’ergonomie. Que vous souhaitiez renforcer votre identité visuelle
              ou la repenser, nous vous guidons vers des choix optimaux.
            </p>
          </Card>
          <Card
            icon={<AiOutlineLineChart className="text-6xl text-accent" />}
            title={"Un développement performant, sans compromis"}
          >
            <p className="leading-relaxed">
              En combinant les meilleures technologies (React, Laravel,
              WordPress, etc.), nous créons des solutions rapides, sécurisées et
              évolutives. Tout est pensé pour offrir une expérience utilisateur
              fluide, tout en garantissant des performances supérieures, quelle
              que soit l’envergure de votre projet.
            </p>
          </Card>
          <Card
            icon={<LiaHandsHelpingSolid className="text-6xl text-accent" />}
            title={"Un accompagnement continu pour garantir votre succès"}
          >
            <p className="leading-relaxed">
              Notre engagement ne s’arrête pas à la mise en ligne. Nous restons
              à vos côtés pour assurer un suivi proactif, des optimisations
              basées sur les retours des utilisateurs, et des ajustements en
              fonction de vos nouvelles ambitions. Chez DoopDrex, votre réussite
              est notre priorité.
            </p>
          </Card>
        </CardContainer>
      </section>
      <section className="space-y-8">
        <h1 className="text-accent font-bold flex gap-2 justify-center items-center">
          <MdOutlineHomeRepairService />
          Nos services
        </h1>
        <p className="font-bold text-2xl text-center">
          Nos solutions pour atteindre vos objectifs
        </p>
        <article className="flex gap-8 justify-center flex-wrap">
          <ServiceCard
            title={"Développement de sites web"}
            number={"01"}
            description={
              "Sites vitrines, e-commerce, et plateformes personnalisées."
            }
            imgURL={"/webDev.jpg"}
          />
          <ServiceCard
            title={"Intelligence Artificielle et Data Engineering"}
            number={"02"}
            description={
              "Intégrez des solutions d’IA pour anticiper et répondre aux besoins de vos utilisateurs."
            }
            imgURL={"/AI.jpg"}
          />
          <ServiceCard
            title={"Développement Mobile"}
            number={"03"}
            description={"Applications multi-plateformes optimisées."}
            imgURL={"/mobDev.jpg"}
          />
          <ServiceCard
            title={"Référencement SEO"}
            number={"04"}
            description={
              "Améliorez votre visibilité en ligne avec des stratégies SEO performantes pour augmenter votre visibilité et attirer un trafic qualifié."
            }
            imgURL={"/SEO.jpg"}
          />
          <ServiceCard
            title={"Maintenance"}
            number={"05"}
            description={
              "Suivi après déploiement et mise à jour continue pour assurer une performance optimale de votre solution."
            }
            imgURL={"/maintenance.jpg"}
          />
          <ServiceCard
            title={"Conseil et stratégie digitale"}
            number={"06"}
            description={
              "Audits poussés pour maximiser votre retour sur investissement."
            }
            imgURL={"/auditSEO.jpg"}
          />
        </article>
      </section>
      <CallSection />
    </div>
  );
}
