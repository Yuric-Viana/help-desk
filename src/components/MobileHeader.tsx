"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

import Image from "next/image";
import { useState } from "react";
import { NavLinks } from "./NavLinks";

interface MobileHeaderProps {
  user?: {
    role: string;
    name: string;
  };
}

export function MobileHeader() {
  const [click, setClick] = useState(false);

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
                setClick(click === false ? true : false);
              }}
            >
              <MenuIcon />
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/Logo_IconLight.svg"
              alt="Logo help desk"
              width={44}
              height={44}
            />
            <div>
              <h2 className="text-[20px] font-bold text-gray-600">HelpDesk</h2>
              <p className="text-brand-light text-[10px] font-bold uppercase">
                Admin
              </p>
            </div>
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          className="bg-brand-dark hover:bg-brand-base flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
        >
          <p className="text-sm text-gray-600 uppercase">{initials}</p>
        </Button>
      </div>

      {click && <NavLinks />}
    </>
  );
}
