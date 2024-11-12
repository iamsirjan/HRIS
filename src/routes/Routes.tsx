import { Navigate } from 'react-router-dom';

import {
  ChartSquareIcon,
  DashboardIcon,
  DocumentCopyBoldIcon,
  UserIcon,
} from '@shangrila-cargo/assets/svgs/';
import { PAGE_ROUTES } from '@shangrila-cargo/constant';
import { isVisible } from '@shangrila-cargo/utils/VisibleComponent';

// Screens
import { ForgotPassword, Login } from '@shangrila-cargo/feature/Auth/screens';
import { UserList } from '@shangrila-cargo/feature/User';
import { Inquiry } from '@shangrila-cargo/feature/Inquiry/screens';

export const allRoutes = ({
  permissionList,
}: {
  permissionList: Record<string, string[]>;
}) => [
  {
    icon: <ChartSquareIcon />,
    name: 'Dashboard',
    route: PAGE_ROUTES.DASHBOARD,
    isVisible: isVisible({ module_name: 'dashboard', permissionList }),
    element: <div>Dashboard</div>,
  },
  {
    icon: <UserIcon />,
    name: 'User',
    route: '/user',
    isVisible: isVisible({ module_name: 'user', permissionList }),
    element: <>User</>,
    children: [
      {
        icon: <DashboardIcon />,
        name: 'User Roles',
        route: '/user-roles',
        isVisible: isVisible({ module_name: 'user_roles', permissionList }),
        element: <>Roles</>,
      },
      {
        icon: <DashboardIcon />,
        name: 'User List',
        route: PAGE_ROUTES.USER.LIST,
        isVisible: isVisible({ module_name: 'user_list', permissionList }),
        element: <UserList />,
      },
    ],
  },
  {
    icon: <DocumentCopyBoldIcon />,
    name: 'Inquiry',
    route: PAGE_ROUTES.INQUIRY.VIEW,
    isVisible: isVisible({ module_name: 'air_cargo', permissionList }),
    element: <Inquiry />,
  },
];

export const authRoutes = [
  {
    path: PAGE_ROUTES.AUTH.LOGIN,
    element: <Login />,
  },
  {
    path: PAGE_ROUTES.AUTH.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: PAGE_ROUTES.NO_MATCH,
    element: <Navigate to={PAGE_ROUTES.AUTH.LOGIN} />,
  },
];
