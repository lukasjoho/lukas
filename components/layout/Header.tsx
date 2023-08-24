'use client';
import { createContext, useState } from 'react';

import Link from 'next/link';
import { Icons } from '../shared/Icons';
import { SocialIcons } from '../shared/SocialIcons';
import Container from './Container';
import Menu from './Menu';

export const MenuContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-40">
      <MenuContext.Provider value={{ isOpen, setIsOpen }}>
        <Container variant="fluid">
          <div className="w-full h-14 flex items-center justify-between relative">
            <Link href="/">
              <Icons.logo
                color={isOpen ? 'white' : 'dark'}
                className="h-8 w-8"
              />
            </Link>
            <div className="flex gap-8">
              <SocialIcons />
              <Menu />
            </div>
          </div>
        </Container>
      </MenuContext.Provider>
    </div>
  );
};

export default Header;
