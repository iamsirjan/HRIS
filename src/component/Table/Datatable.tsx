import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
} from '@chakra-ui/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { TableHeader } from './TableHeader';
import TableFooter from './TableFooter';
import { TableProps } from './Table.types';

export const DataTable = <T,>({
  data,
  columns,
  headerProps,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box bg={'white'} p={1} borderRadius={'lg'} shadow={'xl'}>
      <TableHeader {...headerProps} />
      <TableContainer justifyContent={'center'}>
        <ChakraTable variant="simple">
          <Thead backgroundColor={'gray.50'}>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <Tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext(),
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tfoot>
        </ChakraTable>
        <TableFooter />
      </TableContainer>
    </Box>
  );
};
