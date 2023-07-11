import { type NextPage } from "next";
import Footer from "../components/layout/footer";
import Head from "next/head";

const TokenPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code4rena ARENA Token</title>
        <meta
          name="description"
          content="View and claim your vested ARENA tokens"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-indigo-950">
        <main>
          <div className="text-center text-white">
            THIS SECTION IS INTENDED TO REPLACE THE FUNCTIONALITY OF
            https://tokens.code4rena.com/
          </div>
          <div className="text-center text-white">*CONNECT WALLET</div>
          <div className="text-center text-white">*SHOW BALANCE</div>
          <div className="text-center text-white">*SHOW LOCKED</div>
          <div className="text-center text-white">*SHOW CLAIMABLE</div>
          <div className="text-center text-white">*BUTTON TO CLAIM</div>
          <div className="text-center text-white">*VIEW WALLET ON POLYSCAN</div>
          <div className="text-center text-white">******</div>
          <div className="text-center text-white">*SHOW TOKEN INFO</div>
          <div className="text-center text-white">*TOKEN ADDRESS</div>
          <div className="text-center text-white">
            *BUTTON TO ADD TOKEN TO WALLET
          </div>
          <div className="text-center text-white">*VIEW TOKEN ON POLYSCAN</div>
          <div className="text-center text-white">******</div>
          <div className="text-center text-white">*RELEVANT LINKS/BUTTONS</div>
          <div className="text-center text-white">
            *ie. Coinmarketcap & coingecko
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TokenPage;
