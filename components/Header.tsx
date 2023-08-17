'use client';
import { createContext, useState } from 'react';

import Link from 'next/link';
import Container from './Container';
import { Icons } from './Icons';
import Menu from './Menu';

export const MenuContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <Container variant="fluid">
        <div className="w-full h-16 flex items-center justify-between relative">
          <Link href="/">
            <Icons.logo color={isOpen ? 'white' : 'dark'} className="h-8 w-8" />
          </Link>
          <Menu />
        </div>
      </Container>
    </MenuContext.Provider>
  );
};

export default Header;
