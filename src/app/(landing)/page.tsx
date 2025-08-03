import React from "react";
import {
  Banner,
  Features,
  Statistics,
  Comment,
  GrowCommunication,
} from "./_components/";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

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
