import { TicketStatus } from "@/generated/client/enums";

type StatusConfig = {
  icon: string;
  title: string;
  colorText: string;
  bg: string;
};

export const statusMap: Record<TicketStatus, StatusConfig> = {
  [TicketStatus.open]: {
    icon: "/icons/circle-help.svg",
    title: "Aberto",
    colorText: "text-feedback-open",
    bg: "bg-[#CC3D6A20]",
  },
  [TicketStatus.inAttendance]: {
    icon: "/icons/clock-2.svg",
    title: "Em atendimento",
    bg: "bg-[#355EC520]",
    colorText: "text-feedback-progress",
  },
  [TicketStatus.closed]: {
    icon: "/icons/circle-check-big.svg",
    title: "Encerrado",
    bg: "bg-[#508B2620]",
    colorText: "text-feedback-done",
  },
};
