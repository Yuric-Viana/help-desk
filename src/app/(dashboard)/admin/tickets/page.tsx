import { columns, TicketRow } from "./columns";
import { DataTable } from "../../../../components/data-table";
import { GetAllTickets } from "@/actions/GetAllTickets";

export default async function TicketsPage() {
  const tickets = await GetAllTickets();

  const formattedTickets: TicketRow[] = tickets.map((ticket) => {
    const totalAmount = ticket.ticketServices.reduce((acc, item) => {
      return acc + (item.priceSnapshot || 0);
    }, 0);

    const servicesNames = ticket.ticketServices
      .map((item) => item.service.title)
      .join(", ");

    return {
      ...ticket,
      updatedAt: ticket.updatedAt?.toISOString(),
      openedAt: ticket.openedAt.toISOString(),
      closedAt: ticket.closedAt?.toISOString() || null,

      amount: totalAmount,
      serviceName: servicesNames,

      client: {
        ...ticket.client,
        createdAt: ticket.client.createdAt.toISOString(),
        updatedAt: ticket.client.updatedAt?.toISOString() || null,
        emailVerified: ticket.client.emailVerified?.toISOString() || null,
      },
      technician: {
        ...ticket.technician,
        createdAt: ticket.technician.createdAt.toISOString(),
        updatedAt: ticket.technician.updatedAt?.toISOString() || null,
        emailVerified: ticket.technician.emailVerified?.toISOString() || null,
      },
    };
  });

  return (
    <div className="container mt-14 w-full space-y-6 px-6 md:px-12">
      <h1 className="text-brand-dark text-xl font-bold">Chamados</h1>

      <DataTable columns={columns} data={formattedTickets} />
    </div>
  );
}
