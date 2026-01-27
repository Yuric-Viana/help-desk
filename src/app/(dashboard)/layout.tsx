import { MobileHeader } from "@/components/MobileHeader";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <MobileHeader />
      {children}
    </div>
  );
}
