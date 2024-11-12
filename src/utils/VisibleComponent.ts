import { MODULE_NAME } from '@shangrila-cargo/constant';

export const isVisible = ({
  module_name,
  permission = 'read',
  permissionList,
}: {
  module_name: (typeof MODULE_NAME)[keyof typeof MODULE_NAME];
  permission?: string;
  permissionList: Record<string, string[]>;
}) => {
  const listPermission =
    permissionList[module_name as keyof typeof permissionList];

  return listPermission.includes(`${permission}`);
};
