import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import Benefits from "./Benefits";
import WhyViva from "./WhyViva";

function Home() {
  return (
    <Layout>
      <div className="px-32 sm:px-2">
        <Intro />
        <Benefits />
        <WhyViva />
      </div>
    </Layout>
  );
}

export default Home;
