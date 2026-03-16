import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const banners = [
    {
      path: "https://i.ibb.co/ZRqSQp21/food1.jpg",
      title: "Discover Delicious Recipes",
      desc: "Explore thousands of tasty recipes shared by food lovers.",
      quote: "Cooking is love made visible.",
    },
    {
      path: "https://i.ibb.co/5gWnCh1q/food2.jpg",
      title: "Cook Like a Chef",
      desc: "Learn new techniques and improve your cooking skills.",
      quote: "Great food brings people together.",
    },
    {
      path: "https://i.ibb.co/sTXdfbz/food3.jpg",
      title: "Share Your Recipes",
      desc: "Upload and share your favorite dishes with the community.",
      quote: "Every recipe tells a story.",
    },
    {
      path: "https://i.ibb.co/mrMddk6t/food4.jpg",
      title: "Find Your Next Meal",
      desc: "Get inspired with trending recipes from around the world.",
      quote: "Good food, good mood.",
    },
  ];

  return (
    <div className="carousel w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
      {banners.map((banner, index) => {
        const prev = index === 0 ? banners.length - 1 : index - 1;
        const next = index === banners.length - 1 ? 0 : index + 1;
        return (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            {/* Image */}
            <img
              src={banner.path}
              className="w-full h-full object-cover"
              alt={`banner-${index}`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-15 sm:px-20 lg:px-25 text-white w-full">
                <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                    {banner.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg sm:text-base md:text-2xl mb-2 md:mb-3">
                    {banner.desc}
                  </p>

                  {/* Quote */}
                  <p className="inline-block italic text-[var(--primary)] text-xl sm:text-base mb-4 md:mb-6 bg-[var(--accent)] px-2 py-1 rounded">
                    "{banner.quote}"
                  </p>
                  <br />

                  {/* Button */}
                  <button
                    onClick={() => navigate("/allRecipes")}
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-[var(--primary)] text-black font-semibold rounded-md hover:opacity-90 transition flex items-center hover:cursor-pointer"
                  >
                    Explore Recipes <ArrowRight></ArrowRight>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a
                href={`#slide${prev}`}
                className="btn btn-circle btn-sm sm:btn-md"
              >
                ❮
              </a>

              <a
                href={`#slide${next}`}
                className="btn btn-circle btn-sm sm:btn-md"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
