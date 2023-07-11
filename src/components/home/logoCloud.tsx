import Image from "next/image";
import examplePartner from "../../img/example-partner-logo.png";

export default function LogoCloud() {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-white">
        Partnered up with
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <Image
          src={examplePartner}
          alt="example1 partner logo"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          src={examplePartner}
          alt="example2 partner logo"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          src={examplePartner}
          alt="example3 partner logo"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          src={examplePartner}
          alt="example4 partner logo"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        />
        <Image
          src={examplePartner}
          alt="example5 partner logo"
          width={158}
          height={48}
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        />
      </div>
    </div>
  );
}
