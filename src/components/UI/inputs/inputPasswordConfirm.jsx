import React from "react";
import { Controller } from "react-hook-form";
import {
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const inputInfo = {
  name: "acceptPassword",
  isRequired: true,
  type: "password",
  placeholder: "Продублюйте його",
  label: "Підтвердження паролю",
};

const CustomInputPasswordConfirm = (props) => {
  const { control, errors, getValues } = props.props;
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputValue, setValue] = React.useState("");

  const handleInputChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleClickShowPassword = React.useCallback(() => {
    setShowPassword((show) => !show);
  }, []);

  const handleMouseDownPassword = React.useCallback((event) => {
    event.preventDefault();
  }, []);


  const passwordConfirmValidation = {
    required: "Обовʼязкове поле",
    validate: {
      matchesPreviousPassword: (value) => {
        const password = getValues("password");
        return password === value || "Паролі не співпадають";
      },
    },
  };

  let inputComponent = (
    <Controller
      name={inputInfo.name}
      control={control}
      rules={passwordConfirmValidation}
      render={({ field }) => (
        <FormControl {...field}>
          <InputLabel htmlFor={`input-adornment-${inputInfo.name}`}>
            {inputInfo.label}
          </InputLabel>
          <Input
            id={`input-adornment-${inputInfo.name}`}
            type={
              inputInfo.type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : inputInfo.type
            }
            placeholder={inputInfo.placeholder}
            value={inputValue}
            onChange={handleInputChange}
            error={errors[inputInfo.name] ? true : false}
            endAdornment={
              inputInfo.type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </FormControl>
      )}
    />
  );

  return (
    <div className="form-div">
      <span className={`error-msg ${errors[inputInfo.name] ? "error" : "no-error"}`}>
        {errors[inputInfo.name]?.message}
      </span>
      {inputComponent}
    </div>
  );
};

export default CustomInputPasswordConfirm;
