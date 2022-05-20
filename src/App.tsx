import logo from "./images/logo.svg";
import hamburgerIcon from "./images/icon-hamburger.svg";
import bgPatternIntroMobile from "./images/bg-pattern-intro-mobile.svg";
import illustrationEditorMobile from "./images/illustration-editor-mobile.svg";

function App() {
  return (
    <>
      <header className="relative z-0 overflow-hidden w-full min-h-[37.5rem] py-14 rounded-bl-[6.25rem] flex flex-col bg-gradient-to-br from-introGradient-from to-introGradient-to">
        <div className="absolute -z-50 w-[85rem] -top-[16rem] -left-[22rem]">
          <img className="w-full" src={bgPatternIntroMobile} alt="" />
        </div>
        <nav className="flex justify-between px-6">
          <img className="w-20" src={logo} alt="" />
          <button aria-label="menu button" className="">
            <img src={hamburgerIcon} alt="" />
          </button>
        </nav>
        <div className="flex-1 px-9 grid place-content-center text-center text-white">
          <h1 className="text-4xl font-semibold -tracking-[1.5px] leading-[2.875rem] mb-4">
            A modern publishing platform
          </h1>
          <p className="text-lg font-light mb-12">
            Grow your audience and build your online brand
          </p>
          <div className="flex gap-3 text-base font-ubuntu">
            <button className="flex-1 py-3 font-bold rounded-full border-1 border-white text-introGradient-from bg-white">
              Start for Free
            </button>
            <button className="flex-1 py-3 font-bold rounded-full border-1 border-white">
              Learn More
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
