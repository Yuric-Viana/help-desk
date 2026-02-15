import { MobileHeader } from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user.name) return;

  return (
    <div className="bg-app-gray-100 grid min-h-screen w-full grid-rows-[100px_1fr] lg:grid lg:grid-cols-[245px_1fr] lg:grid-rows-1">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <MobileHeader />
      <main className="bg-app-gray-600 min-w-0 rounded-t-2xl px-6 lg:mt-3">
        {children}
      </main>
    </div>
  );
}
