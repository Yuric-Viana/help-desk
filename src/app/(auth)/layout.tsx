import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full overflow-y-hidden lg:grid lg:grid-cols-2">
      <Image src="/Login_Background.png" fill alt="Imagem de fundo" />
      <div className="relative col-start-2 mt-8 h-full rounded-t-2xl bg-gray-600">
        <div className="flex items-center justify-center gap-3 py-6 pt-8">
          <Image
            src="/Logo_IconDark.svg"
            alt="Ícone do help desk"
            height={40}
            width={40}
          />
          <h2 className="text-brand-dark text-xl font-bold">HelpDesk</h2>
        </div>
      </div>
    </div>
  );
}
