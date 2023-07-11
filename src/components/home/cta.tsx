import CtaBg from "./components/ctaBg";

export default function Cta() {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <CtaBg />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Step into the ARENA.
          {/* <br />
          Start using our app today. */}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Join the Code4rena wolfpack and help defend the web3 ecosystem.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Buy ARENA
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Become a Warden <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
