import { useState } from "react";
import { motion } from "framer-motion";

import { navMenu } from "../utilities/enums";

import iconArrLight from "../images/icon-arrow-light.svg";

export default function DesktopNav() {
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
    <div className="hidden md:flex flex-1 justify-between items-center text-base">
      <div className="flex gap-5">
        <div className="">
          <div
            className="flex gap-2 items-center cursor-pointer font-bold"
            onClick={() => handleClick(navMenu.product)}
          >
            <div className={productMenu ? "underline" : ""}>Product</div>
            <motion.img
              animate={{ rotate: productMenu ? 180 : 0 }}
              src={iconArrLight}
              alt=""
            />
          </div>
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: productMenu ? "fit-content" : 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 rounded shadow-lg w-40 bg-white px-6 text-dkrBlackBlue overflow-hidden"
            >
              <ul className="flex flex-col gap-2 py-8 text-15">
                <li className="cursor-pointer hover:font-bold">Overview</li>
                <li className="cursor-pointer hover:font-bold">Pricing</li>
                <li className="cursor-pointer hover:font-bold">Marketplace</li>
                <li className="cursor-pointer hover:font-bold">Features</li>
                <li className="cursor-pointer hover:font-bold">Integrations</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="">
          <div
            className="flex gap-2 items-center cursor-pointer font-bold"
            onClick={() => handleClick(navMenu.company)}
          >
            <div className={companyMenu ? "underline" : ""}>Company</div>
            <motion.img
              animate={{ rotate: companyMenu ? 180 : 0 }}
              src={iconArrLight}
              alt=""
            />
          </div>
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: companyMenu ? "fit-content" : 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 rounded shadow-lg w-40 bg-white px-6 text-dkrBlackBlue overflow-hidden"
            >
              <ul className="flex flex-col gap-2 py-8 text-15">
                <li className="cursor-pointer hover:font-bold">About</li>
                <li className="cursor-pointer hover:font-bold">Team</li>
                <li className="cursor-pointer hover:font-bold">Blog</li>
                <li className="cursor-pointer hover:font-bold">Careers</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="">
          <div
            className="flex gap-2 items-center cursor-pointer font-bold"
            onClick={() => handleClick(navMenu.connect)}
          >
            <div className={connectMenu ? "underline" : ""}>Connect</div>
            <motion.img
              animate={{ rotate: connectMenu ? 180 : 0 }}
              src={iconArrLight}
              alt=""
            />
          </div>
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: connectMenu ? "fit-content" : 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 rounded shadow-lg w-40 bg-white px-6 text-dkrBlackBlue overflow-hidden"
            >
              <ul className="flex flex-col gap-2 py-8 text-15">
                <li className="cursor-pointer hover:font-bold">Contact</li>
                <li className="cursor-pointer hover:font-bold">Newsletter</li>
                <li className="cursor-pointer hover:font-bold">LinkedIn</li>
              </ul>
            </motion.div>
          </div>
        </div>
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
