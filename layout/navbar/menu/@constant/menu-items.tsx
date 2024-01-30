import { ReactElement } from "react";
import {
  FaHome,
  FaLayerGroup,
  FaMoneyBillWave,
  FaCode,
  FaComments,
} from "react-icons/fa";

type MenuItemsType = {
  href: string;
  label: string;
  mobileIcon: ReactElement;
};

export const menuItems: MenuItemsType[] = [
  {
    href: "/",
    label: "Home",
    mobileIcon: <FaHome style={{ fontSize: "15px" }} />,
  },
  {
    href: "/projects",
    label: "Projects",
    mobileIcon: <FaLayerGroup style={{ fontSize: "15px" }} />,
  },
  {
    href: "/experiences",
    label: "Experiences",
    mobileIcon: <FaMoneyBillWave style={{ fontSize: "15px" }} />,
  },
  {
    href: "/blog",
    label: "Blog",
    mobileIcon: <FaCode style={{ fontSize: "15px" }} />,
  },
  {
    href: "/guestbook",
    label: "Guestbook",
    mobileIcon: <FaComments style={{ fontSize: "15px" }} />,
  },
];
