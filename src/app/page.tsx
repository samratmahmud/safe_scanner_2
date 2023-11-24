import Image from "next/image";
import Scanner from "./home/Scanner";
import Features from "./home/Features";
import Footer from "@/components/global/footer/Footer";

export default function Home() {
  return (
    <main>
      <Scanner />
      <Features />
      <Footer />
    </main>
  );
}
