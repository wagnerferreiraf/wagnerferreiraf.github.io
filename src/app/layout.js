import "@/styles/globals.css";
import Header from "@/components/Header.js";
// import FooterVisibility from "@/components/FooterVisibility.js";
import Footer from "@/components/Footer.js";

export const metadata = {
  title: "Hora de Estudar!",
  description: "Prof. Wagner Ferreira",
  charset: "UTF-8",
  author: "Wagner Ferreira",
  keywords: "HTML, CSS, JavaScript, React, Next.js",
  property: {
    "og:title": "Hora de Estudar!",
    "og:description": "Prof. Wagner Ferreira",
    "og:type": "website",
    "og:url": "https://horadeestudar.vercel.app",
    "og:image": "/images/og-image.png"
  },
  icons : {
    icon: "/icons/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
        {/* <FooterVisibility /> */}
        <Footer />
      </body>
    </html>
  );
}
