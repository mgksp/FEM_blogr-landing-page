import logo from "../images/logo.svg";

export default function Footer() {
  return (
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
  );
}
