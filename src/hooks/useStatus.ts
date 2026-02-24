import { UpdateStatusTicket } from "@/actions/UpdateStatusTicket";
import { toast } from "sonner";

interface useStatusProps {
  ticketId: number;
}

export function useStatus() {
  const onSubmit = async ({ ticketId }: useStatusProps) => {
    try {
      await UpdateStatusTicket({ ticketId });

      toast.success("Status atualizado com sucesso!");
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(
          "Não foi possível atualizar o status. Tente novamente mais tarde.",
        );
      }
    }
  };

  return {
    onSubmit,
  };
}
