"use client";

import { useFormContext } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { NewTechnicianFormData } from "@/schemas/new-technician";

export function TechnicianPersonalData() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewTechnicianFormData>();

  return (
    <div className="border-app-gray-500 rounded-2xl border p-5 lg:col-span-2 lg:col-start-1 lg:grid">
      <FieldSet>
        <FieldLegend className="text-app-gray-200 text-[20px] font-bold">
          Dados pessoais
        </FieldLegend>
        <FieldDescription className="text-app-gray-300 text-xs">
          Defina as informações do perfil de técnico
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel
              htmlFor="name"
              className="text-app-gray-300 text-sm font-bold"
            >
              Nome
            </FieldLabel>
            <Input
              id="name"
              autoComplete="off"
              {...register("name")}
              placeholder="Nome completo"
              className="placeholder:text-md border-app-gray-500 placeholder:text-app-gray-400 rounded-none border-0 border-b px-0 focus-visible:ring-0"
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="email"
              className="text-app-gray-300 text-sm font-bold"
            >
              E-mail
            </FieldLabel>
            <Input
              id="email"
              autoComplete="off"
              {...register("name")}
              placeholder="exemplo@email.com"
              className="placeholder:text-md border-app-gray-500 placeholder:text-app-gray-400 rounded-none border-0 border-b px-0 focus-visible:ring-0"
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="password"
              className="text-app-gray-300 text-sm font-bold"
            >
              Senha
            </FieldLabel>
            <Input
              id="email"
              autoComplete="off"
              {...register("name")}
              placeholder="Defina a senha de acesso"
              className="placeholder:text-md border-app-gray-500 placeholder:text-app-gray-400 rounded-none border-0 border-b px-0 focus-visible:ring-0"
            />
            <small className="text-app-gray-400 text-xs italic">
              Mínimo de 6 digítos
            </small>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
