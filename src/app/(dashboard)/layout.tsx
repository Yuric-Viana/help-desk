import { MobileHeader } from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-app-gray-100 min-h-screen w-full lg:grid lg:grid-cols-[200px_1fr]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <MobileHeader />
      <main className="bg-app-gray-600 mt-3 rounded-t-2xl">{children}</main>
    </div>
  );
}
