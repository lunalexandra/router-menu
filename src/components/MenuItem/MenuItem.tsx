import { NavLink } from "react-router-dom";
export interface IMenuItemProps {
  label: string;
  link: string;
}

const active = ({ isActive }:{ isActive: boolean }) =>
  isActive ? "menu__item menu__item-active" : "menu__item";

export const MenuItem = ({ label, link }: IMenuItemProps) => {
  return (
      <NavLink to={link} className={active}>{label.toUpperCase()}</NavLink>
  );
};