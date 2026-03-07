import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* top liked recipes */}
      <div>
        <h1>Top Liked Recipez</h1>
      </div>
    </div>
  );
};

export default Home;
