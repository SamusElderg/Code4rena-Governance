import Image from "next/image";
import tokenomicsImg from "../../img/tokenomics.png";
import tokenImg from "../../img/c4-logo-sqr-xl.png";

const stats = [
  { id: 1, name: "Circulating Supply", value: "123.4M" },
  { id: 2, name: "Total Supply", value: "1.0B" },
  { id: 3, name: "Market Cap", value: "$1.0M" },
  { id: 4, name: "Token Holders", value: "165" },
];

// TODO: Add polygonscan link, add CMC link, etc
// TODO: Add button to 'add token' to wallet
export default function TokenAlt2() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src={tokenImg}
        alt="ARENA token"
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          aria-hidden="true"
        >
          <div
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none">
          <div className="m-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-indigo-400">
              Tokenomics
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The ARENA Token
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Distributed to Code4rena ecosystem peers to vote and propose
              changes incentivizing growth through sound DAO governance.
              Code4rena token holders include founders, wardens, judges,
              sponsors, contributors, community members and Code4rena employees.
            </p>
          </div>
          <div className="mx-auto max-w-2xl md:max-w-sm">
            <Image
              priority
              src={tokenomicsImg}
              alt="ARENA Tokenomics"
              width={470}
              height={470}
            />
          </div>
        </dl>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-10 text-white sm:mt-20 sm:gap-y-16 md:mx-0 md:max-w-none md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <dt className="overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-6">
                {stat.name}
              </dt>
              <dd className="order-first text-xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
