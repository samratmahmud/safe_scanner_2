import Footer from "@/components/global/footer/Footer";
import Transactions from "./home/Transactions";
import ImportentInfo from "./home/ImportentInfo";
import Header from "./home/header/Header";
import Wallet from "./home/Wallet";

export default function Home() {
  return (
    <main>
      <Header />
      <ImportentInfo />
      <Transactions />
      <Wallet />
      <Footer />
    </main>
  );
}
