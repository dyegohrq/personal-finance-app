import { SidebarMenuMobile, type SidebarMenuProps } from "../SidebarMenuMobile";
import { useLocation } from "react-router";
import IconBudgets from "/assets/images/icon-nav-budgets.svg";
import IconOverview from "/assets/images/icon-nav-overview.svg";
import IconPots from "/assets/images/icon-nav-pots.svg";
import IconTransactions from "/assets/images/icon-nav-transactions.svg";
import IconRecurring from "/assets/images/icon-nav-recurring-bills.svg";
import IconMenu from "../../../public/assets/images/icon-minimize-menu.svg";
import { useState } from "react";
import { SidebarMenuDescktop } from "../SidebarMenuDescktop";
import LogoImgSmall from "/assets/images/logo-small.svg";
import LogoImgLarge from "/assets/images/logo-large.svg";

export function Sidebar() {
  const pathname = useLocation();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const menu: SidebarMenuProps[] = [
    {
      icon: IconOverview,
      label: "Overview",
      url: "/",
    },
    {
      icon: IconTransactions,
      label: "Transactions",
      url: "/transactions",
    },
    {
      icon: IconBudgets,
      label: "Budgets",
      url: "/budgets",
    },
    {
      icon: IconPots,
      label: "Pots",
      url: "/pots",
    },
    {
      icon: IconRecurring,
      label: "Recurring Bills",
      url: "/recurring",
    },
  ];

  function toggleMenu() {
    setIsActiveMenu((prev) => !prev);
  }

  return (
    <div>
      <nav className=" bg-grey-900 w-full h-[74px]  flex items-center rounded-t-lg fixed bottom-0 lg:hidden ">
        <ul className=" w-full h-full flex flex-row items-center justify-between px-[16px] pt-[8px]">
          {menu.map((item, index) => (
            <SidebarMenuMobile
              key={index}
              icon={item.icon}
              label={item.label}
              url={item.url}
              isActive={pathname.pathname === item.url}
            />
          ))}
        </ul>
      </nav>
      <aside
        className={` hidden lg:flex flex-col justify-between ${
          isActiveMenu ? "items-start" : "items-center"
        } gap-[24px] pt-[24px] ${
          isActiveMenu ? "pr-[24px]" : ""
        } transition-all duration-300 bg-grey-900 ${
          isActiveMenu ? "w-60" : "w-20"
        } h-screen rounded-r-lg `}
      >
        <div className={` h-[10%] ${ isActiveMenu ? 'pl-[32px]' : '' } `}>
          {isActiveMenu ? (
            <img src={LogoImgLarge} alt="Overview" />
          ) : (
            <img src={LogoImgSmall} alt="Overview" />
          )}
        </div>
        <ul className={` w-full h-auto flex flex-col gap-[4px] `}>
          {menu.map((item, index) => (
            <SidebarMenuDescktop
              key={index}
              icon={item.icon}
              label={item.label}
              url={item.url}
              isActive={pathname.pathname === item.url}
              isActiveMenu={isActiveMenu}
            />
          ))}
        </ul>
        <button onClick={toggleMenu} className="h-full">
          {isActiveMenu ? (
            <div>
              <img src={IconMenu} alt="" />
              <span>Minimize Menu</span>
            </div>
          ) : (
            <img src={IconMenu} alt="" />
          )}
        </button>
      </aside>
    </div>
  );
}
