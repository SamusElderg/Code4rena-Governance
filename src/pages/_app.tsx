import { type AppType } from "next/dist/shared/lib/utils";

import { Nunito } from "next/font/google";

import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={nunito.variable}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
