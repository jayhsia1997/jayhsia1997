import React, { ReactNode } from "react";

interface CardTitleProps {
  children: ReactNode;
}

interface CardDescriptionProps {
  children: ReactNode;
}

interface CardIconProps {
  icon: ReactNode;
}

interface CardProps {
  icon?: ReactNode;
  title?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * CardIcon Component
 * @param icon
 * @constructor
 */
const CardIcon: React.FC<CardIconProps> = ({ icon }) => {
  return <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-primary-100 dark:bg-primary-700">{icon}</div>;
};

/**
 * CardTitle Component
 * @param children
 * @constructor
 */
const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h4 className="mb-2 font-medium text-gray-800 text-theme-xl dark:text-white/90">{children}</h4>;
};

/**
 * CardDescription Component
 * @param children
 * @constructor
 */
const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>;
};

/**
 * Card Component
 * @param icon
 * @param title
 * @param className
 * @param children
 * @constructor
 */
const Card: React.FC<CardProps> = ({ icon, title, className, children }) => {
  return (
    <div className={`rounded-xl border border-primary-300 bg-primary-50 p-5 dark:border-primary-700 dark:bg-primary-800 sm:p-6 ${className || ""}`}>
      <div>
        {icon && <CardIcon icon={icon} />}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{children}</CardDescription>
      </div>
    </div>
  );
};

export default Card;
