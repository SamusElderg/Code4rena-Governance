import Image from "next/image";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import githubImg from "../../img/github-upscale.png";

const features = [
  {
    name: "Verify.",
    description:
      "Pull up the open source Code4rena ecosystem to verify the code you are running.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Discuss.",
    description:
      "Join in on discussions influencing the direction of the Code4rena ecosystem.",
    icon: LockClosedIcon,
  },
  {
    name: "Suggest.",
    description:
      "Found a bug, issue or have an idea for an improvement? Raise a GitHub issue.",
    icon: ServerIcon,
  },
  {
    name: "Contribute.",
    description:
      "Submit lines of code to fix issues and improve Code4rena for the community.",
    icon: CloudArrowUpIcon,
  },
];

export default function Contribute() {
  return (
    <div className="relative isolate my-16 overflow-hidden sm:my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Help build!
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Contribute to the ecosystem
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Open source code, transparent community collaboration on GitHub.
                View/verify the code, raise issues and suggestions, partake in
                discussions or contribute lines of code.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
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
          <Image
            priority
            src={githubImg}
            alt="Code4rena on GitHub"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
