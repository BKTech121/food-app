import Image from "next/image";
import React from "react";
import Logo from "../../public/images/Logo.svg";
import HamburgerMenu from "../../public/images/Hamburgermenu.svg";
const Navbar = () => {
  return (
    <nav className="h-24 p-6 flex items-center justify-between  bg-gradient-to-b from-gradient-rose to-gradient-white">
      <div>
        <Image src={Logo} alt="logo" width="62" height="97" />
      </div>
      <div>
        <Image src={HamburgerMenu} alt="menu" width="36" height="27" />
      </div>
    </nav>
  );
};

export default Navbar;
