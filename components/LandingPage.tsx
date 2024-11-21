import React from "react";
import Descriptions from "./sections/Descriptions";
import Destinations from "./sections/Destinations";
import Hero from "./sections/Hero";

function LandingPage() {
  return (
    <main>
      <Hero />
      <Descriptions />
      <Destinations />
    </main>
  );
}

export default LandingPage;
