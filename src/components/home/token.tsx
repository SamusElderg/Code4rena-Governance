import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const primaryFeatures = [
  {
    name: "Circulating Supply",
    description:
      "Create or vote in proposals to influence how the DAO operates or to allocate funds from the treasury for incentivized improvements to the ecosystem.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Total Supply",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Market Cap",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: CalendarDaysIcon,
  },
];

// TODO: Add polygonscan link, add CMC link, etc
// TODO: Add button to 'add token' to wallet
export default function Token() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-400">
          Token
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="text-indigo-600">$</span>ARENA
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Distributed to Code4rena ecosystem peers to vote and propose changes
          incentivizing growth through sound DAO governance
        </p>
      </div>
      <div className="mt-5 text-center text-2xl text-white">
        *Tokenomics Graphic*
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {primaryFeatures.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <a
                    href={feature.href}
                    className="text-sm font-semibold leading-6 text-indigo-400"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
