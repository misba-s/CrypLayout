import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

import brainwaveSymbol from "../assets/brainwave-symbol.svg"; // Correct path
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
    openNavigation ? enablePageScroll() : disablePageScroll();
  };

  const handleClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo and Brand Name */}
        <a className="flex items-center space-x-3 w-auto xl:mr-8" href="#hero">
          <img
            src={brainwaveSymbol}
            width={40}
            height={40}
            alt="CryptoAccess Logo"
          />
          <span className="text-white text-2xl font-bold">CryptoAccess</span>
        </a>

        {/* Navigation Menu */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-code text-3xl uppercase text-gray-200 transition-colors hover:text-gray-100 px-6 py-6 md:py-8 
                  lg:text-lg lg:font-semibold lg:leading-6 ${item.onlyMobile ? "lg:hidden" : ""} 
                  ${item.url === pathname.hash ? "lg:text-gray-200" : "lg:text-gray-200/50"} 
                  lg:hover:text-gray-100 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Buttons */}
        <a
  href="https://cryp-video.vercel.app/"
  className="block font-code text-3xl uppercase text-gray-300 transition-colors hover:text-gray-100 px-6 py-6 md:py-8 
             lg:text-lg lg:font-semibold lg:leading-6 lg:text-gray-300/50 lg:hover:text-gray-300 xl:px-12"
>
  Insights & Tutorial
</a>

        <Button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;