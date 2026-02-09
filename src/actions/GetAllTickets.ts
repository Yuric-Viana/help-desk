"use server";

import { prisma } from "@/lib/prisma";

export const GetAllTickets = async () => {
  return await prisma.ticket.findMany({
    include: {
      technician: true,
      client: true,
      ticketServices: {
        include: {
          service: true,
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });
};
