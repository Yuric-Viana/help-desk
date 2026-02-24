"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface UpdateTicketProps {
  ticketId: number;
  serviceId: string;
}

export const UpdateTicket = async ({
  ticketId,
  serviceId,
}: UpdateTicketProps) => {
  if (!serviceId) {
    throw new Error("Nenhum serviço selecionado");
  }

  const services = await prisma.service.findMany({
    where: {
      id: serviceId,
    },
    select: {
      id: true,
      price: true,
    },
  });

  if (!services) {
    throw new Error("Serviço não encontrado");
  }

  const verifyTicket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    select: {
      ticketServices: {
        select: {
          serviceId: true,
        },
      },
    },
  });

  const hasServiceIncludeOnTicket = verifyTicket?.ticketServices.some(
    (ticket) => ticket.serviceId === serviceId,
  );

  if (hasServiceIncludeOnTicket) {
    throw new Error("O serviço já está incluído no chamado.");
  }

  const ticketServicesData = services.map((service) => ({
    priceSnapshot: service.price,
    serviceId: service.id,
  }));

  await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      ticketServices: {
        createMany: {
          data: ticketServicesData,
        },
      },
      updatedAt: new Date(),
    },
  });

  revalidatePath(`/technician/tickets/${ticketId}`);
};
