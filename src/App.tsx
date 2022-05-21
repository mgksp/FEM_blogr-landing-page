import logo from "./images/logo.svg";

import hamburgerIcon from "./images/icon-hamburger.svg";

import bgPatternIntroMobile from "./images/bg-pattern-intro-mobile.svg";
import bgPatternIntroDesktop from "./images/bg-pattern-intro-desktop.svg";

import illustrationEditorMobile from "./images/illustration-editor-mobile.svg";
import illustrationEditorDesktop from "./images/illustration-editor-desktop.svg";

import bgPatternCircles from "./images/bg-pattern-circles.svg";
import illustrationPhones from "./images/illustration-phones.svg";

import illustrationLaptopMobile from "./images/illustration-laptop-mobile.svg";
import illustrationLaptopDesktop from "./images/illustration-laptop-desktop.svg";

function App() {
  return (
    <>
      <header className="relative z-0 overflow-hidden w-full min-h-[37.5rem] py-14 rounded-bl-100 flex flex-col bg-gradient-to-br from-introGradient-from to-introGradient-to">
        <div className="md:hidden absolute -z-50 w-[85rem] -top-[16rem] -left-[22rem]">
          <img className="w-full" src={bgPatternIntroMobile} alt="" />
        </div>
        <div className="hidden md:block absolute w-[190rem] -z-50 -top-[82rem] -left-[24rem]">
          <img src={bgPatternIntroDesktop} alt="" />
        </div>

        <nav className="px-6 max-w-[70rem] w-full mx-auto flex gap-14 justify-between items-center text-white">
          <img className="w-20 md:w-24" src={logo} alt="" />
          <button aria-label="menu button" className="ml-auto md:hidden">
            <img src={hamburgerIcon} alt="" />
          </button>

          <div className="flex flex-1 justify-between items-center">
            <div className="flex gap-5">
              <div className="cursor-pointer">Product</div>
              <div className="cursor-pointer">Company</div>
              <div className="cursor-pointer">Connect</div>
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

      <main className="py-24 text-center md:text-left md:py-36 overflow-hidden">
        <h2 className="mb-11 md:mb-24">Designed for the future</h2>
        <div className="md:hidden">
          <img className="mx-auto" src={illustrationEditorMobile} alt="" />
        </div>

        <div className="md:grid grid-cols-2 maxWidth md:px-4">
          <div className="mt-12 px-8 md:px-0 md:mt-0">
            <div className="mb-10 md:mb-[4.5rem]">
              <h3 className="">Introducing an extensible editor</h3>
              <p className="bodyContent">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="">
              <h3 className="">Robust content management</h3>
              <p className="bodyContent">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you&apos;re in full control.
              </p>
            </div>
          </div>
          <div className="hidden relative md:block">
            <div className="absolute left-12 top-1/2 -translate-y-[51.5%] -z-50 w-[200%]">
              <img src={illustrationEditorDesktop} alt="" />
            </div>
          </div>
        </div>

        <div className="relative z-0 mt-64 mb-16 rounded-bl-100 rounded-tr-100 bg-gradient-to-br from-bodyGradient-from to-bodyGradient-to">
          <img
            className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:-translate-y-16 md:right-1/2 md:pr-5"
            src={illustrationPhones}
            alt=""
          />
          <div className="relative px-8 pb-28 pt-56 rounded-tr-100 overflow-hidden md:py-28 max-w-[90rem] mx-auto">
            <div className="absolute -z-50 -top-60 left-1/2 -translate-x-1/2 w-[160%] md:-top-[32rem] md:left-[65%]">
              <img className="" src={bgPatternCircles} alt="" />
            </div>
            <div className="md:grid grid-cols-2 md:mx-36 ">
              <div className="col-start-2">
                <h2 className="text-white text-[2.5rem] -tracking-[1.5px] md:text-left">
                  State of the Art Infrastructure
                </h2>
                <p className="bodyContent text-grayishBlue">
                  With reliability and speed in mind, worldwide data centers
                  provide the backbone for ultra-fast connectivity. This ensures
                  your site will load instantly, no matter where your readers
                  are, keeping your site competitive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-11 md:hidden">
          <img className="mx-auto" src={illustrationLaptopMobile} alt="" />
        </div>

        <div className="md:grid grid-cols-2 maxWidth md:px-4 md:pt-60 md:pb-40">
          <div className="hidden relative md:block">
            <div className="absolute -right-20 top-1/2 -translate-y-[51.5%] -z-50 w-[200%]">
              <img src={illustrationLaptopDesktop} alt="" />
            </div>
          </div>
          <div className="mt-12 px-8 md:px-0 md:mt-0">
            <div className="px-8 col-start-2">
              <div className="mb-10">
                <h3 className="">Free, open, simple</h3>
                <p className="bodyContent">
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </p>
              </div>
              <div className="">
                <h3 className="">Powerful tooling</h3>
                <p className="bodyContent">
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative font-ubuntu text-lg text-center py-20 bg-dkrBlackBlue text-grayishBlue rounded-tr-100">
        <div className="grid gap-12 place-content-center md:grid-cols-4 maxWidth">
          <img className="w-24 mb-6" src={logo} alt="" />
          <div className="">
            <h4 className="text-white font-bold mb-8">Products</h4>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-white font-bold mb-8">Company</h4>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-white font-bold mb-8">Connect</h4>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="absolute -bottom-7 py-1 text-xs font-medium text-dkrGrayishBlue w-full text-center">
          Challenge by{" "}
          <a
            className="text-sm text-dkrBlue font-bold"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-sm text-dkrBlue font-bold"
            href="https://www.github.com/mgksp"
            target="_blank"
          >
            Prabu
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
