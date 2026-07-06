export function toggleTheme() {
  const isDarkMode = getIsDarkMode();

  if (isDarkMode) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

export function getIsDarkMode() {
  return classListHasDarkMode(document.documentElement.classList);
}

export function classListHasDarkMode(classList: DOMTokenList) {
  let isDarkMode = false;

  for (const _class of classList) {
    console.log("lookin at _class", _class);
    if (_class === "dark") {
      isDarkMode = true;
    }
  }

  return isDarkMode;
}
