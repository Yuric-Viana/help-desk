import { Button } from "./ui/button";

export function AppFooter() {
  const name = "Yuri Viana";
  const work = name.split(" ");
  const initials = work.map((letter) => letter.charAt(0).toUpperCase());

  return (
    <div className="flex gap-3 px-4 py-5">
      <Button
        type="button"
        variant="ghost"
        className="bg-brand-dark hover:bg-brand-base flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
      >
        <p className="text-app-gray-600 text-sm uppercase">{initials}</p>
      </Button>

      <div>
        <h2 className="text-app-gray-600 text-sm">Usuário Adm</h2>
        <p className="text-app-gray-400 text-xs">user.adm@test.com</p>
      </div>
    </div>
  );
}
