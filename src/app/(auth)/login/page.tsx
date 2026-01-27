import Link from "next/link";

import { Form } from "@/components/Form";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SocialAuth } from "@/components/SocialAuth";

export default function LoginPage() {
  return (
    <div className="mx-6 h-screen overflow-y-hidden lg:h-max">
      <div className="rounded-2xl border-2 border-gray-500 p-6">
        <Form
          title="Acesse o portal"
          description="Entre usando seu e-mail e senha cadastrados"
        >
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
          </Field>
          <Field>
            <Button variant="default">Entrar</Button>
          </Field>
        </Form>
        <SocialAuth subtitle="Ou entre com" />
        <p className="mt-6 text-center text-sm text-gray-400 italic">
          Ainda não tem uma conta ?{" "}
          <Link className="text-gray-200" href="/register">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
