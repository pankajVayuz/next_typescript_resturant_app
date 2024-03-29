import NavBar from "@/app/components/navbar/NavBar";
import ResNavBar from "./components/ResNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import ReviewCard from "./components/ReviewCard";
import Review from "./components/Review";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";

export default function RestauranntDetailsPage() {
  return (
    <>
      
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <ResNavBar />
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <Title />
            {/* TITLE */} {/* RATING */}
            <Rating />
            {/* RATING */} {/* DESCRIPTION */}
            <Description />
            {/* DESCRIPTION */} {/* IMAGES */}
            <ImageCard />
            {/* IMAGES */} {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <ReviewCard />
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <Review />
       
        </>
  );
}
