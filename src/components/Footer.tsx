import { navigationLinks } from "../data/navigationLinks";
import logo from "../images/logo.svg";
import { iNavMenuProps } from "../utilities/interfaces";

export default function Footer() {
  return (
    <footer className="relative font-ubuntu text-lg text-center py-20 bg-dkrBlackBlue text-grayishBlue rounded-tr-100 md:text-left">
      <div className="grid gap-12 place-content-center md:grid-cols-4 maxWidth">
        <img className="w-24 mb-6" src={logo} alt="" />
        {navigationLinks.map((navLink) => (
          <NavMenu
            key={navLink.title}
            title={navLink.title}
            links={navLink.links}
          />
        ))}
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

const NavMenu = ({ title, links }: iNavMenuProps) => {
  return (
    <div className="text-15">
      <h4 className="text-white font-bold mb-8">{title}</h4>
      <ul>
        {links.map((link, idx) => (
          <li
            key={idx}
            className="hover:underline cursor-pointer font-normal mb-2 w-fit"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
