"use client";

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { InitialsAvatar } from "./InitialsAvatar";

interface AppFooterProps {
  onClick?: () => void;
}

export function AppFooter({ onClick }: AppFooterProps) {
  const { data } = useSession();

  if (!data?.user.name) return;

  return (
    <div className="flex gap-3 px-4 py-5">
      <Button
        type="button"
        variant="ghost"
        onClick={onClick}
        className="bg-brand-dark hover:bg-brand-base flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
      >
        {<InitialsAvatar name={data.user.name} />}
      </Button>

      <div>
        <h2 className="text-app-gray-600 text-sm">{data?.user.name}</h2>
        <p className="text-app-gray-400 text-xs">{data?.user.email}</p>
      </div>
    </div>
  );
}
