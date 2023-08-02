import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import heroImage from "../../img/vote-proposals.png";

const secondaryFeatures = [
  {
    name: "Create proposals.",
    description:
      "Empower the DAO's operations and foster ecosystem improvement by raising proposals that influence its function and funding.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Support proposals.",
    description:
      "Stake ARENA token weight to back proposals shaping DAO operations, driving ecosystem growth and incentivizing improvements.",
    icon: LockClosedIcon,
  },
  {
    name: "Oppose proposals.",
    description:
      "Express your dissent by contesting proposals to safeguard the ecosystem from potential drawbacks and promoting responsible growth.",
    icon: ArrowPathIcon,
  },
  {
    name: "Own your weight.",
    description:
      "Exert your individual influence by leveraging your own token weight to directly engage in managing proposals, ensuring active participation.",
    icon: FingerPrintIcon,
  },
  {
    name: "Delegate your weight.",
    description:
      "Share your impact through delegation by entrusting your token weight to another voter, empowering them to make decisions for you.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Discuss proposals.",
    description:
      "Uncertain about a proposal? Join the community discussion to gather insights, make informed decisions, and shape the ecosystem's growth.",
    icon: ServerIcon,
  },
];

export default function Proposals() {
  return (
    <div className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Have your say!
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            DAO Proposals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Help shape the future of Code4rena by influencing how the DAO
            operates and treasury is spent.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={heroImage}
            alt="Proposals screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          {/* TODO: Use Tally's API to show most recent proposals and allow user's to vote within this DApp */}
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {secondaryFeatures.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
