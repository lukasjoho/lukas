import { icons, LucideProps } from 'lucide-react';

export interface LucideIconProps extends LucideProps {
  name: keyof typeof icons;
}

const LucideIcon = ({ name, color, size, className }: LucideIconProps) => {
  const LIcon = icons[name];

  return <LIcon color={color} size={size} className={className} />;
};

export default LucideIcon;
