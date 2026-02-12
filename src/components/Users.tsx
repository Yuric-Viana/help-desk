"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { useIsRoute } from "@/hooks/useIsRoute";
import Link from "next/link";

interface UsersProps {
  children: ReactNode;
  title: string;
  id?: string;
}

export function Users({ title, children }: UsersProps) {
  const isAdmin = useIsRoute({ user: "technicians" });

  return (
    <div className="container mt-14 w-full space-y-6 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <h1 className="text-brand-dark text-xl font-bold">{title}</h1>
        {isAdmin && (
          <Link href="/admin/users/technicians/technician-profile">
            <Button>
              <PlusIcon />
              <p className="hidden md:block">Novo</p>
            </Button>
          </Link>
        )}
      </div>

      {children}
    </div>
  );
}
