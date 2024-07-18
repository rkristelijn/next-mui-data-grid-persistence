'use client';

import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { GridToolbar } from './GridToolbar';

import { useDataGridContext } from './DataGridContext';
import { rows } from './data';

export const DataGrid = () => {
  const {
    columnVisibilityModel,
    setColumnVisibilityModel,
    filterModel,
    setFilterModel,
    sortModel,
    setSortModel,
    columns,
    handleColumnOrderChange,
    handleColumnResize,
  } = useDataGridContext();

  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <DataGridPro
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
        filterModel={filterModel}
        onFilterModelChange={(newModel) => setFilterModel(newModel)}
        sortModel={sortModel}
        onSortModelChange={(newModel) => setSortModel(newModel)}
        onColumnOrderChange={(event) => handleColumnOrderChange(event)}
        onColumnResize={(event) => handleColumnResize(event)}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};
