import { INavItem, INavMenuItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const navMenus: INavMenuItem[] = [
  {
    id: "about",
    title: "About",
    path: "/#about",
    section: "about",
  },
  {
    id: "services",
    title: "Proficiency",
    path: "/#services",
    section: "services",
  },
  {
    id: "experiences",
    title: "Experiences",
    path: "/#experiences",
    section: "experiences",
  },
  {
    id: "skills",
    title: "Skills",
    path: "/#skills",
    section: "skills",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  //   path: "/#projects",
  //   section: "projects",
  // },
  {
    id: "contact",
    title: "Contact",
    path: "/#contact",
    section: "contact",
  },
];

export default navMenus;

export const menuItems: INavItem[] = [
  // {
  //   name: "Home",
  //   link: "/#hero",
  //   icon: faHome,
  // },
  {
    name: "About-Me",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Proficiency",
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  // {
  //   name: "Projects",
  //   link: "/#projects",
  //   icon: faLaptopCode,
  // },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
];
