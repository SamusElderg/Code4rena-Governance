import arenaLogo from "../../img/c4-logo-rect.png";
import heroImage from "../../img/vote-proposals.png";
import Image from "next/image";
import HeroBg from "./components/heroBg";

export default function Hero() {
  return (
    /* Hero section */
    <div className="relative isolate overflow-hidden" id="newHero">
      <HeroBg />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <Image
            className="mr-2 inline-block h-12 w-auto"
            src={arenaLogo}
            alt="ARENA token logo"
          />
          {/* <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                Latest updates
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div> */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to the Code
            <span className="text-indigo-600">4rena</span> DAO
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Empowering the community to build a safer Web3
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://code4rena.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              C4 Website
            </a>
            <a
              href="https://www.tally.xyz/gov/code4rena" // TODO: Once 'Proposals' page is complete, link that here instead (without target="_blank")
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold leading-6 text-white hover:text-indigo-400"
            >
              DAO Proposals <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              priority
              src={heroImage}
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[65rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
