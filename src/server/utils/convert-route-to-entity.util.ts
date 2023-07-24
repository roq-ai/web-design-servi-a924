const mapping: Record<string, string> = {
  clients: 'client',
  projects: 'project',
  'project-managers': 'project_manager',
  'subscription-plans': 'subscription_plan',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
