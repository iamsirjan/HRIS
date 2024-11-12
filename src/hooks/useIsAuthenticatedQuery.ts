import { TokenService } from '@shangrila-cargo/utils/TokenService';
import { useQuery } from '@tanstack/react-query';

const authentication = () => {
  return !!TokenService.getToken();
};

export const useIsAuthenticatedQuery = () => {
  return useQuery({
    queryKey: ['authentication'],
    queryFn: authentication,
  });
};

const fetchPermissionList = async () => {
  // dummy api data
  return Promise.resolve({
    dashboard: ['read'],
    user: ['read', 'create'],
    cargo: ['read', 'create'],
    air_cargo: ['read', 'create'],
    customer_management: ['read'],
    user_group: ['read'],
    user_list: ['read'],
    master: ['read', 'create'],
    master_merchandise: [''],
    master_unitmeasurement: ['read'],
    master_agentdetail: ['read'],
    master_tracking: ['read'],
    master_airline: ['read'],
    master_shipping: ['read'],
    master_destination: ['read'],
    master_country: ['read'],
    master_city: ['read'],
    quotation_list: ['read'],
    account_management: ['read', 'create'],
    office_management: ['read', 'create'],
    tenant_management: ['read'],
  });
};

export const usePermissionList = () => {
  return useQuery({
    queryKey: ['permissionList'],
    queryFn: fetchPermissionList,
  });
};
