import { type NextPage } from "next";
import Head from "next/head";
import ArenaToken from "../components/arenaToken";
import Hero from "../components/hero";
import TopNav from "../components/topNav";

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
        <ArenaToken />
      </main>
    </>
  );
};

export default Home;
