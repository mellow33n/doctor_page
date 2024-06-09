import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputLabel, Input, FormControl } from "@mui/material";

export default function FirstStep() {
  const [inputValue, setValue] = React.useState("");
  const { control } = useFormContext();

  const handleInputChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const numberValidation = {
    required: "Поле не може бути пустим",
    pattern: {
      value: /^(?!0$)(?!-)(?!.*\..*$)\d+$/,
      message: "Число повинно бути більше нуля і не дробове",
    },
  };

  return (
    <div className="form-div">
      <Controller
        name="maxDaysRange"
        control={control}
        rules={numberValidation}
        render={({ field, fieldState: { error }}) => (
          <FormControl {...field}>
            <InputLabel htmlFor={`input-adornment-maxDaysRange`}>
              {"Вести запис на N днів вперед"}
            </InputLabel>
            <Input
              id={`input-adornment-maxDaysRange`}
              type={"number"}
              placeholder="Введіть числo днів"
              value={inputValue}
              onChange={handleInputChange}
              error={!!error}
            />
            <p className="error-msg">{error ?  error.message  : null}</p>
          </FormControl>
        )}
      />
    </div>
  );
}
