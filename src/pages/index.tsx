import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/home/hero";
import Proposals from "../components/home/proposals";
import Contribute from "../components/home/contribute";
import Cta from "../components/home/cta";
import Footer from "../components/layout/footer";
import Token from "../components/home/token";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code4rena Governance</title>
        <meta
          name="description"
          content="Governance information for Code4rena & the ARENA token"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-indigo-950">
        <main>
          <Hero />
          {/* <LogoCloud /> */}
          {/* <Token /> */}
          <Proposals />
          <Contribute />
          <Token />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
