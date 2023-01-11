import { type NextPage } from "next";
import Head from "next/head";
import Token from "../components/homeSections/token";
import Hero from "../components/homeSections/hero";
import Proposals from "../components/homeSections/proposals";
import TopNav from "../components/layout/topNav";

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="min-h-screen">
          <Hero />
        </div>
        <Token />
        <Proposals />
      </main>
    </>
  );
};

export default Home;
