import LogoIcon from "@/components/LogoIcon/LogoIcon";
import Link from "next/link";
import Router from "next/router";
import { forwardRef, useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import SideBarNavigation from "./SideBarNavigation";

export interface SideBarProps {
  hidden?: boolean;
  width?: string;
}

export default function SideBar({ hidden = false, width = "20rem" }: SideBarProps) {
  const [sideBarIsOpen, setIsSideBarOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setIsSideBarOpen(!sideBarIsOpen);
  };

  useEffect(() => {
    // CLOSE SIDEBAR WHEN ROUTE CHANGES
    Router.events.on("routeChangeStart", () => setIsSideBarOpen(false));
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node) && sideBarIsOpen) {
        setIsSideBarOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [sideBarIsOpen, ref]);

  if (hidden) return null;

  return (
    <>
      {sideBarIsOpen && <SideBarOverlay ref={ref} />}
      <SideBarToggleButton toggleSidenav={toggleSideBar} />
      <SideBarNavigationWrapper sideBarIsOpen={sideBarIsOpen} width={width}>
        <SideBarLogo />
        <SideBarNavigation />
      </SideBarNavigationWrapper>
    </>
  );
}

interface SideBarNavigationWrapperProps {
  sideBarIsOpen: boolean;
  width: string;
  children: React.ReactNode;
}

function SideBarNavigationWrapper(props: SideBarNavigationWrapperProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-screen w-80 shrink-0 transform pt-4 transition-all duration-300 lg:sticky lg:-translate-x-0 ${
        props.sideBarIsOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: props.width }}
    >
      <div className="bg-base-200 flex h-full flex-col overflow-auto rounded-tr-xl p-4 focus:outline-none">
        {props.children}
      </div>
    </aside>
  );
}

function SideBarLogo() {
  return (
    <Link href="/">
      <div className="mb-8 mt-5 flex justify-center">
        <LogoIcon className="h-16 w-16 cursor-pointer" id={"sidebarlogo"} />
      </div>
    </Link>
  );
}

interface SideBarToggleButtonProps {
  toggleSidenav: () => void;
}

function SideBarToggleButton(props: SideBarToggleButtonProps) {
  return (
    <div className={`animate-fade-in fixed bottom-5 right-5 z-50 items-center space-x-4 lg:hidden`}>
      <button
        onClick={props.toggleSidenav}
        className="text-primary-content bg-primary ring-primary hover:bg-primary-focus rounded-lg p-1 transition-colors duration-200 focus:outline-none focus:ring"
      >
        <HiMenuAlt2 className="h-8 w-8" />
      </button>
    </div>
  );
}

const SideBarOverlay = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="animate-fade-in fixed inset-0 z-20 h-screen bg-gray-500 bg-opacity-40 backdrop-blur-sm backdrop-filter lg:hidden"
    />
  );
});
SideBarOverlay.displayName = "SideBarOverlay";
