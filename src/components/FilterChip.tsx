import Chip from '@mui/material/Chip';
import FilterList from '@mui/icons-material/FilterList';
import { GridFilterItem } from '@mui/x-data-grid-pro';

interface FilterChipProps {
  item: GridFilterItem;
  onDelete: (field: string) => void;
}

export const FilterChip: React.FC<FilterChipProps> = ({ item, onDelete }) => {
  return (
    <Chip
      icon={<FilterList />}
      variant="outlined"
      color="primary"
      key={item.id}
      label={`${item.field} ${item.operator} ${item.value ? item.value : ''}`}
      onDelete={() => onDelete(item.field)}
    />
  );
};
