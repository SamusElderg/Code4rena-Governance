import Image from "next/image";
import arenaLogo from "../../img/c4-logo-sqr.png";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "./" },
  { name: "Proposals", href: "./proposals" },
  { name: "Token", href: "./token" },
];

export default function TopNav() {
  return (
    <header className="bg-gradient-to-b from-[#2a2c65] to-[#1f1d4f] font-main">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="./">
              <span className="sr-only">ARENA Token</span>
              <Image
                className="h-10 w-auto"
                src={arenaLogo}
                alt="ARENA token logo"
              />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-semibold text-white hover:text-indigo-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block rounded-md bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Connect Wallet
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
