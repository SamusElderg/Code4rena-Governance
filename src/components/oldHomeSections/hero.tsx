export default function Hero() {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div className="transform text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to the
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Code
              <span className="text-indigo-600">4rena</span> DAO
            </h1>
            <h2 className="mt-4 max-w-sm text-xl font-medium text-white sm:max-w-xl md:text-3xl">
              Empowering the community to build a safer Web3
            </h2>
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.tally.xyz/gov/code4rena/proposals"
                target="_blank"
                rel="noreferrer"
                className="mx-1 flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3 text-lg font-medium text-white shadow-lg transition duration-300 hover:from-indigo-600 hover:to-purple-600 hover:shadow-xl sm:w-auto sm:px-8"
              >
                View Proposals
              </a>
              <a
                href="https://code4rena.com/"
                target="_blank"
                rel="noreferrer"
                className="mx-1 flex w-full items-center justify-center rounded-lg border-2 border-indigo-500 px-4 py-3 text-lg font-medium text-indigo-500 transition duration-300 hover:bg-indigo-500 hover:text-white sm:w-auto sm:px-8"
              >
                Code4rena Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
