"use client";
import React, { createContext, useState } from "react";

import Menu from "./Menu";
import Container from "./Container";
import { Icons } from "./Icons";

export const MenuContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <Container variant="large">
        <div className="w-full h-16 flex items-center justify-between relative">
          <Icons.logo color={isOpen ? "white" : "dark"} className="h-8 w-8" />
          <Menu />
        </div>
      </Container>
    </MenuContext.Provider>
  );
};

export default Header;
