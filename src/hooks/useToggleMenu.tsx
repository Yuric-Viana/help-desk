"use client";

import { RefObject, useEffect, useState } from "react";

export function useToggleMenu(ref?: RefObject<HTMLElement | null>) {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);

  function openMenu() {
    setClickMenu(clickMenu === false ? true : false);
    setClickProfile(false);
  }

  function openProfile() {
    setClickProfile(clickProfile === false ? true : false);
    setClickMenu(false);
  }

  function closeMenu() {
    setClickMenu(false);
  }

  function closeProfile() {
    setClickProfile(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref?.current || ref.current?.contains(event.target as Node)) {
        return;
      }
      setClickMenu(false);
      setClickProfile(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return {
    clickMenu,
    clickProfile,
    openMenu,
    openProfile,
    closeMenu,
    closeProfile,
  };
}
