import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { MobileNav, DesktopNav } from ".";

import logo from "../images/logo.svg";

import hamburgerIcon from "../images/icon-hamburger.svg";

import bgPatternIntroMobile from "../images/bg-pattern-intro-mobile.svg";
import bgPatternIntroDesktop from "../images/bg-pattern-intro-desktop.svg";

export default function Header() {
  const [showMobNav, setShowMobNav] = useState<boolean>(false);

  return (
    <header className="relative z-0 overflow-hidden w-full min-h-[37.5rem] py-14 rounded-bl-100 flex flex-col bg-gradient-to-br from-introGradient-from to-introGradient-to">
      <div className="md:hidden absolute -z-50 w-[85rem] -top-[16rem] -left-[22rem]">
        <img className="w-full" src={bgPatternIntroMobile} alt="" />
      </div>
      <div className="hidden md:block absolute w-[190rem] -z-50 -top-[82rem] -left-[24rem]">
        <img src={bgPatternIntroDesktop} alt="" />
      </div>

      <div className="px-6">
        <nav className="relative font-ubuntu w-full maxWidth flex gap-14 justify-between items-center text-white">
          <img className="w-20 md:w-24" src={logo} alt="" />
          <button
            aria-label="menu button"
            className="ml-auto md:hidden"
            onClick={() => setShowMobNav(true)}
          >
            <img src={hamburgerIcon} alt="" />
          </button>

          <DesktopNav />
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {showMobNav && (
              <MobileNav
                mobNavState={showMobNav}
                setMobNavState={setShowMobNav}
              />
            )}
          </AnimatePresence>
        </nav>
      </div>

      <div className="flex-1 px-9 grid place-content-center text-center text-white">
        <h1 className="leading-tight mb-4 md:mb-2">
          A modern publishing platform
        </h1>
        <p className="text-lg mb-12 md:text-xl">
          Grow your audience and build your online brand
        </p>
        <div className="flex gap-3 text-base font-ubuntu md:justify-center">
          <button className="flex-1 py-3 font-bold rounded-full border-1 border-white min-w-[8.5rem] md:flex-none text-ltRed bg-white hover:text-white hover:bg-ltrRed hover:border-ltrRed transition-colors duration-200">
            Start for Free
          </button>
          <button className="flex-1 py-3 font-bold rounded-full border-1 border-white min-w-[8.5rem] md:flex-none hover:bg-white hover:text-ltRed transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}
