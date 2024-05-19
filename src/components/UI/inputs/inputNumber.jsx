import React from "react";
import { Controller } from "react-hook-form";
import {
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
} from "@mui/material";

const inputInfo = {
  name: "tel",
  isRequired: true,
  type: "tel",
  placeholder: "Введіть повний номер 380....",
  label: "Телефон",
};

const CustomInputNumberTel = (props) => {
  const { control, errors } = props.props;
  const [inputValue, setValue] = React.useState("");

  const handleInputChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const phoneNumberValidation = {
    required: "Обовʼязкове поле",
    pattern: {
      value: /^\d{12}$/,
      message:
        "Номер телефону має складатись з 12 цифр, наприклад: 380993334444",
    },
  };

  let inputComponent = (
    <Controller
      name={inputInfo.name}
      control={control}
      rules={phoneNumberValidation}
      render={({ field }) => (
        <FormControl {...field}>
          <InputLabel htmlFor={`input-adornment-${inputInfo.name}`}>
            {inputInfo.label}
          </InputLabel>
          <Input
            id={`input-adornment-${inputInfo.name}`}
            type={"number"}
            placeholder={inputInfo.placeholder}
            value={inputValue}
            onChange={handleInputChange}
            error={errors[inputInfo.name] ? true : false}
            startAdornment={
              <InputAdornment position="start">{"+"}</InputAdornment>
            }
          />
        </FormControl>
      )}
    />
  );

  return (
    <div className="form-div">
      <p className={`error-msg ${errors[inputInfo.name] ? "error" : "no-error"}`}>
        {errors[inputInfo.name]?.message}
      </p>
      {inputComponent}
    </div>
  );
};

export default CustomInputNumberTel;
