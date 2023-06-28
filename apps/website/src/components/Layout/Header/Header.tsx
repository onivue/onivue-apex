import LogoIcon from "@/components/LogoIcon/LogoIcon";
import Link from "next/link";
import { HiOutlineCog } from "react-icons/hi";

const Header = () => (
  <header className="sticky top-0 z-10 flex items-center px-4 py-2 backdrop-blur lg:px-4 lg:pt-4 lg:backdrop-blur-none">
    <div className="bg-base-200 relative flex w-full items-center justify-between rounded-lg p-2 lg:flex-row-reverse">
      <div className="grid h-full place-items-center rounded-lg lg:hidden">
        <Link href="/">
          <LogoIcon className="h-10 w-10" id={"header"} />
        </Link>
      </div>
      <div className="flex items-center text-sm">
        <div className="false hover:text-base-300 text-base-content cursor-pointer px-3">
          <HiOutlineCog className="h-6 w-6" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
