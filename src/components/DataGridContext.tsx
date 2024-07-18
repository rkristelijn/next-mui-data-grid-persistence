'use client';

import { GridColumnVisibilityModel, GridFilterModel, GridLogicOperator } from '@mui/x-data-grid-pro';
import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext, useContext, ReactNode } from 'react';

type DataGridContextType = [
  GridColumnVisibilityModel,
  (model: GridColumnVisibilityModel) => void,
  GridFilterModel,
  (model: GridFilterModel) => void
];

/**
 * Context to manage the visibility model of the data grid columns.
 *
 * This should not be exported, use the custom hook useDataGridContext so a warning
 *   is thrown if used outside of a DataGridProvider.
 * @type {React.Context<DataGridContextType | undefined>}
 */
const DataGridContext = createContext<DataGridContextType | undefined>(undefined);

/**
 * Provider component for DataGridContext.
 * @param { Object } props - The properties object.
 * @param { ReactNode } props.children - The child components.
 * @returns { JSX.Element } The provider component.
 */
export const DataGridProvider = (props: { name: string; children: ReactNode }) => {
  const [columnVisibilityModel, setColumnVisibilityModel] = useLocalStorage<GridColumnVisibilityModel>(props.name ?? 'DataGrid', {});
  const [filterModel, setFilterModel] = useLocalStorage<GridFilterModel>('DataGridFilter', {
    items: [],
    logicOperator: 'and' as GridLogicOperator,
    quickFilterValues: [],
    quickFilterLogicOperator: 'and' as GridLogicOperator,
  });
  const value: DataGridContextType = [columnVisibilityModel, setColumnVisibilityModel, filterModel, setFilterModel];
  return <DataGridContext.Provider value={value} {...props} />;
};

/**
 * Custom hook to use the DataGridContext.
 * @throws Will throw an error if used outside of a DataGridProvider.
 * @returns { DataGridContextType } The context value.
 */
export const useDataGridContext = (): DataGridContextType => {
  const context = useContext(DataGridContext);
  if (!context) {
    throw new Error('useDataGridContext must be used within a DataGridProvider');
  }
  return context;
};
