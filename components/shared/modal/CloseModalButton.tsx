import React, { FC } from 'react';

interface CloseModalButtonProps extends React.HTMLProps<HTMLDivElement> {
  customRef: any;
  handleClick: any;
  fill?: string;
}

const CloseModalButton: FC<CloseModalButtonProps> = ({
  customRef,
  handleClick,
  fill = 'white',
  ...props
}) => {
  return (
    <div
      ref={customRef}
      className={props.className}
      onClick={(e: any) => handleClick(e)}
    >
      <svg
        width="206"
        height="206"
        viewBox="0 0 206 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 group-hover:rotate-90 transition duration-300"
        style={{ pointerEvents: 'none' }}
      >
        <rect
          x="49.9668"
          y="27.7539"
          width="180"
          height="30"
          rx="15"
          transform="rotate(45 49.9668 27.7539)"
          fill={fill}
        />
        <rect
          x="28.7539"
          y="155.033"
          width="180"
          height="30"
          rx="15"
          transform="rotate(-45 28.7539 155.033)"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default CloseModalButton;
