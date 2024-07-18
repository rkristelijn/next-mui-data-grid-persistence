'use client';

import Box from '@mui/material/Box';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';

import { useDataGridContext } from './DataGridContext';
import { rows, columns } from './data';

export const DataGrid = () => {
  const [columnVisibilityModel, setColumnVisibilityModel, filterModel, setFilterModel] = useDataGridContext();
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <DataGridPro
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
        filterModel={filterModel}
        onFilterModelChange={(newModel) => {
          setFilterModel(newModel);
        }}
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
