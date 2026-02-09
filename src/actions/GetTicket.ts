"use server";

import { prisma } from "@/lib/prisma";

interface GetTicketsParams {
  ticketId: number;
}

export const GetTicket = async ({ ticketId }: GetTicketsParams) => {
  return await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    include: {
      ticketServices: {
        include: {
          service: true,
        },
      },
      client: true,
      technician: true,
    },
  });
};
