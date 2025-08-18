import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-bg1 max-w overflow-hidden rounded-sm shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
