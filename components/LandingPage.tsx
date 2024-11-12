import React from "react";
import Descriptions from "./sections/Descriptions";
import Destinations from "./sections/Destinations";
import Hero from "./sections/Hero";

function LandingPage() {
  return (
    <main>
      <div>Ini Landing Page</div>
      <Descriptions />
      <Destinations />
      <Hero />
    </main>
  );
}

export default LandingPage;
