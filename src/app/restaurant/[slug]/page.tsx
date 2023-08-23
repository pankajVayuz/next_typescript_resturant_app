import NavBar from "@/app/components/navbar/NavBar";
import ResNavBar from "./components/ResNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import ReviewCard from "./components/ReviewCard";
import Review from "./components/Review";
import ImageCard from "./components/ImageCard";

export default function RestauranntDetailsPage() {
  return (
    <>
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white captitalize text-shadow text-center">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
        </div>
        </>
  );
}
