import { menuListByRole } from "@/lib/utils/menuListByRole";
import { Button } from "./ui/button";
import Image from "next/image";
import { act, useState } from "react";
import { cn } from "@/lib/classMerge";

export function NavLinks() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  return (
    <div className="mx-3 grid gap-1 rounded-2xl bg-gray-100 px-5 py-4">
      <h3 className="mb-3 text-[10px] font-bold text-gray-400 uppercase">
        Menu
      </h3>
      {menuListByRole["admin"].map((user) => (
        <Button
          className={cn([
            "flex items-center justify-start gap-3 p-3 text-start text-sm",
            activeLabel === user.label ? "text-gray-600" : "text-gray-400",
          ])}
          variant={activeLabel === user.label ? "secondary" : "ghost"}
          key={user.label}
          onClick={() => {
            setActiveLabel(user.label);
          }}
        >
          <Image
            width={20}
            height={20}
            src={activeLabel === user.label ? user.iconHover : user.icon}
            alt={user.label}
          />
          {user.label}
        </Button>
      ))}
    </div>
  );
}
