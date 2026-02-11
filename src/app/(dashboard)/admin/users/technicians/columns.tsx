"use client";

import { InitialsAvatar } from "@/components/InitialsAvatar";
import { TimeSlotsTechnicial } from "@/components/TimeSlotsTechnicial";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/classMerge";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { usePathname } from "next/navigation";

export type Techinicians = {
  id: string;
  name: string;
  email: string;
  availabilities: {
    schedules: string[];
  }[];
};

const AvailabilitiesCell = () => {
  const pathname = usePathname();

  const rotesToHide = ["/admin/users/client"];

  const isClient = rotesToHide.includes(pathname);

  return isClient;
};

export const columns: ColumnDef<Techinicians>[] = [
  {
    accessorKey: "name",
    header: () => <p className="text-app-gray-400 text-sm">Nome</p>,
    cell: ({ row }) => {
      const user = row.original.name;

      return (
        <div className="flex items-center gap-3">
          <div className="bg-brand-dark flex h-5 w-5 items-center justify-center rounded-full">
            {<InitialsAvatar className="text-[8.75px]" name={user} />}{" "}
          </div>
          <p>{user}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => {
      const isClient = AvailabilitiesCell();

      return (
        <p className={cn(["text-app-gray-400 hidden text-sm md:table-cell"])}>
          E-mail
        </p>
      );
    },
    cell: ({ row }) => {
      const email = row.original.email;

      return <div className="hidden md:table-cell">{email}</div>;
    },
  },
  {
    accessorKey: "availabilities",
    header: () => {
      const isClient = AvailabilitiesCell();

      return !isClient ? (
        <p className="text-app-gray-400 text-sm">Disponibilidade</p>
      ) : null;
    },
    cell: ({ row }) => {
      const schedules = row.original.availabilities[0];

      return schedules && <TimeSlotsTechnicial availabilities={schedules} />;
    },
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-2">
          <Button size="icon-sm" variant="ghost" className="bg-app-gray-500">
            <Image
              src="/icons/trash.svg"
              alt="Ícone de lixeira"
              width={14}
              height={14}
            />
          </Button>
          <Button size="icon-sm" variant="ghost" className="bg-app-gray-500">
            <Image
              src="/icons/pen-line.svg"
              alt="Ícone de lápis"
              width={14}
              height={14}
            />
          </Button>
        </div>
      );
    },
  },
];
