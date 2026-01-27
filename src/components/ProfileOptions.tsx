import { cn } from "@/lib/classMerge";
import { LogOut } from "lucide-react";
import Image from "next/image";

interface ProfileOptionsProps {
  className?: string;
}

export function ProfileOptions({ className }: ProfileOptionsProps) {
  return (
    <div className={cn(["mx-3 space-y-4 bg-gray-100 px-5 py-4", className])}>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase">Opções</h3>

      <div className="flex items-center gap-2">
        <Image
          src="/icons/circle-user.svg"
          alt="Ícone de usuário"
          width={20}
          height={20}
        />
        <p className="text-base text-gray-500">Perfil</p>
      </div>
      <div className="flex items-center gap-2">
        <LogOut size={20} className="text-feedback-danger" />
        <p className="text-feedback-danger text-base">Sair</p>
      </div>
    </div>
  );
}
