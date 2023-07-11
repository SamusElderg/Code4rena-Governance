import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import TopNav from "../components/layout/topNav";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
