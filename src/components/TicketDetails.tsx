import { GetTicketUnique } from "@/actions/GetTicketUnique";
import { BackBottom } from "@/components/BackBottom";
import { TicketDetailsAside } from "@/components/TicketDetailsAside";
import { TicketInfoCard } from "@/components/TicketInfoCard";
import { TicketStatus } from "@/generated/client/enums";
import { authOptions } from "@/lib/auth";
import { statusMap } from "@/utils/status-ticket";
import { getServerSession } from "next-auth";
import Image from "next/image";

interface TicketDetailsProps {
  params: Promise<{ id: string }>;
}

export async function TicketDetails({ params }: TicketDetailsProps) {
  const { id } = await params;

  const ticketId = Number(id);

  const session = await getServerSession(authOptions);

  if (isNaN(ticketId)) {
    return <div>ID inválido</div>;
  }

  const ticket = await GetTicketUnique({ ticketId });

  if (!ticket) return;

  const currentStatusKey = ticket.status as TicketStatus;

  const availableStatuses = (Object.keys(statusMap) as TicketStatus[]).filter(
    (status) => status !== currentStatusKey,
  );

  return (
    <div className="mx-6 h-full space-y-6 pb-6 min-[1024px]:px-16 min-[1400px]:px-46 md:pt-13">
      <div className="grid justify-between gap-3 md:flex md:items-end">
        <div className="mt-7 md:mt-0">
          <BackBottom className="has-[>svg]:px-0" />
          <h1 className="text-brand-dark text-xl font-bold">
            Chamado detalhado
          </h1>
        </div>
        {session?.user.role !== "client" && (
          <div className="flex gap-2">
            {availableStatuses.map((statusKey) => {
              const config = statusMap[statusKey];

              return (
                <div
                  key={statusKey}
                  className="bg-app-gray-500 flex w-max items-center justify-center gap-2 rounded-lg px-5 py-2.5"
                >
                  <Image
                    src={config.iconTicket}
                    alt={config.title}
                    width={18}
                    height={18}
                  />
                  <p className="text-sm font-bold">{config.title}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="space-y-4 lg:grid lg:grid-cols-5 lg:gap-6">
        <TicketInfoCard data={ticket} />
        <TicketDetailsAside ticketId={ticketId} />
      </div>
    </div>
  );
}
