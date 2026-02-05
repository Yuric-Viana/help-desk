export const routePermissions = {
  "/admin": ["client"],
  "/technician": ["technician"],
  "/portal": ["client"],
};

export function findMatchingRoute(path: string) {
  return Object.keys(routePermissions).find((route) => path.startsWith(route));
}
