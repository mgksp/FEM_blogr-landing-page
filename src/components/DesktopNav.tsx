import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import iconArrLight from "../images/icon-arrow-light.svg";

import { navMenu } from "../utilities/enums";
import { navigationLinks } from "../data/navigationLinks";
import { iNavMenuProps } from "../utilities/interfaces";

export default function DesktopNav() {
  const [productMenu, setProductMenu] = useState<boolean>(false);
  const [companyMenu, setCompanyMenu] = useState<boolean>(false);
  const [connectMenu, setConnectMenu] = useState<boolean>(false);

  return (
    <div className="hidden md:flex flex-1 justify-between items-center text-base">
      <div className="flex gap-5">
        {navigationLinks.map((navLink, idx) => (
          <NavMenu
            key={idx}
            title={navLink.title}
            links={navLink.links}
            navMenuState={[productMenu, companyMenu, connectMenu][idx]}
            setNavMenuState={
              [setProductMenu, setCompanyMenu, setConnectMenu][idx]
            }
          />
        ))}
      </div>
      <div className="flex gap-5">
        <button className="font-bold">Login</button>
        <button className="flex-1 py-3 font-bold rounded-full min-w-[8.5rem] md:flex-none text-ltRed bg-white hover:text-white hover:bg-ltrRed transition-colors duration-200">
          Sign Up
        </button>
      </div>
    </div>
  );
}

const NavMenu = ({
  title,
  links,
  navMenuState,
  setNavMenuState,
}: iNavMenuProps) => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeNavMenu(evt: MouseEvent) {
      if (
        navMenuState &&
        node.current &&
        !node.current.contains(evt.target as Node)
      ) {
        setNavMenuState!(false);
      }
    }

    document.addEventListener("mousedown", closeNavMenu);

    return () => {
      document.removeEventListener("mousedown", closeNavMenu);
    };
  }, [navMenuState]);

  return (
    <div ref={node}>
      <div
        className="flex gap-2 items-center cursor-pointer font-bold"
        onClick={() => setNavMenuState!((prev) => !prev)}
      >
        <div className={navMenuState ? "underline" : ""}>{title}</div>
        <motion.img
          animate={{ rotate: navMenuState ? 180 : 0 }}
          src={iconArrLight}
          alt=""
        />
      </div>
      <div className="relative">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: navMenuState ? "fit-content" : 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 rounded shadow-lg w-40 bg-white px-6 text-dkrBlackBlue overflow-hidden"
        >
          <ul className="flex flex-col gap-2 py-8 text-15">
            {links.map((link, idx) => (
              <li key={idx} className="cursor-pointer hover:font-bold">
                {link}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
