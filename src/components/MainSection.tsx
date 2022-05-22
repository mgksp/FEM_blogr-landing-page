import illustrationEditorMobile from "../images/illustration-editor-mobile.svg";
import illustrationEditorDesktop from "../images/illustration-editor-desktop.svg";

import bgPatternCircles from "../images/bg-pattern-circles.svg";
import illustrationPhones from "../images/illustration-phones.svg";

import illustrationLaptopMobile from "../images/illustration-laptop-mobile.svg";
import illustrationLaptopDesktop from "../images/illustration-laptop-desktop.svg";

export default function MainSection() {
  return (
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
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
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
  );
}
