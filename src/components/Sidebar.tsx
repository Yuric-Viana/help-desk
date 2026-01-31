import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { NavLinks } from "./NavLinks";

export function Sidebar() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <div className="border-app-gray-200 mt-3 mb-auto border-b px-5 py-6">
        <AppHeader />
      </div>

      <div className="border-app-gray-200 justify-start border-b px-4 pt-5">
        <NavLinks />
      </div>

      <div>
        <AppFooter />
      </div>
    </div>
  );
}
