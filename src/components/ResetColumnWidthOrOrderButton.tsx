import { Button } from '@mui/material';
import { ViewArray } from '@mui/icons-material';

import { useDataGridContext } from './DataGridContext';
import { columns as defaultColumns } from './data';

export const ResetColumnWidthOrOrderButton = () => {
  const { columns, handleResetColumnWidthOrOrder, deepEqual } = useDataGridContext();

  return (
    <Button
      variant="outlined"
      size="small"
      onClick={handleResetColumnWidthOrOrder}
      startIcon={<ViewArray />}
      disabled={deepEqual(columns, defaultColumns)}
      aria-label="Reset width or order"
    >
      reset
    </Button>
  );
};
