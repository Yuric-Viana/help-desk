import Image from "next/image";

export function AppHeader() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/Logo_IconLight.svg"
        alt="Logo help desk"
        width={44}
        height={44}
      />
      <div>
        <h2 className="text-app-gray-600 text-[20px] font-bold">HelpDesk</h2>
        <p className="text-brand-light text-[10px] font-bold uppercase">
          Admin
        </p>
      </div>
    </div>
  );
}
