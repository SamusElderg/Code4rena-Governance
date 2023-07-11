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
      "Create proposals to influence how the DAO operates or to allocate funds from the treasury to build or incentivize improvement of the ecosystem.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Support proposals.",
    description:
      "Words of roughly this length. Words of roughly this length. Words of roughly this length. Words of roughly this length.",
    icon: LockClosedIcon,
  },
  {
    name: "Oppose proposals.",
    description:
      "Words of roughly this length. Words of roughly this length. Words of roughly this length. Words of roughly this length.",
    icon: ArrowPathIcon,
  },
  {
    name: "Own your weight.",
    description:
      "Words of roughly this length. Words of roughly this length. Words of roughly this length. Words of roughly this length.",
    icon: FingerPrintIcon,
  },
  {
    name: "Delegate your weight.",
    description:
      "Words of roughly this length. Words of roughly this length. Words of roughly this length. Words of roughly this length.",
    icon: Cog6ToothIcon,
  },
  {
    name: "One more feature.",
    description:
      "Words of roughly this length. Words of roughly this length. Words of roughly this length. Words of roughly this length.",
    icon: ServerIcon,
  },
];

export default function Proposals() {
  return (
    <div className="mt-32 sm:mt-56">
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
