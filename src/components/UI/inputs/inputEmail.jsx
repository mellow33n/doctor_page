import React from "react";
import { Controller } from "react-hook-form";
import {
  InputLabel,
  Input,
  FormControl,
} from "@mui/material";

const inputInfo = {
  name: "email",
  isRequired: false,
  type: "email",
  placeholder: "Введіть вашу пошту",
  label: "Пошта",
};

const CustomInputEmail = (props) => {
  const { control, errors } = props.props;
  const [inputValue, setValue] = React.useState("");

  const handleInputChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const emailValidation = {
    required: false,
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message:
        "Перевірьте будь ласка корректність написанного email, здається тут є помилка",
    },
  };

  let inputComponent = (
    <Controller
      name={inputInfo.name}
      control={control}
      rules={emailValidation}
      render={({ field }) => (
        <FormControl {...field}>
          <InputLabel htmlFor={`input-adornment-${inputInfo.name}`}>
            {inputInfo.label}
          </InputLabel>
          <Input
            id={`input-adornment-${inputInfo.name}`}
            type={inputInfo.type}
            placeholder={inputInfo.placeholder}
            value={inputValue}
            onChange={handleInputChange}
            error={errors[inputInfo.name] ? true : false}
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

export default CustomInputEmail;
