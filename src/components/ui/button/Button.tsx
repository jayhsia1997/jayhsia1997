import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
  dropdownToggle?: boolean; // Dropdown toggle state
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
  dropdownToggle = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Variant Classes
  const variantClasses = {
    primary: "bg-primary-600 text-white shadow-theme-xs hover:bg-primary-700 disabled:bg-primary-400",
    outline:
      "bg-white text-primary-700 ring-1 ring-inset ring-primary-300 hover:bg-primary-50 dark:bg-primary-800 dark:text-primary-400 dark:ring-primary-700 dark:hover:bg-white/[0.03] dark:hover:text-primary-300",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition 
        ${className} ${sizeClasses[size]} ${variantClasses[variant]} 
        ${disabled ? "cursor-not-allowed opacity-50" : ""} ${dropdownToggle ? "dropdown-toggle" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
