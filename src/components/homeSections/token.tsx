import Image from "next/image";
import arenaLogo from "../../img/arena-logo.png";
import TokenomicsImage from "../../img/tokenomics.png";
// import { totalSupply } from "../const/web3";

export default function Token() {
  return (
    <div className="w-full bg-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="px-2 text-left sm:w-1/2 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              <Image
                className="mr-2 inline-block h-12 w-12"
                src={arenaLogo}
                alt="ARENA token logo"
              />
              ARENA Token
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
              Distributed to Code4rena ecosystem peers to vote and propose
              changes incentivizing growth through sound DAO governance
            </p>
          </div>
          <div className="sm:w-1/2">
            <Image className="" src={TokenomicsImage} alt="ARENA token logo" />
          </div>
        </div>
        <dl className="mt-10 flex flex-wrap rounded-lg bg-gradient-to-b from-[#2e026d] to-[#15162c] text-center">
          <div className="flex flex-auto basis-44 flex-col p-6">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Circulating Supply
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              {/* TODO: CALL circulatingSupply FROM pages/api */}
              {/* TODO: create short number formatting helper. ie. 1,000 = 1T | 1,000,000 = 1M */}
              123.4M
            </dd>
          </div>
          <div className="flex flex-auto basis-44 flex-col p-6">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Total Supply
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              {/* TODO: use totalSupply from const/web3 */}
              {/* TODO: create short number formatting helper. ie. 1,000 = 1T | 1,000,000 = 1M */}
              1.0B
            </dd>
          </div>
          <div className="flex flex-auto basis-44 flex-col p-6">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Market Cap
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              {/* TODO: CALL marketCap FROM pages/api */}
              {/* TODO: create short number formatting helper. ie. 1,000 = 1T | 1,000,000 = 1M */}
              $1.0M
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
