import { TableOptions } from '@tanstack/react-table';

export type TableProps<T> = {
  data: T[];
  columns: TableOptions<T>['columns'];
  isPending?: boolean;
  headerProps?: TableHeaderProps;
};

export type TableHeaderProps = {
  headerTitle?: string;
  onButtonClick?: () => void;
  buttonTitle?: string;
};
