import { ClientOnly, DataGridProvider, DataGrid } from '@/components';

const DataGridPage = () => {

  return (
    <ClientOnly>
      <DataGridProvider name="MyDataGrid">
        <DataGrid />
      </DataGridProvider>
    </ClientOnly>
  );
};

export default DataGridPage;
