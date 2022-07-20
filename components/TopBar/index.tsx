import Image from "next/image";
import React from "react";

type ITopbar = {
  isOpen: boolean;
  setIsOpen: any;
};

const TopBar = ({ isOpen, setIsOpen }: ITopbar) => {
  return (
    <div className="px-2 bg-white py-0.5 h-18 flex">
      <div className="justify-start w-1/2 p-3 md:flex left gap-x-3">
        <div className="hidden md:block">
          <Image src="/assets/person.png" alt="avatar" width="40" height="40" />
        </div>
        <span className="hidden p-2 font-bold md:block">Lütfullah ÇELENK</span>
        <span
          className="block p-2 font-bold md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/assets/hamburger-menu.ico"
            alt="avatar"
            width="40"
            height="40"
          />
        </span>
      </div>

      <div className="flex items-center justify-end w-full md:w-1/2 right">
        <div className="flex p-1 mx-2 my-3 bg-gray-100 rounded-full">
          <Image src="/assets/search.png" alt="avatar" width="28" height="28" />
        </div>
        <div className="flex p-1 mx-2 my-3 bg-gray-100 rounded-full">
          <Image
            src="/assets/message.png"
            alt="avatar"
            width="28"
            height="28"
          />
        </div>
        <div className="flex p-1 mx-2 my-3 bg-gray-100 rounded-full">
          <Image
            src="/assets/warning.png"
            alt="avatar"
            width="28"
            height="28"
          />
        </div>
        <a className="px-2" href="">
          Logout
        </a>
      </div>
    </div>
  );
};

export default TopBar;
