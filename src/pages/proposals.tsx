import { type NextPage } from "next";
import Footer from "../components/layout/footer";
import Head from "next/head";
import ProposalList from "../components/proposals/proposalList";

const ProposalsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code4rena DAO Proposals</title>
        <meta
          name="description"
          content="View and manage Code4rena DAO proposals"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-indigo-950">
        <main>
          <ProposalList />
          <br />
          <br />
          <br />
          <div className="text-center text-white">
            GET PROPOSALS FROM TALLY API AND/OR DIRECTLY ON-CHAIN, ALLOW USERS
            TO CONNECT WALLET AND MANAGE PROPOSALS
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProposalsPage;
