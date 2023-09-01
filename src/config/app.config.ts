interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'QA Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create a profile',
    'View restaurant profiles and menus',
    'Reserve a table',
    'Manage table reservations',
    'Leave reviews for restaurants',
  ],
  ownerAbilities: [
    'Manage restaurant profile',
    'Invite and manage staff roles',
    'Manage table information',
    'Manage guest reservations',
    'View and respond to restaurant reviews',
  ],
};
