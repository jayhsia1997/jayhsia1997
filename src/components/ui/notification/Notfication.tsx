import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MdCheckCircleOutline, MdInfoOutline, MdOutlineClose, MdOutlineReport, MdOutlineWarning } from "react-icons/md";

type VerticalPosition = "top" | "bottom";
type HorizontalPosition = "left" | "center" | "right";

interface Position {
  vertical: VerticalPosition;
  horizontal: HorizontalPosition;
}

interface NotificationProps {
  variant: "success" | "info" | "warning" | "error";
  title: string;
  description?: string;
  open: boolean;
  duration?: number;
  position?: Position;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  variant,
  title,
  description,
  open,
  duration = 3000,
  position = { vertical: "top", horizontal: "center" },
  onClose,
}) => {
  const [ visible, setVisible ] = useState(open);

  useEffect(() => {
    setVisible(open);
    if (open) {
      const timer = setTimeout(() => {
        // setVisible(false);
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [ open, duration, onClose ]);

  if (!visible) return null;

  // Styling configuration for each alert type
  const variantStyles = {
    success: {
      borderColor: "border-success-500",
      iconBg: "bg-success-50 text-success-500",
      icon: <MdCheckCircleOutline className="h-5 w-5"/>,
    },
    info: {
      borderColor: "border-info-500",
      iconBg: "bg-info-50 text-info-500",
      icon: <MdInfoOutline className="h-5 w-5"/>,
    },
    warning: {
      borderColor: "border-warning-500",
      iconBg: "bg-warning-50 text-warning-500",
      icon: <MdOutlineWarning className="h-5 w-5"/>,
    },
    error: {
      borderColor: "border-error-500",
      iconBg: "bg-error-50 text-error-500",
      icon: <MdOutlineReport className="h-5 w-5"/>,
    },
  };

  const getPositionClasses = (pos: Position) => {
    const vertical = pos.vertical === "top" ? "top-5" : "bottom-5";
    const horizontal = pos.horizontal === "center" ? "left-1/2 transform -translate-x-1/2" : pos.horizontal === "left" ? "left-5" : "right-5";
    return `${vertical} ${horizontal}`;
  };

  const { borderColor, iconBg, icon } = variantStyles[variant];

  return createPortal(
    <div className={`fixed z-999999 animate-slide-in ${getPositionClasses(position)}`}>
      <div
        className={`flex items-center justify-between gap-3 w-full min-w-[280px] sm:min-w-[340px] rounded-md border-b-4 p-3 shadow-theme-sm bg-white dark:bg-primary-600 ${borderColor}`}
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${iconBg}`}>{icon}</div>

          {/* Title and Description */}
          <div>
            <h4 className="text-sm text-primary-800 sm:text-base dark:text-primary-100">{title}</h4>
            {description && <p className="mt-1 text-xs text-primary-600 sm:text-sm dark:text-primary-200">{description}</p>}
          </div>
        </div>

        <button onClick={onClose} className="text-primary-400 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-100">
          <MdOutlineClose className="h-5 w-5"/>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Notification;
