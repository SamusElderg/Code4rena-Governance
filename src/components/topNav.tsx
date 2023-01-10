import Image from "next/image";
import arenaLogo from "../../public/arena-logo.png";

const navigation = [
  { name: "ARENA Token", href: "#" },
  { name: "Utility", href: "#" },
  { name: "Get ARENA", href: "#" },
  { name: "Ecosystem", href: "#" },
];

export default function TopNav() {
  return (
    <header className="bg-gradient-to-b from-[#15162c] to-[#2e026d]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="./">
              <span className="sr-only">ARENA Token</span>
              <Image
                className="h-10 w-auto"
                src={arenaLogo}
                alt="Picture of the author"
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Connect Wallet
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
