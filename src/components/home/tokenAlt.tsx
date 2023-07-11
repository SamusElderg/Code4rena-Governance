const stats = [
  { id: 1, name: "Circulating Supply", value: "123.4M" },
  { id: 2, name: "Total Supply", value: "1.0B" },
  { id: 3, name: "Market Cap", value: "$1.0M" },
  { id: 4, name: "Token Holders", value: "165" },
];

// TODO: Add polygonscan link, add CMC link, etc
// TODO: Add button to 'add token' to wallet
export default function TokenAlt() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 className="text-base font-semibold leading-8 text-indigo-400">
          Tokenomics
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The ARENA Token
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Distributed to Code4rena ecosystem peers to vote and propose changes
          incentivizing growth through sound DAO governance.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
          >
            <dt className="text-sm leading-6">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
