import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import WhyChooseUs from "./WhyChooseUs";

function About() {
  return (
    <Layout>
      <div>
        <Intro />
        <WhyChooseUs />
      </div>
    </Layout>
  );
}

export default About;
