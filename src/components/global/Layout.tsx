import React, {ReactNode} from "react";
import Navbar from "./navbar/Navbar";

interface layoutProps {
  children: ReactNode;
}

function Layout({children}: layoutProps) {
  return (
    <main className="bg-stone-900">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
