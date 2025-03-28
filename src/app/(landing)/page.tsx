// components
import React from "react";
import {
  Banner,
  Features,
  Statistics,
  Comment,
  GrowCommunication,
} from "./_components/";
import { Footer, Header } from "@/app/_components";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Header />
      <section>
        <Banner />
        <Features />
        <Statistics />
        <Comment />
        <GrowCommunication />
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
