import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="content w-full">
        <h1 className="font-semibold">
          Explore Indonesia with<span> GoExplore!</span>
        </h1>
        <div className="w-full text-end pr-64 pt-20">
          <a href="#" className="cta">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
