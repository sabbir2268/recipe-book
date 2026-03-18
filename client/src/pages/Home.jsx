import React from "react";
import Banner from "../components/Banner";
import { motion } from "framer-motion";

import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Share2, Globe, Heart } from "lucide-react";
import recipeData from "../../src/data/recipeData.json";
import RecipeCard from "../components/RecipeCard";
import MotionWrapper from "../components/MotionWrapper";

const Home = () => {
  const benifits = [
    { id: 1, text: "Share unlimited recipes" },
    { id: 2, text: "Connect with food enthusiasts" },
    { id: 3, text: "Get inspired daily" },
  ];

  const features = [
    {
      icon: Share2,
      title: "Easy to Share",
      description:
        "Share your favorite recipes with friends and family with just one click",
    },
    {
      icon: Globe,
      title: "Discover Global Cuisines",
      description:
        "Explore authentic recipes from Italian, Mexican, Indian, Chinese, and more",
    },
    {
      icon: Heart,
      title: "Save to Favorites",
      description:
        "Like recipes and save them to your personal collection for quick access",
    },
  ];

  return (
    <>
      <MotionWrapper>
        <Banner></Banner>
      </MotionWrapper>

      {/* top liked recipes */}
      <section className="max-w-7xl mx-auto px-10 pt-10">
        <MotionWrapper>
          <h1 className="text-3xl font-bold text-center">Top Liked Recipes</h1>
          <p className="text-center text-gray-500 mt-2 text-xl md:text-2xl">
            Discover the most popular recipes loved by our community
          </p>
        </MotionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {recipeData.slice(0, 6).map((recipe) => (
            <MotionWrapper>
              <RecipeCard key={recipe.id} recipe={recipe} />
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* why choose our recipe */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Animation */}
          <MotionWrapper className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Recipe Book?
            </h2>

            <p className="text-xl text-muted-foreground">
              Everything you need to become a better home chef and discover
              amazing recipes from around the world.
            </p>
          </MotionWrapper>

          {/* Feature Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <MotionWrapper
                  key={feature.title}
                  className="group bg-card border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-orange-300 mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xl leading-relaxed">
                    {feature.description}
                  </p>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* join our community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <MotionWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1765582870011-ff3cfdb06700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Food community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Food Community
            </h2>

            <p className="text-xl text-muted-foreground mb-6">
              Connect with thousands of passionate home cooks, share your
              culinary creations, and discover new flavors every day. Our
              community is growing and we'd love to have you!
            </p>

            <ul className="space-y-3 mb-8">
              {benifits.map((benifit) => {
                return (
                  <li
                    key={benifit.id}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center flex-shrink-0 ">
                      <span className="text-primary-foreground text-lg">✓</span>
                    </div>
                    <span className="text-xl">{benifit.text}</span>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-primary-foreground rounded-lg hover:bg-[var(--primary)]/80 transition-colors text-lg font-semibold"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </MotionWrapper>
      </section>
    </>
  );
};

export default Home;
