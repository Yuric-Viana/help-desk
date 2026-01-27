import { Form } from "@/components/Form";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-6 pb-35 lg:pb-25">
      <div className="rounded-2xl border-2 border-gray-500 p-6">
        <Form
          subtitle="Ou cadastre-se com"
          title="Crie sua conta"
          description="Informe seu nome, e-mail e senha"
        >
          <Field>
            <FieldLabel
              htmlFor="email"
              className="text-[10px] text-gray-300 uppercase"
            >
              Nome
            </FieldLabel>
            <Input
              id="email"
              autoComplete="off"
              placeholder="Digite seu nome completo"
              className="placeholder:text-md rounded-none border-0 border-b border-gray-500 px-0 placeholder:text-gray-400 focus-visible:ring-0"
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="email"
              className="text-[10px] text-gray-300 uppercase"
            >
              E-mail
            </FieldLabel>
            <Input
              id="email"
              autoComplete="off"
              placeholder="exemplo@email.com"
              className="placeholder:text-md rounded-none border-0 border-b border-gray-500 px-0 placeholder:text-gray-400 focus-visible:ring-0"
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="password"
              className="text-[10px] text-gray-300 uppercase"
            >
              Senha
            </FieldLabel>
            <Input
              id="email"
              autoComplete="off"
              type="password"
              placeholder="Digite sua senha"
              className="placeholder:text-md rounded-none border-0 border-b border-gray-500 px-0 placeholder:text-gray-400 focus-visible:ring-0"
            />
            <small className="text-xs text-gray-400 italic">
              Mínimo de 6 dígitos
            </small>
          </Field>
          <Field>
            <Button variant="default">Cadastrar</Button>
          </Field>
        </Form>
        <p className="mt-6 text-center text-sm text-gray-400 italic">
          Já tem uma conta ?{" "}
          <Link className="text-gray-200" href="/login">
            Entrar
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
