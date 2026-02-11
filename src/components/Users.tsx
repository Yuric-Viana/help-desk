"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { useIsRoute } from "@/hooks/useIsRoute";

interface UsersProps {
  children: ReactNode;
  title: string;
}

export function Users({ title, children }: UsersProps) {
  const isAdmin = useIsRoute({ user: "technicians" });

  return (
    <div className="container mt-14 w-full space-y-6 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <h1 className="text-brand-dark text-xl font-bold">{title}</h1>
        {isAdmin && (
          <Button>
            <PlusIcon />
            Novo
          </Button>
        )}
      </div>

      {children}
    </div>
  );
}
