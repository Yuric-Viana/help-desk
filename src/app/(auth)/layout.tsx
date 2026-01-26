import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <Image src="Login_Background.png" fill alt="Imagem de fundo" />
      <div className="col-start-2">{children}</div>
    </div>
  );
}
