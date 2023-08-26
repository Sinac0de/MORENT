import { Link } from "react-router-dom";
import HamMenuIcon from "./Icons/HamMenuIcon";
import SearchIcon from "./Icons/SearchIcon";
import FilterIcon from "./Icons/FilterIcon";
import { useState } from "react";
const Header = ({ setIsNavCollapsed }) => {
  const handleNavCollapse = () => {
    setIsNavCollapsed(false);
  };

  return (
    <header className="bg-white flex w-full">
      <div className="flex flex-col justify-center px-7 md:flex-row md:items-center md:justify-start md:gap-12 md:w-4/6">
        {/* LOGO & SEARCH BAR */}
        <div className="flex justify-between items-center mt-5 md:mt-0">
          <Link
            to="/"
            className="font-bold text-primary-500 text-2xl md:text-[32px]"
          >
            Rentina
          </Link>
          <button onClick={handleNavCollapse} className="md:hidden">
            <HamMenuIcon />
          </button>
        </div>
        <div className="flex gap-3 my-5 relative md:flex-1 md:max-w-[492px]">
          <label
            htmlFor="search"
            className="absolute left-6 top-0 bottom-0 flex items-center z-50 opacity-80"
          >
            <SearchIcon />
          </label>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search something here"
            className="w-full relative flex items-center flex-1 gap-2 p-3 pl-14 rounded-lg border md:rounded-full"
          />

          <button className="p-3 border border-[#C3D4E9]/40 rounded-lg md:absolute md:right-4 md:border-none">
            <FilterIcon />
          </button>
        </div>
      </div>
      {/* NAV BAR & PROFILE */}
      <div className="hidden md:flex border border-blue-800 flex-1"></div>
    </header>
  );
};

export default Header;
