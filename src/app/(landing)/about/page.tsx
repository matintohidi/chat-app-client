import React from "react";
import Head from "next/head";
import Hero from "@/app/(landing)/_components/about/hero";
import StorySection from "@/app/(landing)/_components/about/storySection";
import MissionVision from "@/app/(landing)/_components/about/missionVision";
import ValuesSection from "@/app/(landing)/_components/about/valuesSection";
import ImpactSection from "@/app/(landing)/_components/about/impactSection";
import CTASection from "@/app/(landing)/_components/about/ctaSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Chat Life</title>
        <meta
          name="description"
          content="Learn about Chat Life's mission to connect people worldwide through secure, unrestricted communication. Discover our story, values, and commitment to global connectivity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <main>
          <Hero />
          <StorySection />
          <MissionVision />
          <ValuesSection />
          <ImpactSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default AboutPage;
