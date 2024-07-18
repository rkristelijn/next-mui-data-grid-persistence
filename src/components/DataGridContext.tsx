'use client';

import {
  GridColDef,
  GridColumnOrderChangeParams,
  GridColumnResizeParams,
  GridColumnVisibilityModel,
  GridFilterModel,
  GridSortModel,
} from '@mui/x-data-grid-pro';
import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext, useContext, ReactNode } from 'react';
import { columns as defaultColumns, gridDefaults } from './data';

// todo: this is going to change
interface DataGridContextType {
  columnVisibilityModel: GridColumnVisibilityModel;
  setColumnVisibilityModel: (model: GridColumnVisibilityModel) => void;
  filterModel: GridFilterModel;
  setFilterModel: (model: GridFilterModel) => void;
  sortModel: GridSortModel;
  setSortModel: (model: GridSortModel) => void;
  columns: GridColDef[];
  setColumns: (columns: GridColDef[]) => void;
  handleColumnOrderChange: (params: GridColumnOrderChangeParams) => void;
  handleColumnResize: (params: GridColumnResizeParams) => void;
  handleResetFilters: () => void;
  handleResetColumnSelection: () => void;
  handleResetColumnWidthOrOrder: () => void;
  deepEqual: (x: any, y: any) => boolean;
}

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
  // column visibility
  const [columnVisibilityModel, setColumnVisibilityModel] = useLocalStorage<GridColumnVisibilityModel>(
    props.name + '-ColumnVisibilityModel',
    gridDefaults.columnVisibilityModel
  );
  // filter model
  const [filterModel, setFilterModel] = useLocalStorage<GridFilterModel>(props.name + '-FilterModel', gridDefaults.filterModel);
  // sort model
  const [sortModel, setSortModel] = useLocalStorage<GridSortModel>(props.name + '-SortModel', gridDefaults.sortModel);
  // columns
  const [columns, setColumns] = useLocalStorage<GridColDef[]>(props.name + '-Columns', defaultColumns);
  const handleColumnOrderChange = (params: GridColumnOrderChangeParams) => {
    const { oldIndex, targetIndex } = params;
    const currentColumns = [...columns];
    /// Swap the items at oldIndex and targetIndex
    [currentColumns[oldIndex], currentColumns[targetIndex]] = [currentColumns[targetIndex], currentColumns[oldIndex]];
    setColumns(currentColumns);
  };
  const handleColumnResize = (params: GridColumnResizeParams) => {
    const {
      width,
      colDef: { headerName },
    } = params;

    // Create a new columns array with the updated width for the matching column
    const updatedColumns = columns.map((column) => (column.headerName === headerName ? { ...column, width } : column));

    // Update the columns array with the new width
    setColumns(updatedColumns);
  };
  const handleResetFilters = () => {
    setFilterModel(gridDefaults.filterModel);
  };
  const handleResetColumnSelection = () => {
    setColumnVisibilityModel(gridDefaults.columnVisibilityModel);
  };
  const handleResetColumnWidthOrOrder = () => {
    setColumns(defaultColumns);
  };
  const deepEqual = (x: any, y: any): boolean => {
    const ok = Object.keys,
      tx = typeof x,
      ty = typeof y;
    return x && y && tx === 'object' && tx === ty
      ? ok(x).length === ok(y).length && ok(x).every((key) => deepEqual(x[key], y[key]))
      : x === y;
  };
  // the objects to return
  const value: DataGridContextType = {
    columnVisibilityModel,
    setColumnVisibilityModel,
    filterModel,
    setFilterModel,
    sortModel,
    setSortModel,
    columns,
    setColumns,
    handleColumnOrderChange,
    handleColumnResize,
    handleResetFilters,
    handleResetColumnSelection,
    handleResetColumnWidthOrOrder,
    deepEqual,
  };
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
