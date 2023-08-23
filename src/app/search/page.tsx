import NavBar from "../components/navbar/NavBar";
import Header from "./components/Header";
import ResaurantCard from "./components/ResaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function SearchPage() {
  return (
   
     <>
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        
          <SearchSideBar />

          <div className="w-5/6">
               <ResaurantCard />
          </div>
        </div>
        </>
  );
}
