import { useMutationObserver } from "../../app/hooks/useMutationObserver";
import { Props as DarkModeSwitchProps } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  classListHasDarkMode,
  getIsDarkMode,
  toggleTheme,
} from "../../app/utils";

const CloudSVG = () => {
  return <img src="/images/cloud.svg" className="w-[35px] h-[35px]" />;
};

//Prevent SSR of DarkModeSwitch
const DarkModeSwitch: React.ComponentType<DarkModeSwitchProps> = dynamic(
  () => import("react-toggle-dark-mode").then((mod) => mod.DarkModeSwitch),
  {
    loading: () => <CloudSVG />,
    ssr: false,
  },
);

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(getIsDarkMode());
  }, []);

  const onMutationObserved = (currentClassList) => {
    setIsDarkMode(classListHasDarkMode(currentClassList));
  };

  useMutationObserver(onMutationObserved);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size={35}
      sunColor="#ffc800"
      moonColor="#ffc800"
    />
  );
}
