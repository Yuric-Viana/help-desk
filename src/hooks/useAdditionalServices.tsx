import { useState } from "react";
import { UpdateTicket } from "@/actions/UpdateTicket";
import { Service } from "../../generated/prisma/client";
import { toast } from "sonner";

export interface useAdditionalServicesProps {
  data: Service[];
  ticketId: number;
}

export function useAdditionalServices({
  data,
  ticketId,
}: useAdditionalServicesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedServiceId, setSelectedServiceId] = useState<string>("");

  const selectedServicePrice =
    data.find((item) => item.id.toString() === selectedServiceId)?.price || 0;

  const onSubmit = async () => {
    if (!selectedServiceId) {
      console.error("Nenhum serviço selecionado!");
      return;
    }

    if (!ticketId) {
      return;
    }

    try {
      await UpdateTicket({ ticketId: ticketId, serviceId: selectedServiceId });

      setIsOpen(false);
      setSelectedServiceId("");
      toast.success("Serviço adicionado com sucesso!");
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(
          "Não foi possível adicionar um serviço. Tente novamente mais tarde.",
        );
      }
    }
  };

  return {
    isOpen,
    setIsOpen,
    selectedServicePrice,
    setSelectedServiceId,
    onSubmit,
  };
}
