"use server";

import { prisma } from "@/lib/prisma";
import { TicketStatus } from "../../generated/prisma/enums";
import { revalidatePath } from "next/cache";

interface UpdateStatusTicket {
  ticketId: number;
}

export const UpdateStatusTicket = async ({ ticketId }: UpdateStatusTicket) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    select: {
      status: true,
    },
  });

  if (!ticket) throw new Error("Chamado não encontrado");

  await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      status:
        ticket.status === TicketStatus.open ||
        ticket.status === TicketStatus.inAttendance
          ? TicketStatus.closed
          : TicketStatus.open,
    },
  });

  revalidatePath(`/technician/tickets/${ticketId}`);
};
