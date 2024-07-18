import { useDataGridContext } from './DataGridContext'; // Adjust the import path as needed
import { VisibilityChip } from './VisibilityChip';

export const VisibilityChips: React.FC = () => {
  const { columnVisibilityModel, setColumnVisibilityModel } = useDataGridContext();

  const handleDelete = (key: string) => {
    const newModel = { ...columnVisibilityModel };
    delete newModel[key];
    setColumnVisibilityModel(newModel);
  };

  return (
    <>
      {Object.keys(columnVisibilityModel).map((key) => (
        <VisibilityChip key={key} label={key} onDelete={handleDelete} />
      ))}
    </>
  );
};
