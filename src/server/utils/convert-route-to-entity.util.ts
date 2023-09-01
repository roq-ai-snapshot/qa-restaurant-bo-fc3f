const mapping: Record<string, string> = {
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  reviews: 'review',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
