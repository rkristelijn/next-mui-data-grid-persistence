'use client';

import Box from '@mui/material/Box';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';

import { useDataGridContext } from './DataGridContext';
import { rows, columns } from './data';

export const DataGrid = () => {
  const [columnVisibilityModel, setColumnVisibilityModel] = useDataGridContext();
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <DataGridPro
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
        onFilterModelChange={(newModel) => console.log(newModel)}
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
