import { usePathname } from "next/navigation";

interface useIsRouteProps {
  user: string;
}

export function useIsRoute({ user }: useIsRouteProps) {
  const pathname = usePathname();

  const rotesToHide = [`/admin/users/${user}`];

  const isUser = rotesToHide.includes(pathname);

  return isUser;
}
