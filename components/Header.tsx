'use client';
import { createContext, useState } from 'react';

import Link from 'next/link';
import Container from './Container';
import { Icons } from './Icons';
import Menu from './Menu';
import { SocialIcons } from './general/SocialIcons';

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
          <div className="flex gap-8">
            <SocialIcons />
            <Menu />
          </div>
        </div>
      </Container>
    </MenuContext.Provider>
  );
};

export default Header;
