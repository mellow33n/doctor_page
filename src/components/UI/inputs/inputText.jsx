import React from "react";
import { Controller } from "react-hook-form";
import { InputLabel, Input, FormControl } from "@mui/material";

const CustomInputText = (props) => {
  const { control, errors, inputInfo } = props.props;

  const [text, setText] = React.useState("");
  const handleInputChange = React.useCallback((event) => {
    setText(event.target.value);
  }, []);
  const textValidation = {
    required: 'Це обовʼязкове поле',
    pattern: {
      message: "Це поле необхідно заповнити",
    },
  };
  let inputComponent = (
  <Controller
    name={inputInfo.name}
    control={control}
    rules={textValidation}
    render={({ field }) => (
      <FormControl {...field}>
        <InputLabel htmlFor={`input-adornment-${inputInfo.name}`}>
          {inputInfo.label}
        </InputLabel>
        <Input
          id={`input-adornment-${inputInfo.name}`}
          type="text"
          placeholder={inputInfo.placeholder}
          value={text}
          onChange={handleInputChange}
          error={errors[inputInfo.name] ? true : false}
        />
      </FormControl>
    )}
  />);

  return (
    <div className="form-div">
      <p className={`error-msg ${errors[inputInfo.name] ? "error" : "no-error"}`}>
        {errors[inputInfo.name]?.message}
      </p>
      {inputComponent}
    </div>
  );
};

export default CustomInputText;
