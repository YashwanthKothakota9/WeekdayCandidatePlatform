import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const roles = ['frontend', 'backend', 'ios', 'android', 'tech lead'];

interface MultiSelectProps {
  onFilterChange: (roles: string[]) => void;
}

export default function MultipleSelect({ onFilterChange }: MultiSelectProps) {
  const [role, setRole] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof roles>) => {
    const {
      target: { value },
    } = event;
    onFilterChange([...value]);
    console.log(value);
    setRole(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="job-role">Role</InputLabel>
        <Select
          labelId="job-role"
          id="multiple-checkbox"
          multiple
          value={role}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {roles.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={role.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
