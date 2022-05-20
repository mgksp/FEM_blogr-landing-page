import logo from "./images/logo.svg";
import hamburgerIcon from "./images/icon-hamburger.svg";
import bgPatternIntroMobile from "./images/bg-pattern-intro-mobile.svg";
import illustrationEditorMobile from "./images/illustration-editor-mobile.svg";
import illustrationPhones from "./images/illustration-phones.svg";
import illustrationLaptopMobile from "./images/illustration-laptop-mobile.svg";
import bgPatternCircles from "./images/bg-pattern-circles.svg";

function App() {
  return (
    <>
      <header className="relative z-0 overflow-hidden w-full min-h-[37.5rem] py-14 rounded-bl-100 flex flex-col bg-gradient-to-br from-introGradient-from to-introGradient-to">
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
          <h1 className="mb-4">A modern publishing platform</h1>
          <p className="text-lg mb-12">
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
      <main className="py-24 text-center">
        <h2 className="mb-11">Designed for the future</h2>
        <div className="">
          <img className="mx-auto" src={illustrationEditorMobile} alt="" />
        </div>

        <div className="mt-12 px-8">
          <div className="mb-10">
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

        <div className="relative z-0 mt-64 mb-16 rounded-bl-100 rounded-tr-100 bg-gradient-to-br from-bodyGradient-from to-bodyGradient-to">
          <img
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={illustrationPhones}
            alt=""
          />
          <div className="relative px-8 pb-28 pt-56 rounded-tr-100 overflow-hidden">
            <div className="absolute -z-50 -top-60 left-1/2 -translate-x-1/2 w-[160%]">
              <img className="" src={bgPatternCircles} alt="" />
            </div>
            <h1 className="">State of the Art Infrastructure</h1>
            <p className="bodyContent text-grayishBlue">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>

        <div className="mb-11">
          <img className="mx-auto" src={illustrationLaptopMobile} alt="" />
        </div>

        <div className="px-8">
          <div className="mb-10">
            <h3 className="">Free, open, simple</h3>
            <p className="bodyContent">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="">
            <h3 className="">Powerful tooling</h3>
            <p className="bodyContent">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
