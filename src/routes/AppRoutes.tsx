import { Layout } from '@shangrila-cargo/component/Layout';
import { Navigate, useRoutes } from 'react-router-dom';
import { allRoutes, authRoutes } from './Routes';
import { extractElementsAndRoutes } from '@shangrila-cargo/utils';
import { PAGE_ROUTES } from '@shangrila-cargo/constant';
import {
  useIsAuthenticatedQuery,
  usePermissionList,
} from '@shangrila-cargo/hooks/useIsAuthenticatedQuery';
import { useMemo } from 'react';

const AppRoutes = () => {
  const { data: isAuthenticated } = useIsAuthenticatedQuery();
  const { data: permissionList } = usePermissionList();
  const routes = useMemo(() => {
    if (permissionList)
      return extractElementsAndRoutes(allRoutes({ permissionList }));
    else return [];
  }, [permissionList]);

  const element = useRoutes(
    isAuthenticated
      ? [
          {
            element: <Layout />,
            children: [
              ...routes,
              {
                path: PAGE_ROUTES.NO_MATCH,
                element: <Navigate to={PAGE_ROUTES.DASHBOARD} />,
              },
            ],
          },
        ]
      : authRoutes,
  );

  return <div>{element}</div>;
};

export { AppRoutes };
