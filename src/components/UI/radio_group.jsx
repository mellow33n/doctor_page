import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from 'react-hook-form';

export default function CustomRadioGroup (props) {
    const {radioGroupInfo, control} = props.props
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <div className='form-div'>
    <Controller
        name={`${radioGroupInfo.name}`}
        control={control}
        render={({ field }) => (
            <FormControl {...field}>
            <FormLabel id="demo-controlled-radio-buttons-group">{radioGroupInfo.label}</FormLabel>
            <RadioGroup
              aria-labelledby="controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label={`${radioGroupInfo.labelValueOne}`} />
              <FormControlLabel value="male" control={<Radio />} label={`${radioGroupInfo.labelValueTwo}`} />
            </RadioGroup>
          </FormControl>
        )}
      />
    
    </div>;
}



