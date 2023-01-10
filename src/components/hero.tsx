export default function Hero() {
  return (
    <div className="relative px-6 lg:px-8 h-full">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-center sm:text-6xl">
              Code<span className="text-[hsl(280,100%,70%)]">4rena</span>{" "}
              Governance
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-center">
              ARENA is a community-distributed token providing holders a direct
              stake in the future of the Code4rena DAO by aligning interests among
              ecosystem peers and serving as a way to steward the Code4rena
              model towards success
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
              >
                Code4rena Website
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
              >
                Get ARENA Tokens
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
