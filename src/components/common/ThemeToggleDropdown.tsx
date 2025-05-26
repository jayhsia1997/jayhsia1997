import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Dropdown, DropdownItem } from "../ui/dropdown";
import Button from "../ui/button/Button.tsx";

export const ThemeToggleDropdown: React.FC = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { setTheme } = useTheme();
  const { t } = useTranslation();

  const toggleDropdown = () => {
    console.log("toggleDropdown", isOpen);
    setIsOpen(!isOpen);
  }

  const handleThemeChange = (newTheme: "light" | "dark" | "auto") => {
    console.log("handleThemeChange", newTheme);
    setTheme(newTheme);
    setIsOpen(false);
  };

  const handleClose = () => {
    console.log("close");
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block">
      <Button
        variant={"outline"}
        onClick={toggleDropdown}
        size={"sm"}
        endIcon={(
          <svg
            className={`duration-200 ease-in-out stroke-current ${
              isOpen ? "rotate-180" : ""
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.79199 7.396L10.0003 12.6043L15.2087 7.396"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        dropdownToggle={true}
      >
        {t("settings.theme.title")}
      </Button>
      <Dropdown
        isOpen={isOpen}
        onClose={handleClose}
        className="absolute left-0 top-full z-40 mt-2 w-full min-w-[260px] rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-[#1E2635]"
      >
        <ul className="flex flex-col gap-1">
          <li>
            <DropdownItem
              onClick={() => handleThemeChange("light")}
              className="flex rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-100 dark:text-gray-300
              dark:hover:bg-white/5"
            >
          <span className="text-sm text-gray-700 dark:text-gray-200">
            {t("settings.theme.light")}
          </span>
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onClick={() => handleThemeChange("dark")}
              className="flex rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-100 dark:text-gray-300
              dark:hover:bg-white/5"
            >
          <span className="text-sm text-gray-700 dark:text-gray-200">
            {t("settings.theme.dark")}
          </span>
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onClick={() => handleThemeChange("auto")}
              className="flex rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-100 dark:text-gray-300
              dark:hover:bg-white/5"
            >
          <span className="text-sm text-gray-700 dark:text-gray-200">
            {t("settings.theme.auto")}
          </span>
            </DropdownItem>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
};
