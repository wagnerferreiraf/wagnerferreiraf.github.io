import "@/styles/globals.css";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";

export const metadata = {
  title: "Hora de Estudar!",
  description: "Site do Prof. Wagner Ferreira",
  charset: "UTF-8",
  icons : {
    icon: "/images/icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>

    </html>
  );
}
