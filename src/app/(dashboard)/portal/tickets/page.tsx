import { PageContainer } from "@/components/PageContainer";
import { TicketsTable, TicketRow } from "../../../../components/TicketsColumns";
import { GetAllTickets } from "@/actions/GetAllTickets";

export default async function ClientPage() {
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
    <div>
      <PageContainer title="Meus chamados">
        <TicketsTable data={formattedTickets} />
      </PageContainer>
    </div>
  );
}
