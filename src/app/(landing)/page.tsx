// components
import { FunctionComponent } from "react";
import {
  Banner,
  Features,
  Statistics,
  Comment,
  GrowCommunication,
} from "./_components/";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  return (
    <section>
      <Banner />
      <Features />
      <Statistics />
      <Comment />
      <GrowCommunication />
    </section>
  );
};

export default LandingPage;
