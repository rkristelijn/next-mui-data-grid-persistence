import { Box } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { type GridToolbarProps, type ToolbarPropsOverrides } from '@mui/x-data-grid-pro';

import { FilterChips } from './FilterChips';
import { VisibilityChips } from './VisibilityChips';
import { SortChip } from './SortChip';
import { ResetFilterButton } from './ResetFilterButton';
import { ResetColumnSelectionButton } from './ResetColumnSelectionButton';
import { ResetColumnWidthOrOrderButton } from './ResetColumnWidthOrOrderButton';

interface DataGridToolbarProps extends GridToolbarProps, ToolbarPropsOverrides {}

/** Custom toolbar for DataGrid
 * @see https://mui.com/x/react-data-grid/components/#toolbar for all the settings and tips
 */
export const GridToolbar = ({ ...props }: DataGridToolbarProps): JSX.Element => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <GridToolbarDensitySelector />
      <Box sx={{ flexGrow: 1 }} />
      <FilterChips />
      <VisibilityChips />
      <SortChip />
      <ResetFilterButton />
      <ResetColumnSelectionButton />
      <ResetColumnWidthOrOrderButton />
    </GridToolbarContainer>
  );
};
