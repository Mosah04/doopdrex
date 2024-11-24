import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Doopdrex",
  description:
    "DoopDrex est une agence digitale experte en création de solutions web, mobiles et en intégration de technologies d’intelligence artificielle. Nous accompagnons les entreprises de toutes tailles pour transformer leurs ambitions numériques en réalités performantes et innovantes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`bg-background text-foreground ${montSerrat.variable} font-mont`}
      >
        <div className="overflow-hidden flex flex-col min-h-screen sm:items-center">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        <Script type="text/javascript" id="microsoft-clarity-analytics">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "p3kkjzrytb");
          `}
        </Script>
      </body>
    </html>
  );
}
