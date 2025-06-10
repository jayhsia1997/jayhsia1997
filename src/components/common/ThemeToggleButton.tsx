import { useTheme } from "../../context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";


export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center transition-colors rounded-full h-11 w-11 border text-primary-500 bg-white border-primary-200 hover:text-primary-900 hover:bg-primary-100 dark:text-primary-400 dark:bg-primary-900 dark:border-primary-800 dark:hover:bg-primary-600 dark:hover:text-white"
    >
      <MdOutlineWbSunny className="hidden dark:block h-5 w-5"/>
      <MdOutlineDarkMode className="dark:hidden h-5 w-5"/>
    </button>
  );
};
