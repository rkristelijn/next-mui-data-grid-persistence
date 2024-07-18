import { Button } from '@mui/material';
import { GridColumnIcon } from '@mui/x-data-grid-pro';

import { useDataGridContext } from './DataGridContext';
import { gridDefaults } from './data';

export const ResetColumnSelectionButton = () => {
  const { handleResetColumnSelection, columnVisibilityModel, deepEqual } = useDataGridContext();

  return (
    <Button
      variant="outlined"
      size="small"
      onClick={handleResetColumnSelection}
      startIcon={<GridColumnIcon />}
      disabled={deepEqual(columnVisibilityModel, gridDefaults.columnVisibilityModel)}
      aria-label="Reset column selection"
    >
      reset
    </Button>
  );
};
