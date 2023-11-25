import Scanner from "./home/Scanner";
import Features from "./home/Features";
import Footer from "@/components/global/footer/Footer";
import Transactions from "./home/Transactions";

export default function Home() {
  return (
    <main>
      <Scanner />
      {/* <Features /> */}
      <Transactions />
      <Footer />
    </main>
  );
}
