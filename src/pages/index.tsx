import { type NextPage } from "next";
import Head from "next/head";
import Footer from "../components/layout/footer";
import Hero from "../components/home/hero";
import LogoCloud from "../components/home/logoCloud";
import Token from "../components/home/token";
import Proposals from "../components/home/proposals";
import TokenAlt from "../components/home/tokenAlt";
import Cta from "../components/home/cta";

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
          <LogoCloud />
          <Token />
          <Proposals />
          <TokenAlt />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
