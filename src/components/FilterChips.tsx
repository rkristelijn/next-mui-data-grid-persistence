import { FilterChip } from './FilterChip';

import { useDataGridContext } from './DataGridContext';

export const FilterChips = () => {
  const { filterModel, setFilterModel } = useDataGridContext();
  const handleDelete = (field: string) => {
    setFilterModel({
      ...filterModel,
      items: filterModel.items.filter((i) => i.field !== field),
    });
  };

  return (
    <>
      {filterModel.items.map((item) => (
        <FilterChip key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </>
  );
};
