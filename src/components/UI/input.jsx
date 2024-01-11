import React from "react";
import { Controller } from "react-hook-form";
import { InputLabel, Input, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CustomInput(props) {
  const { inputInfoItem, control, isError } = props.props;
  const [showPassword, setShowPassword] = React.useState(false);
  let result = undefined;
  
  switch (inputInfoItem.type) {
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
            <>
              <InputLabel htmlFor={`"input-adornment-"${inputInfoItem.type}`}>
                {inputInfoItem.label}
              </InputLabel>
              <Input
              {...field}
                id={`"input-adornment-"${inputInfoItem.type}`}
                type={showPassword ? "text" : "password"}
                placeholder = {`${inputInfoItem.placeholder}`}
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
              />
            </>
          )}
        />
      );
      break;
    case 'tel':
      result = (
        <Controller
          name={`${inputInfoItem.name}`}
          control={control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor={`"input-adornment-"${inputInfoItem.type}`}>
                {inputInfoItem.label}
              </InputLabel>
              <Input
              {...field}
                id={`"input-adornment-"${inputInfoItem.type}`}
                type={`${inputInfoItem.type}`}
                placeholder = {`${inputInfoItem.placeholder}`}
                startAdornment={<InputAdornment position="start">+</InputAdornment>}
              />
            </>
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
            <>
              <InputLabel htmlFor={`"input-adornment-"${inputInfoItem.type}`}>
                {inputInfoItem.label}
              </InputLabel>
              <Input
              {...field}
                id={`"input-adornment-"${inputInfoItem.type}`}
                type={`${inputInfoItem.type}`}
                placeholder = {`${inputInfoItem.placeholder}`}
              />
            </>
          )}
        />
      );
      break;
  }
  return result;
}
