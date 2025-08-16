export const metadata = {
  title: "Milan Lora — Systems & Strategy",
  description: "Hardware–software systems: mechatronics, simulation, AI.",
  metadataBase: new URL("https://milanlora.com"),
};

export const viewport = {
  themeColor: "#000000",
};
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
