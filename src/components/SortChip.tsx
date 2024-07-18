import { Chip } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

import { useDataGridContext } from './DataGridContext';
import { gridDefaults } from './data';

export const SortChip: React.FC = () => {
  const { sortModel, setSortModel } = useDataGridContext();
  if (sortModel.length === 0) return null;

  return (
    <Chip
      icon={sortModel[0].sort === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
      variant="outlined"
      label={sortModel[0].field}
      onDelete={() => setSortModel(gridDefaults.sortModel)}
    />
  );
};
