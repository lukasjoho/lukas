import { FC } from 'react';
import { Icons } from './Icons';

const Footer = () => {
  return (
    <div className="w-full border-t border-muted/10 flex justify-center py-4">
      <div className="flex gap-4">
        <FooterIcon type="mail" href="mailto:mail@lukashoppe.com" />
        <FooterIcon type="twitter" href="https://lukashoppe.com" />
        <FooterIcon type="github" href="https://lukashoppe.com" />
        <FooterIcon type="youtube" href="https://lukashoppe.com" />
        <FooterIcon type="linkedin" href="https://lukashoppe.com" />
      </div>
    </div>
  );
};

export default Footer;

interface FooterIconProps {
  type: 'youtube' | 'github' | 'twitter' | 'mail' | 'linkedin';
  href: string;
}

const FooterIcon: FC<FooterIconProps> = ({ type, href }) => {
  const IconComponent = Icons[type] as React.ComponentType<{
    className?: string;
  }>;
  if (!IconComponent) {
    return null; // Return null or an error message for unsupported icon types
  }
  return (
    <a href={href} target="_blank">
      <IconComponent className="w-8 h-8 fill-muted transition duration-200 hover:fill-dark" />
    </a>
  );
};
