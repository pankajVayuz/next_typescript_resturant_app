import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

export default function Home() {
  return (
   

        <main>
          {/* HEADER */}
          <Header />
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          
            <Card />
           
          </div>
      
    </main>
  );
}
