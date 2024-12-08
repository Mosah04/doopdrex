import Link from "next/link";
import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="container px-2 space-y-24">
      <section className="flex flex-col items-center justify-center gap-4 min-h-[40vh] bg-[url('../../public/pages-bg.svg')] bg-center bg-no-repeat bg-cover py-8 rounded-xl border border-primary/50">
        <div className="bg-clip-padding bg-accent/10 backdrop-blur-2xl w-[80%] rounded-xl p-8 text-center space-y-4 shadow-current shadow-sm">
          <h1 className="font-bold text-3xl">Contactez-nous</h1>
          <p className="flex gap-2 justify-center items-center">
            <Link
              href={"/"}
              className="hover:font-bold transition-[font-weight] duration-300"
            >
              Accueil
            </Link>
            <TiArrowRightOutline className="text-lg" />
            <Link
              href={"/contact"}
              className="hover:font-bold transition-[font-weight] duration-300"
            >
              Contact
            </Link>
          </p>
        </div>
      </section>
      <section className="flex gap-8 flex-wrap justify-center">
        <div className="px-12 py-4 place-content-center justify-center rounded-xl border border-foreground/50 hover:border-primary/50 transition-colors duration-300 w-fit space-y-4 group">
          <div className="justify-self-center p-4 border border-primary rounded-full group-hover:bg-primary transition-colors duration-300 text-3xl">
            <MdLocalPhone />
          </div>
          <div className="text-center">
            <p className="text-accent font-bold mb-1">Phone number</p>
            <p>+229 01 58 70 04 80</p>
          </div>
        </div>
        <div className="px-12 py-4 place-content-center justify-center rounded-xl border border-foreground/50 hover:border-primary/50 transition-colors duration-300 w-fit space-y-4 group">
          <div className="justify-self-center p-4 border border-primary rounded-full group-hover:bg-primary transition-colors duration-300 text-3xl">
            <HiMail />
          </div>
          <div className="text-center">
            <p className="text-accent font-bold mb-1">Email</p>
            <p>contact@doopdrex.onverrabien</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-accent font-bold flex gap-2 items-center">
              Contactez-nous
            </h1>
            <p className="font-bold text-2xl">
              À votre écoute pour vos projets
            </p>
            <p className="leading-relaxed">
              Besoin d’une solution sur mesure ou d’un accompagnement digital ?
              Notre équipe est là pour répondre à vos questions et concrétiser
              vos idées. N’hésitez pas à nous écrire ou à nous appeler !
            </p>
            <div className="space-y-2">
              <p className="flex gap-2 items-center">
                <MdLocalPhone className="text-2xl text-accent" />
                <a href="tel:+2290158700480">+229 01 58 70 04 80</a>
              </p>
              <p className="flex gap-2 items-center">
                <HiMail className="text-2xl text-accent" />
                <a href="mailto:contact@doopdrex.onverrabien">
                  contact@doopdrex.onverrabien
                </a>
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <input
              type="text"
              placeholder="Nom et Prénoms"
              className="w-full p-2 outline-none rounded-lg bg-clip-padding bg-foreground/20 backdrop-blur-2xl"
            />
            <input
              type="text"
              placeholder="Votre adresse mail"
              className="w-full p-2 outline-none rounded-lg bg-clip-padding bg-foreground/20 backdrop-blur-2xl"
            />
            <textarea
              name="message"
              placeholder="Entrez votre message ici"
              className="w-full min-h-[125px] p-2 outline-none rounded-lg bg-clip-padding bg-foreground/20 backdrop-blur-2xl"
            ></textarea>
            <button
              type="button"
              className="w-full p-2 bg-primary font-bold rounded-lg transition-colors duration-300 hover:bg-foreground hover:text-primary"
            >
              Envoyer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
