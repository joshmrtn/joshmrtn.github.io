'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

// Prevent hydration errors during dev mode by ensuring component is
// mounted to UI before checking 'theme'
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const iconClassname =
    'h-5 w-5 active:translate-y-0.1 active:scale-95 hover:scale-105 transition-all duration-200 ease-in-out';
  const buttonClassName = 'h-5 w-5';

  // Define the icons - system, dark, light
  const systemIcon = (
    <svg
      className={iconClassname}
      data-slot="icon"
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const darkIcon = (
    <svg
      className={`${iconClassname} hover:rotate-12 active:rotate-10`}
      data-slot="icon"
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      className={`${iconClassname} hover:rotate-12 active:rotate-10`}
      data-slot="icon"
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (!mounted) {
    return (
      <button className={buttonClassName} type="button">
        {systemIcon}
      </button>
    );
  }

  /** Return the icon for the current theme */
  const iconForTheme = () => {
    switch (theme) {
      case 'system':
        return systemIcon;
      case 'dark':
        return darkIcon;
      case 'light':
        return lightIcon;

      default:
        return systemIcon;
    }
  };

  /** Returns the accessible text for the theme.
   * Must match the actual behavior of handleThemeSwitch:
   * system -> dark -> light -> system
   */
  const accessibleTextForTheme = () => {
    let text = '';
    switch (theme) {
      case 'system':
        text = 'Switch to dark mode';
        break;
      case 'dark':
        text = 'Switch to light mode';
        break;
      case 'light':
        text = 'Switch to system theme';
        break;
    }
    return <span className="sr-only">{text}</span>;
  };

  /** Handle the click event for the theme switch
   * Must match the accessibleTextForTheme labels:
   * system -> dark -> light -> system
   */
  const handleThemeSwitch = () => {
    switch (theme) {
      case 'system':
        setTheme('dark');
        return;
      case 'dark':
        setTheme('light');
        return;
      case 'light':
        setTheme('system');
        return;
    }
  };

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={handleThemeSwitch}
    >
      {iconForTheme()}
      {accessibleTextForTheme()}
    </button>
  );
}
