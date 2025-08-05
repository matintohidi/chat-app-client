import React from "react";
import {
  Banner,
  Features,
  Statistics,
  Comment,
  GrowCommunication,
} from "./_components/";

const LandingPage: React.FC = () => {
  return (
    <main>
      <Banner />
      <Features />
      <Statistics />
      <Comment />
      <GrowCommunication />
    </main>
  );
};

export default LandingPage;
