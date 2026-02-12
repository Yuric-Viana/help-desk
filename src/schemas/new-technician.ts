import z from "zod";

export const newTechnicianSchema = z.object({
  name: z.string().min(3, "Mínimo de 3 digítos"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Mínimo de 6 digítos"),
  availabilities: z.array(z.string().min(1, "Selecione pelo menos um horário")),
});

export type NewTechnicianFormData = z.infer<typeof newTechnicianSchema>;
