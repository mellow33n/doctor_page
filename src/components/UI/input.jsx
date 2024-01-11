import React from "react";
import { Controller } from "react-hook-form";
import { InputLabel, Input, InputAdornment, IconButton, FormControl, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CustomInput(props) {
  const { inputInfoItem, control, errors } = props.props;
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputValue, setValue] = React.useState("");
  const handleInputChange = (event, field) => {
    setValue(event.target.value);
  };
  console.log(errors);
  let result = undefined;

  switch (inputInfoItem.type) {
    case "tel":
      result = (
        <Controller
          name={`${inputInfoItem.name}`}
          control={control}
          rules={{
            required: 'Обовʼязкове поле',
            pattern: {
              value: /^\d{12}$/,
              message: 'Номер телефону має складатись з 12 цифр, наприклад: 380993334444',
            },
          }}
          render={({ field }) => (
            <FormControl {...field}>
              <InputLabel htmlFor={`"input-adornment-"${inputInfoItem.name}`}>
                {inputInfoItem.label + "*"}
              </InputLabel>
              <Input
                error = {errors.tel ? true : false}
                id={`"input-adornment-"${inputInfoItem.name}`}
                type={`number`}
                placeholder={`${inputInfoItem.placeholder}`}
                value={inputValue}
                onChange = {handleInputChange}
                

                
                startAdornment={
                  <InputAdornment position="start">+</InputAdornment>
                }
              />
              {errors.tel ? <p className="error-msg">{errors.tel.message}</p>: "" }
            </FormControl>
          )}
        />
      );
      break;
    case "password":
      const handleClickShowPassword = () => setShowPassword((show) => !show);
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      result = (
        <Controller
          name={`${inputInfoItem.name}`}
          control={control}
          render={({ field }) => (
            <FormControl {...field}>
              <InputLabel htmlFor={`"input-adornment-"${inputInfoItem.name}`}>
                {inputInfoItem.label}
              </InputLabel>
              <Input
                id={`"input-adornment-"${inputInfoItem.name}`}
                type={showPassword ? "text" : "password"}
                placeholder={`${inputInfoItem.placeholder}`}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                  
                }
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          )}
        />
      );
      break;
    
    default:
      result = (
        <Controller
          name={`${inputInfoItem.name}`}
          control={control}
          render={({ field }) => (
            <FormControl {...field}>
              <InputLabel htmlFor={`"input-adornment-"${inputInfoItem.name}`}>
                {inputInfoItem.label}
              </InputLabel>
              <Input
                id={`"input-adornment-"${inputInfoItem.name}`}
                type={`${inputInfoItem.type}`}
                placeholder={`${inputInfoItem.placeholder}`}
                value={inputValue}
                onChange = {handleInputChange}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          )}
        />
      );
      break;
  }
  return result;
}
