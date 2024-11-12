import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { NavItem } from './NavItem';
import { allRoutes } from '@shangrila-cargo/routes/Routes';
import logo from '@shangrila-cargo/assets/images/Logo.png';
import { filterVisibleRoutes } from '@shangrila-cargo/utils';
import { SidebarProps } from './Sidebar.types';
import { usePermissionList } from '@shangrila-cargo/hooks/useIsAuthenticatedQuery';
import { useMemo } from 'react';

export const Sidebar = ({ isCollapsed, sidebarWidth }: SidebarProps) => {
  const { data: permissionList } = usePermissionList();

  const visibleRoutes = useMemo(() => {
    if (permissionList)
      return filterVisibleRoutes(allRoutes({ permissionList }));
    else return [];
  }, [permissionList]);
  return (
    <Flex
      transition="all 0.4s ease"
      display="flex"
      flexDirection="column"
      p="18px"
      background="white"
      border="1px solid"
      borderColor="gray.50"
      borderRadius="16px"
      boxShadow="2px 2px 32px 0px #00000014"
      height="100%"
      gap={4}
      width={sidebarWidth}
    >
      <Box>
        <Image width={isCollapsed ? '45px' : '80px'} src={logo} />
        <Divider mt={3} />
      </Box>
      <Text>User</Text>
      <Box color="gray.700">
        {visibleRoutes.map((item) => (
          <NavItem key={item.name} isOpen={!isCollapsed} {...item} />
        ))}
      </Box>
    </Flex>
  );
};
