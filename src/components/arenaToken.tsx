import Image from "next/image";
import arenaLogo from "../../public/arena-logo.png";
import { totalSupply } from "../const/web3";

export default function ArenaToken() {
  return (
    <div className="w-full bg-gray-900">
      <div className="mx-auto py-12 px-6 sm:max-w-3xl sm:py-16 lg:px-8 lg:py-20">
        <div className="px-8 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <Image
              className="mr-2 inline-block h-12 w-12"
              src={arenaLogo}
              alt="Picture of the author"
            />
            ARENA Token
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Distributed to Code4rena ecosystem peers to vote and propose changes
            incentivizing growth through sound DAO governance
          </p>
        </div>
        <dl className="mt-10 rounded-lg text-center shadow-lg sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Circulating Supply
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              {/* TODO: CALL circulatingSupply FROM pages/api */}
              {/* TODO: create short number formatting helper. ie. 1,000 = 1T | 1,000,000 = 1M */}
              123.4M
            </dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Total Supply
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              {/* TODO: use totalSupply from const/web3 */}
              {/* TODO: create short number formatting helper. ie. 1,000 = 1T | 1,000,000 = 1M */}
              1.0B
            </dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
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
