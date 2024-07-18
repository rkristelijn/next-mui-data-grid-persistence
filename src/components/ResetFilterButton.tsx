import { FilterList } from '@mui/icons-material';
import { Button } from '@mui/material';

import { useDataGridContext } from './DataGridContext';
import { gridDefaults } from './data';

export const ResetFilterButton = () => {
  const { handleResetFilters, filterModel, deepEqual } = useDataGridContext();

  return (
    <Button
      variant="outlined"
      size="small"
      onClick={handleResetFilters}
      startIcon={<FilterList />}
      disabled={deepEqual(filterModel, gridDefaults.filterModel)}
      aria-label="Reset filters"
    >
      reset
    </Button>
  );
};
