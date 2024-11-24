import Image from "next/image";
import Link from "next/link";
import { IoMdMailOpen } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container px-2">
      <div className="relative w-full py-12 flex flex-wrap gap-6 justify-between border-b border-b-foreground/10 ">
        <div className="flex flex-col gap-4">
          <Link
            href={"/"}
            className="font-bold text-2xl inline-flex items-center gap-2"
          >
            <Image src={"/logo.svg"} width={30} height={30} alt="Logo" />
            <span>DoopDrex</span>
          </Link>
          <p>
            Agence digitale experte en création de solutions web, <br /> mobiles
            et en intégration de technologies d’intelligence artificielle.
          </p>
          <div className="space-x-2 font-light">
            <IoMdMailOpen className="inline" />
            <Link href={"mailto:contact@doopdrex.onverrabien"}>
              contact@doopdrex.onverrabien
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-accent mb-2">Liens utiles</h2>
          <Link className="font-semibold hover:text-accent" href={"/about"}>
            A propos
          </Link>
          <Link className="font-semibold hover:text-accent" href={"/contact"}>
            Contact
          </Link>
          <Link className="font-semibold hover:text-accent" href={"/services"}>
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-accent mb-2">Services</h2>
          <Link className="font-semibold hover:text-accent" href={"#"}>
            Développement web
          </Link>
          <Link className="font-semibold hover:text-accent" href={"#"}>
            IA et Data Engineering
          </Link>
          <Link className="font-semibold hover:text-accent" href={"#"}>
            Développement Mobile
          </Link>
          <Link className="font-semibold hover:text-accent" href={"#"}>
            Référencement SEO
          </Link>
          <Link className="font-semibold hover:text-accent" href={"#"}>
            Maintenance
          </Link>
          <Link className="font-semibold hover:text-accent" href={"#"}>
            Conseil et stratégie digitale
          </Link>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </div>
      <div className="w-full py-4 flex flex-wrap gap-4 justify-between">
        <div className="max-sm:w-full text-center">
          DoopDrex © {new Date().getFullYear()} Tous droits réservés par
          DoopDrex
        </div>
        <div className="flex gap-4 items-center text-accent text-lg max-sm:w-full max-sm:justify-center">
          <Link href={"#"}>
            <FaFacebookF />
          </Link>
          <Link href={"#"}>
            <FaLinkedinIn />
          </Link>
          <Link href={"#"}>
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
