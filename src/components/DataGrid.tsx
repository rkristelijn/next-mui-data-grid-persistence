'use client';
import Box from '@mui/material/Box';
import { DataGridPro, GridColDef, GridColumnVisibilityModel, GridToolbar} from '@mui/x-data-grid-pro';
import { useLocalStorage } from '@uidotdev/usehooks';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Baratheon', firstName: 'Robert', age: 36 },
  { id: 11, lastName: 'Bolton', firstName: 'Ramsay', age: 20 },
  { id: 12, lastName: 'Greyjoy', firstName: 'Theon', age: 19 },
  { id: 13, lastName: 'Mormont', firstName: 'Jorah', age: 45 },
  { id: 14, lastName: 'Sand', firstName: 'Ellaria', age: 32 },
  { id: 15, lastName: 'Clegane', firstName: 'Sandor', age: 41 },
  { id: 16, lastName: 'Tyrell', firstName: 'Margaery', age: 22 },
  { id: 17, lastName: 'Martell', firstName: 'Oberyn', age: 42 },
  { id: 18, lastName: "H'ghar", firstName: 'Jaqen', age: 37 },
  { id: 19, lastName: 'Tarth', firstName: 'Brienne', age: 32 },
  { id: 20, lastName: 'Dondarrion', firstName: 'Beric', age: 39 },
  { id: 21, lastName: 'Seaworth', firstName: 'Davos', age: 48 },
  { id: 22, lastName: 'Baelish', firstName: 'Petyr', age: 35 },
  { id: 23, lastName: 'Briarwood', firstName: 'Delilah', age: 27 },
  { id: 24, lastName: 'Hightower', firstName: 'Gerold', age: 65 },
  { id: 25, lastName: 'Mudd', firstName: 'Tristifer', age: 29 },
  { id: 26, lastName: 'Blackfyre', firstName: 'Daemon', age: 34 },
  { id: 27, lastName: 'Reed', firstName: 'Meera', age: 17 },
  { id: 28, lastName: 'Umber', firstName: 'Greatjon', age: 52 },
  { id: 29, lastName: 'Frey', firstName: 'Walder', age: 67 },
  { id: 30, lastName: 'Hoare', firstName: 'Harren', age: 45 },
  { id: 31, lastName: 'Dayne', firstName: 'Arthur', age: 36 },
  { id: 32, lastName: 'Royce', firstName: 'Yohn', age: 52 },
  { id: 33, lastName: 'Tully', firstName: 'Edmure', age: 37 },
  { id: 34, lastName: 'Arryn', firstName: 'Jon', age: 38 },
  { id: 35, lastName: 'Oakheart', firstName: 'Arys', age: 32 },
  { id: 36, lastName: 'Plumm', firstName: 'Viserys', age: 40 },
  { id: 37, lastName: 'Slynt', firstName: 'Janos', age: 45 },
  { id: 38, lastName: 'Qorgyle', firstName: 'Quentyn', age: 29 },
  { id: 39, lastName: 'Crakehall', firstName: 'Roland', age: 34 },
  { id: 40, lastName: 'Tarly', firstName: 'Samwell', age: 17 },
  { id: 41, lastName: 'Hightower', firstName: 'Leyton', age: 64 },
  { id: 42, lastName: 'Mallister', firstName: 'Jason', age: 47 },
  { id: 43, lastName: 'Marbrand', firstName: 'Addam', age: 36 },
  { id: 44, lastName: 'Westerling', firstName: 'Jeyne', age: 16 },
  { id: 45, lastName: 'Cassel', firstName: 'Jory', age: 33 },
  { id: 46, lastName: 'Payne', firstName: 'Podrick', age: 14 },
  { id: 47, lastName: 'Stokeworth', firstName: 'Bronn', age: 32 },
  { id: 48, lastName: 'Umber', firstName: 'Smalljon', age: 25 },
  { id: 49, lastName: '', firstName: 'Hodor', age: 40 },
];

export default function DataGridDemo() {
  const [columnVisibilityModel, setColumnVisibilityModel] = useLocalStorage<GridColumnVisibilityModel>('columnVisibilityModel', {
    lastName: false,
  });
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
}
