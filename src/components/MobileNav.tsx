import { useState } from "react";
import { motion } from "framer-motion";

import { navMenu } from "../utilities/enums";

import iconArrDark from "../images/icon-arrow-dark.svg";

export default function MobileNav() {
  const [productMenu, setProductMenu] = useState<boolean>(false);
  const [companyMenu, setCompanyMenu] = useState<boolean>(false);
  const [connectMenu, setConnectMenu] = useState<boolean>(false);

  const handleClick = (menu: navMenu) => {
    if (menu === navMenu.product) {
      setCompanyMenu(false);
      setConnectMenu(false);
      setProductMenu((prev) => !prev);
    } else if (menu === navMenu.company) {
      setProductMenu(false);
      setConnectMenu(false);
      setCompanyMenu((prev) => !prev);
    } else if (menu === navMenu.connect) {
      setProductMenu(false);
      setCompanyMenu(false);
      setConnectMenu((prev) => !prev);
    }
  };

  return (
    <motion.div
      animate={{
        scale: [0, 1.1, 1],
        borderRadius: ["2rem", "2rem", "0.25rem"],
      }}
      exit={{ scale: 0, borderRadius: "5rem" }}
      transition={{ duration: 0.3 }}
      className="fixed right-6 top-28 z-50 rounded shadow-lg bg-white font-overpass font-semibold text-lg text-dkrBlue md:hidden"
      style={{ width: "calc(100% - 3rem)" }}
    >
      <div className="m-6 grid place-items-center">
        <div
          className="flex gap-2 items-center cursor-pointer my-2"
          onClick={() => handleClick(navMenu.product)}
        >
          <div className={productMenu ? "opacity-75" : ""}>Product</div>
          <motion.img
            animate={{ rotate: productMenu ? 180 : 0 }}
            src={iconArrDark}
            alt=""
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: productMenu ? "fit-content" : 0 }}
          className="w-full bg-gray-100 overflow-hidden rounded-md"
        >
          <ul className="flex flex-col items-center gap-4 px-6 py-4 text-base">
            <li className="cursor-pointer hover:font-bold">Overview</li>
            <li className="cursor-pointer hover:font-bold">Pricing</li>
            <li className="cursor-pointer hover:font-bold">Marketplace</li>
            <li className="cursor-pointer hover:font-bold">Features</li>
            <li className="cursor-pointer hover:font-bold">Integrations</li>
          </ul>
        </motion.div>

        <div
          className="flex gap-2 items-center cursor-pointer my-2"
          onClick={() => handleClick(navMenu.company)}
        >
          <div className={companyMenu ? "opacity-75" : ""}>Company</div>
          <motion.img
            animate={{ rotate: companyMenu ? 180 : 0 }}
            src={iconArrDark}
            alt=""
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: companyMenu ? "fit-content" : 0 }}
          className="w-full bg-gray-100 overflow-hidden rounded-md"
        >
          <ul className="flex flex-col items-center gap-4 px-6 py-4 text-base">
            <li className="cursor-pointer hover:font-bold">About</li>
            <li className="cursor-pointer hover:font-bold">Team</li>
            <li className="cursor-pointer hover:font-bold">Blog</li>
            <li className="cursor-pointer hover:font-bold">Careers</li>
          </ul>
        </motion.div>

        <div
          className="flex gap-2 items-center cursor-pointer my-2"
          onClick={() => handleClick(navMenu.connect)}
        >
          <div className={connectMenu ? "opacity-75" : ""}>Connect</div>
          <motion.img
            animate={{ rotate: connectMenu ? 180 : 0 }}
            src={iconArrDark}
            alt=""
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: connectMenu ? "fit-content" : 0 }}
          className="w-full bg-gray-100 overflow-hidden rounded-md"
        >
          <ul className="flex flex-col items-center gap-4 px-6 py-4 text-base">
            <li className="cursor-pointer hover:font-bold">Contact</li>
            <li className="cursor-pointer hover:font-bold">Newsletter</li>
            <li className="cursor-pointer hover:font-bold">LinkedIn</li>
          </ul>
        </motion.div>

        <hr className="w-full my-5" />

        <button className="font-semibold py-2 w-32">Login</button>
        <button className="font-semibold py-2 w-32 bg-gradient-to-r from-introGradient-from to-introGradient-to rounded-full text-white mt-2">
          Sign Up
        </button>
      </div>
    </motion.div>
  );
}
