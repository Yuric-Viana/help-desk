import { MobileHeader } from "@/components/MobileHeader";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-app-gray-100 min-h-screen w-full">
      <MobileHeader />
      {children}
    </div>
  );
}
