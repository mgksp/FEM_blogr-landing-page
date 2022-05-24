import { navMenu } from "../utilities/enums";
import { iNavigationLinks } from "../utilities/interfaces";

export const navigationLinks: iNavigationLinks[] = [
  {
    title: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    navMenuEnum: navMenu.product,
  },
  {
    title: "Company",
    links: ["About", "Team", "Blog", "Careers"],
    navMenuEnum: navMenu.company,
  },
  {
    title: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"],
    navMenuEnum: navMenu.connect,
  },
];
