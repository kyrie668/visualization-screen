import React from 'react';
import PropTypes from 'prop-types';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} className={`relative w-full ${rest.className}`}>
      {/* 内容区域 */}
      <div className="relative w-full h-full border border-[#15C2D6]/20 bg-black/80">
        {/* 左上角 */}
        <div className="absolute -top-[2px] -left-[2px]">
          <div className="w-[20px] h-[2px] bg-[#15C2D6]" />
          <div className="absolute top-0 left-0 w-[2px] h-[20px] bg-[#15C2D6]" />
        </div>

        {/* 右上角 */}
        <div className="absolute -top-[2px] -right-[2px]">
          <div className="w-[20px] h-[2px] bg-[#15C2D6]" />
          <div className="absolute top-0 right-0 w-[2px] h-[20px] bg-[#15C2D6]" />
        </div>

        {/* 左下角 */}
        <div className="absolute -bottom-[2px] -left-[2px]">
          <div className="w-[20px] h-[2px] bg-[#15C2D6]" />
          <div className="absolute bottom-0 left-0 w-[2px] h-[20px] bg-[#15C2D6]" />
        </div>

        {/* 右下角 */}
        <div className="absolute -bottom-[2px] -right-[2px]">
          <div className="w-[20px] h-[2px] bg-[#15C2D6]" />
          <div className="absolute bottom-0 right-0 w-[2px] h-[20px] bg-[#15C2D6]" />
        </div>

        {/* 这里放置内容 */}
        <div className="w-full h-full text-white">{children}</div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
