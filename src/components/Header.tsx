import logo from "../images/logo.svg";

import hamburgerIcon from "../images/icon-hamburger.svg";

import bgPatternIntroMobile from "../images/bg-pattern-intro-mobile.svg";
import bgPatternIntroDesktop from "../images/bg-pattern-intro-desktop.svg";

import iconArrDark from "../images/icon-arrow-dark.svg";
import iconArrLight from "../images/icon-arrow-light.svg";

export default function Header() {
  return (
    <header className="relative z-0 overflow-hidden w-full min-h-[37.5rem] py-14 rounded-bl-100 flex flex-col bg-gradient-to-br from-introGradient-from to-introGradient-to">
      <div className="md:hidden absolute -z-50 w-[85rem] -top-[16rem] -left-[22rem]">
        <img className="w-full" src={bgPatternIntroMobile} alt="" />
      </div>
      <div className="hidden md:block absolute w-[190rem] -z-50 -top-[82rem] -left-[24rem]">
        <img src={bgPatternIntroDesktop} alt="" />
      </div>

      <nav className="font-ubuntu px-6 max-w-[70rem] w-full mx-auto flex gap-14 justify-between items-center text-white">
        <img className="w-20 md:w-24" src={logo} alt="" />
        <button aria-label="menu button" className="ml-auto md:hidden">
          <img src={hamburgerIcon} alt="" />
        </button>

        <div className="hidden md:flex flex-1 justify-between items-center">
          <div className="flex gap-5">
            <div className="cursor-pointer">
              <div className="flex gap-2 items-center">
                Product <img src={iconArrLight} alt="" />
              </div>
              <div className="relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded shadow-lg w-40 bg-white py-8 px-6 text-dkrBlackBlue">
                  <ul className="flex flex-col gap-2">
                    <li className="hover:font-bold">Overview</li>
                    <li className="hover:font-bold">Pricing</li>
                    <li className="hover:font-bold">Marketplace</li>
                    <li className="hover:font-bold">Features</li>
                    <li className="hover:font-bold">Integrations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="flex gap-2 items-center">
                Company <img src={iconArrLight} alt="" />
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="flex gap-2 items-center">
                Connect <img src={iconArrLight} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <button>Login</button>
            <button className="flex-1 py-3 font-bold rounded-full border-1 border-white min-w-[8.5rem] md:flex-none text-introGradient-to bg-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 px-9 grid place-content-center text-center text-white">
        <h1 className="mb-4 md:mb-5">A modern publishing platform</h1>
        <p className="text-lg mb-12 md:text-xl">
          Grow your audience and build your online brand
        </p>
        <div className="flex gap-3 text-base font-ubuntu md:justify-center">
          <button className="flex-1 py-3 font-bold rounded-full border-1 border-white min-w-[8.5rem] md:flex-none text-introGradient-from bg-white">
            Start for Free
          </button>
          <button className="flex-1 py-3 font-bold rounded-full border-1 border-white min-w-[8.5rem] md:flex-none">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}
