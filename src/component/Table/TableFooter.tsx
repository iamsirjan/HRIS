import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import en_US from 'rc-pagination/lib/locale/en_US'; // Import English locale
import './pagination.css';
import { Box, Flex, Grid, Select, Text } from '@chakra-ui/react';
import { ArrowNext, ArrowPrevious } from '@shangrila-cargo/assets/svgs';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUpdateQueryParam } from '@shangrila-cargo/hooks';

const TableFooter = () => {
  const [searchParams] = useSearchParams();
  const [pageSize, setPageSize] = useState(searchParams.get('size'));
  const [currentPage, setCurrentPage] = useState(searchParams.get('page'));
  useUpdateQueryParam('page', currentPage);
  useUpdateQueryParam('size', pageSize);

  const updatePage = (page: number) => {
    setCurrentPage(page.toString());
  };

  return (
    <Flex justifyContent={'space-between'} p={4}>
      <Flex gap={3} alignItems={'center'}>
        <Text>Show Result:</Text>
        <Select
          onChange={(e) => setPageSize(e.target.value)}
          size={'sm'}
          defaultValue={`${pageSize}`}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </Select>
      </Flex>
      <Box>
        <Pagination
          locale={en_US}
          prevIcon={
            <Grid placeItems="center" boxSize={{ base: 7, '2xl': 8 }}>
              <ArrowPrevious />
            </Grid>
          }
          nextIcon={
            <Grid placeItems="center" boxSize={{ base: 7, '2xl': 8 }}>
              <ArrowNext />
            </Grid>
          }
          align="end"
          pageSize={4}
          current={currentPage ? +currentPage : 1}
          total={400}
          showSizeChanger
          onChange={updatePage}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} results`
          }
        />
      </Box>
    </Flex>
  );
};

export default TableFooter;
