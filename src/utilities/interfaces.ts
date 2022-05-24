import { navMenu } from "./enums";

export interface iNavigationLinks {
  title: string;
  links: string[];
  navMenuEnum: navMenu;
}

export interface iNavMenuProps {
  title: String;
  links: String[];
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
  navMenuState?: Boolean;
}
