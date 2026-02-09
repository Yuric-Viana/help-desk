"use client";

import { MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";

import { NavLinks } from "./NavLinks";
import { ProfileOptions } from "./ProfileOptions";
import { AppHeader } from "./AppHeader";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { useRef } from "react";
interface MobileHeaderProps {
  user: {
    name: string;
  };
}

export function MobileHeader({ user }: MobileHeaderProps) {
  const name = user.name.split(" ");
  const initials = name.map((letter) => letter.charAt(0).toUpperCase());

  const menuRef = useRef<HTMLDivElement | null>(null);

  const data = useToggleMenu(menuRef);

  return (
    <div className="relative z-50 lg:hidden">
      <div className="flex justify-between p-6 lg:hidden">
        <div className="flex items-center gap-4">
          <div>
            <Button size="icon-lg" onClick={data.openMenu}>
              {data.clickMenu ? <X /> : <MenuIcon />}
            </Button>
          </div>
          <AppHeader />
        </div>
        <Button
          type="button"
          variant="ghost"
          className="bg-brand-dark hover:bg-brand-base flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          onClick={data.openProfile}
        >
          <p className="text-app-gray-600 text-sm uppercase">{initials}</p>
        </Button>
      </div>

      {data.clickMenu && (
        <div
          ref={menuRef}
          className="bg-app-gray-100 mx-3 mt-6 grid h-max gap-1 rounded-2xl px-5 py-4"
        >
          <NavLinks title="Menu" onClose={() => data.closeMenu()} />
        </div>
      )}
      {data.clickProfile && (
        <div ref={menuRef} className="mt-6">
          <ProfileOptions onClose={() => data.closeProfile} />
        </div>
      )}
    </div>
  );
}
