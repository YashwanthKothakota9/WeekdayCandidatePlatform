import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

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

interface MultiSelectProps {
  onFilterChange: (experiences: string[]) => void;
}

export default function ExperiencesMultipleSelect({
  onFilterChange,
}: MultiSelectProps) {
  const jobs = useSelector((state: RootState) => state.jobSlice.jdList);
  const experiences = [
    ...new Set(jobs.map((job) => (job.minExp ?? job.maxExp ?? 0).toString())),
  ];

  const [experience, setExperience] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof experiences>) => {
    const {
      target: { value },
    } = event;
    onFilterChange([...value]);
    console.log(value);
    setExperience(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="job-role">Experience</InputLabel>
        <Select
          labelId="job-role"
          id="multiple-checkbox"
          multiple
          value={experience}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {experiences.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={experience.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
