"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { ProfileOptions } from "./ProfileOptions";
import { AppHeader } from "./AppHeader";

interface MobileHeaderProps {
  user?: {
    role: string;
    name: string;
  };
}

export function MobileHeader({ user }: MobileHeaderProps) {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);

  const name = "Yuri Viana";
  const work = name.split(" ");
  const initials = work.map((letter) => letter.charAt(0).toUpperCase());

  return (
    <>
      <div className="flex justify-between p-6 lg:hidden">
        <div className="flex items-center gap-4">
          <div>
            <Button
              size="icon-lg"
              onClick={() => {
                setClickMenu(clickMenu === false ? true : false);
                setClickProfile(false);
              }}
            >
              <MenuIcon />
            </Button>
          </div>
          <AppHeader />
        </div>
        <Button
          type="button"
          variant="ghost"
          className="bg-brand-dark hover:bg-brand-base flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          onClick={() => {
            setClickProfile(clickProfile === false ? true : false);
            setClickMenu(false);
          }}
        >
          <p className="text-app-gray-600 text-sm uppercase">{initials}</p>
        </Button>
      </div>

      {clickMenu && (
        <div className="bg-app-gray-100 mx-3 grid gap-1 rounded-2xl px-5 py-4">
          <NavLinks title="Menu" onClose={() => setClickMenu(false)} />
        </div>
      )}
      {clickProfile && <ProfileOptions onClose={() => setClickProfile} />}
    </>
  );
}
