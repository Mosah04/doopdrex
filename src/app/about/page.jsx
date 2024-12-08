import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { GoCodeOfConduct } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { GiBullseye, GiPadlock } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import CallSection from "@/components/CallSection";

const About = () => {
  return (
    <div className="px-2 space-y-24">
      <section className="flex flex-col items-center justify-center gap-4 min-h-[40vh] bg-[url('../../public/pages-bg.svg')] bg-center bg-no-repeat bg-cover py-8 rounded-xl border border-primary/50">
        <div className="bg-clip-padding bg-accent/10 backdrop-blur-2xl w-[80%] rounded-xl p-8 text-center space-y-4 shadow-current shadow-sm">
          <h1 className="font-bold text-3xl">A propos de nous</h1>
          <p className="flex gap-2 justify-center items-center">
            <Link
              href={"/"}
              className="hover:font-bold transition-[font-weight] duration-300"
            >
              Accueil
            </Link>
            <TiArrowRightOutline className="text-lg" />
            <Link
              href={"/about"}
              className="hover:font-bold transition-[font-weight] duration-300"
            >
              About
            </Link>
          </p>
        </div>
      </section>
      <section className="space-y-8">
        <h1 className="text-accent font-bold flex gap-2 justify-center items-center">
          <FaEye />
          Notre Vision
        </h1>
        <p className="font-bold text-2xl text-center">
          Des solutions numériques sur mesure pour votre succès
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <Image
              width={0}
              height={0}
              src="/workingTeam.svg"
              alt="Illustration d'équipe"
              className="w-3/4 md:w-full h-auto place-self-center"
            />
          </div>
          <div className="leading-relaxed flex-1">
            <p>
              DoopDrex est né de la volonté d’offrir des solutions numériques de
              qualité qui répondent aux besoins réels des entreprises modernes.
              Nous sommes une équipe passionnée de technologies modernes,
              motivée par la réussite de nos clients. <br /> Notre mission ?
              Vous fournir des solutions digitales innovantes, fiables et sur
              mesure qui vous permettent de vous démarquer dans votre domaine.
            </p>
            <p>
              Notre approche est collaborative et centrée sur le client. Nous
              travaillons main dans la main avec vous pour comprendre vos
              objectifs, vos défis et vos attentes. Que vous cherchiez à lancer
              un site web, une application, ou à optimiser votre projet,
              DoopDrex vous accompagne avec professionnalisme et engagement.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <Image
              width={1500}
              height={1001}
              src="/us.jpg"
              alt="Illustration d'équipe"
              className="w-3/4 md:w-full h-auto place-self-center rounded-xl"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-accent font-bold flex gap-2 items-center">
              <AiOutlineQuestionCircle />
              Pourquoi nous choisir?
            </h1>
            <p className="font-bold text-2xl">
              L’excellence au service de vos ambitions digitales
            </p>
            <div className="">
              <div className="border-b border-b-foreground/50 hover:border-b-primary transition-colors duration-300 pb-2 group">
                <div className="flex gap-4 items-center">
                  <span className="inline-flex items-center justify-center text-foreground text-4xl rounded-full p-4 border border-primary group-hover:bg-primary transition-colors duration-300">
                    <GoCodeOfConduct />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg mb-1">
                      Nos Valeurs et Approche
                    </h2>
                    <span className="text-sm leading-relaxed hover:border-b-primary">
                      Qualité, discrétion, et approche personnalisée sont au
                      cœur de nos engagements. Nous mettons un point d’honneur à
                      offrir des solutions durables et évolutives, dans le
                      respect des valeurs de nos clients.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-foreground/50 hover:border-b-primary transition-colors duration-300 py-2 group">
                <div className="flex gap-4 items-center">
                  <span className="inline-flex items-center justify-center text-foreground text-4xl rounded-full p-4 border border-primary group-hover:bg-primary transition-colors duration-300">
                    <FaCode />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg mb-1">
                      Expertise Technique
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Nous maîtrisons une large gamme de technologies (React,
                      Laravel, WordPress, et plus) pour répondre aux besoins de
                      projets variés, avec une attention constante aux
                      meilleures pratiques de développement.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-foreground/50 hover:border-b-primary transition-colors duration-300 py-2 group">
                <div className="flex gap-4 items-center">
                  <span className="inline-flex items-center justify-center text-foreground text-4xl rounded-full p-4 border border-primary group-hover:bg-primary transition-colors duration-300">
                    <GiBullseye />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg mb-1">
                      Projets Orientés Résultats
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Chez DoopDrex, nous croyons que chaque projet doit
                      produire des résultats concrets. Nos solutions sont
                      conçues pour optimiser votre impact, que ce soit en
                      augmentant le trafic de votre site ou en améliorant vos
                      taux de conversion.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-foreground/50 hover:border-b-primary transition-colors duration-300 py-2 group">
                <div className="flex gap-4 items-center">
                  <span className="inline-flex items-center justify-center text-foreground text-4xl rounded-full p-4 border border-primary group-hover:bg-primary transition-colors duration-300">
                    <BiSupport />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg mb-1">
                      Assistance et Support Client
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Notre relation avec nos clients ne s’arrête pas à la
                      livraison. Nous restons disponibles pour assurer le bon
                      fonctionnement de votre site et répondre à toute question.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-foreground/50 hover:border-b-primary transition-colors duration-300 py-2 group">
                <div className="flex gap-4 items-center">
                  <span className="inline-flex items-center justify-center text-foreground text-4xl rounded-full p-4 border border-primary group-hover:bg-primary transition-colors duration-300">
                    <GiPadlock />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg b-1">
                      Confidentialité et Discrétion
                    </h2>
                    <span className="text-sm leading-relaxed">
                      Nous comprenons l’importance de la confidentialité dans
                      chaque projet. DoopDrex travaille avec la plus grande
                      discrétion pour protéger les informations sensibles de ses
                      clients.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallSection />
    </div>
  );
};

export default About;
