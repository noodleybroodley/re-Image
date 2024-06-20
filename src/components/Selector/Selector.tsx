import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getOptions } from '../../utils/utils';

interface Props {
	type: string,
  selectedType: string,
  setType: React.Dispatch<React.SetStateAction<string>>
}

export default function Selector(props: Props) {
  const options = getOptions(props.type);
  const handleChange = (event: SelectChangeEvent) => {
    props.setType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Convert To...</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={props.selectedType}
        label="Convert To..."
        onChange={handleChange}
      >
        {options.map((option)=>(
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}