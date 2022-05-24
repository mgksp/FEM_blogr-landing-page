import logo from "../images/logo.svg";

export default function Footer() {
  return (
    <footer className="relative font-ubuntu text-lg text-center py-20 bg-dkrBlackBlue text-grayishBlue rounded-tr-100 md:text-left">
      <div className="grid gap-12 place-content-center md:grid-cols-4 maxWidth">
        <img className="w-24 mb-6" src={logo} alt="" />
        <div className="">
          <h4 className="text-white font-bold mb-8">Products</h4>
          <ul>
            <li className="hover:underline cursor-pointer">Overview</li>
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">Marketplace</li>
            <li className="hover:underline cursor-pointer">Features</li>
            <li className="hover:underline cursor-pointer">Integrations</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-white font-bold mb-8">Company</h4>
          <ul>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Team</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-white font-bold mb-8">Connect</h4>
          <ul>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Newsletter</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
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
