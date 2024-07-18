import { Box, Button, Chip } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { GridColumnIcon, type GridToolbarProps, type ToolbarPropsOverrides } from '@mui/x-data-grid-pro';

import { useDataGridContext } from './DataGridContext';
import { columns as defaultColumns, gridDefaults } from './data';
import { Add, ArrowDownward, ArrowUpward, FilterList, ViewArray } from '@mui/icons-material';

interface DataGridToolbarProps extends GridToolbarProps, ToolbarPropsOverrides {}

/** Custom toolbar for DataGrid
 * @see https://mui.com/x/react-data-grid/components/#toolbar for all the settings and tips
 */
export const GridToolbar = ({ ...props }: DataGridToolbarProps): JSX.Element => {
  const {
    columnVisibilityModel,
    setColumnVisibilityModel,
    filterModel,
    setFilterModel,
    sortModel,
    setSortModel,
    columns,
    setColumns,
    handleResetFilters,
    handleResetColumnSelection,
    handleResetColumnWidthOrOrder,
    deepEqual,
  } = useDataGridContext();

  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <GridToolbarDensitySelector />
      <Box sx={{ flexGrow: 1 }} />
      {filterModel.items.map((item) => (
        <Chip
          icon={<FilterList />}
          variant="outlined"
          color="primary"
          key={item.id}
          label={`${item.field} ${item.operator} ${item.value ? item.value : ''}`}
          onDelete={() => {
            setFilterModel({ ...filterModel, items: filterModel.items.filter((i) => i.field !== item.field) });
          }}
        />
      ))}
      {Object.keys(columnVisibilityModel).map((key) => (
        <Chip
          icon={<GridColumnIcon />}
          deleteIcon={<Add />}
          variant="outlined"
          key={key}
          label={key}
          onDelete={() => {
            const newModel = { ...columnVisibilityModel };
            delete newModel[key];
            setColumnVisibilityModel(newModel);
          }}
        />
      ))}
      {sortModel.length > 0 && (
        <Chip
          icon={sortModel[0].sort === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
          variant="outlined"
          label={sortModel[0].field}
          onDelete={() => setSortModel(gridDefaults.sortModel)}
        />
      )}
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
    </GridToolbarContainer>
  );
};
