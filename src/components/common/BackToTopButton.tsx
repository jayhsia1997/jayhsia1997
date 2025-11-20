import React, { RefObject, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface BackToTopButtonProps {
  targetRef?: RefObject<HTMLElement | null>;
  showOffset?: number;
  className?: string;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ targetRef, showOffset = 200, className }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => setVisible((v) => (window.scrollY > showOffset ? true : targetRef?.current ? v : false));
    const el = targetRef?.current || null;
    const handleElScroll = () => {
      if (!el) return;
      setVisible(el.scrollTop > showOffset || window.scrollY > showOffset);
    };

    window.addEventListener("scroll", handleWindowScroll);
    if (el) el.addEventListener("scroll", handleElScroll);

    // initialize
    handleWindowScroll();
    handleElScroll();

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      if (el) el.removeEventListener("scroll", handleElScroll);
    };
  }, [targetRef, showOffset]);

  const handleBackToTop = () => {
    if (targetRef?.current) {
      targetRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={handleBackToTop}
      className={`fixed bottom-6 right-6 z-99 h-12 w-12 rounded-full bg-primary-500 text-white shadow-lg hover:bg-tertiary-500 dark:bg-primary-500 dark:hover:bg-tertiary-400 flex items-center justify-center ${
        className || ""
      }`}
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTopButton;
