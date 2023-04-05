import { type NextPage } from "next";
import Head from "next/head";
import Token from "../components/homeSections/token";
import Hero from "../components/homeSections/hero";
import Proposals from "../components/homeSections/proposals";
import TopNav from "../components/layout/topNav";
import CTA1 from "../components/homeSections/cta1";

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
      <TopNav />

      <main className="flex min-h-screen flex-col items-center justify-center bg-black font-main">
        <div className="flex min-h-[calc(100vh-90px)] items-center">
          <Hero />
        </div>
        <Token />
        <Proposals />
        <CTA1 />
      </main>
    </>
  );
};

export default Home;
