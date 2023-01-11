export default function Hero() {
  return (
    <div className="relative h-full px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-center sm:text-6xl">
              Code<span className="text-[hsl(280,100%,70%)]">4rena</span> DAO
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-center">
              ARENA is a community-distributed token providing holders a direct
              stake in the future of the Code4rena DAO by aligning interests
              among ecosystem peers and serving as a way to steward the
              Code4rena model towards success
            </p>
            <div className="mt-8 gap-x-4 sm:flex sm:justify-center">
              <a
                href="https://www.tally.xyz/gov/code4rena/proposals"
                target="_blank"
                rel="noreferrer"
                className="mb-2 flex w-52 items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
              >
                View Proposals
              </a>
              <a
                href="https://code4rena.com/"
                target="_blank"
                rel="noreferrer"
                className="mb-2 flex w-52 items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
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
