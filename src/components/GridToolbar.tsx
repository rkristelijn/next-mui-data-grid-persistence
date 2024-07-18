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
import { gridDefaults } from './data';
import { Add, FilterList } from '@mui/icons-material';

interface DataGridToolbarProps extends GridToolbarProps, ToolbarPropsOverrides {}

/** Custom toolbar for DataGrid
 * @see https://mui.com/x/react-data-grid/components/#toolbar for all the settings and tips
 */
export const GridToolbar = ({ ...props }: DataGridToolbarProps): JSX.Element => {
  const [columnVisibilityModel, setColumnVisibilityModel, filterModel, setFilterModel] = useDataGridContext();

  const handleResetFilters = () => {
    setFilterModel(gridDefaults.filterModel);
  };

  const handleResetColumnSelection = () => {
    setColumnVisibilityModel(gridDefaults.columnVisibilityModel);
  };

  const deepEqual = (x: any, y: any): boolean => {
    const ok = Object.keys,
      tx = typeof x,
      ty = typeof y;
    return x && y && tx === 'object' && tx === ty
      ? ok(x).length === ok(y).length && ok(x).every((key) => deepEqual(x[key], y[key]))
      : x === y;
  };
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
      {/* {"__check__":false,"id":false,"firstName":false,"lastName":false,"age":false} */}
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
    </GridToolbarContainer>
  );
};
