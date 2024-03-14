import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ToogleTheme = () => {
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    systemPreference && pageClasses.add("dark");
  });

  const toogle = () => {
    pageClasses.toggle("dark");
  };

  return (
    <div className="hidden sm:block">
      <MoonIcon
        onClick={toogle}
        className="cursor-pointer block h-8 text-gray-100 dark:hidden"
      />
      <SunIcon
        onClick={toogle}
        className="cursor-pointer hidden h-8 text-gray-100 dark:block"
      />
    </div>
  );
};

export default ToogleTheme;
