import Header from "../components/Header";
import ResNavBar from "../components/ResNavBar";
import ResturantMenu from "../components/ResturantMenu";

export default function RestaurantManuePage(){
    return(
      <>
       
            <div className="bg-white w-[100%] rounded p-3 shadow">
              {/* RESAURANT NAVBAR */}
             <ResNavBar/>
              {/* RESAURANT NAVBAR */} {/* MENU */}
             <ResturantMenu/>
              {/* MENU */}
            </div>
         
          {/* DESCRIPTION PORTION */}
      </>
       
    )
}