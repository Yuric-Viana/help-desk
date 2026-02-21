import { useState } from "react";
import { Service } from "../../generated/prisma/client";
import { UpdateTicket } from "@/actions/UpdateTicket";

export interface PopupAdditionalServicesProps {
  data: Service[];
  ticketId: number;
}

export function useAdditionalServices({
  data,
  ticketId,
}: PopupAdditionalServicesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedServiceId, setSelectedServiceId] = useState<string>("");

  const selectedServicePrice =
    data.find((service) => service.id.toString() === selectedServiceId)
      ?.price || 0;

  const onSubmit = async () => {
    if (!selectedServiceId) {
      console.error("Nenhum serviço selecionado!");
      return;
    }

    if (!ticketId) {
      return;
    }

    await UpdateTicket({ ticketId: ticketId, serviceId: selectedServiceId });

    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    selectedServicePrice,
    setSelectedServiceId,
    onSubmit,
  };
}
