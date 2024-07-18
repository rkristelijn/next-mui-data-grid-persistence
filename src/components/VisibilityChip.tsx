import React from 'react';
import Chip from '@mui/material/Chip';
import GridColumnIcon from '@mui/icons-material/ViewColumn';
import Add from '@mui/icons-material/Add';

interface VisibilityChipProps {
  key: string;
  label: string;
  onDelete: (key: string) => void;
}

export const VisibilityChip: React.FC<VisibilityChipProps> = ({ key, label, onDelete }) => {
  return <Chip icon={<GridColumnIcon />} deleteIcon={<Add />} variant="outlined" key={key} label={label} onDelete={() => onDelete(key)} />;
};
