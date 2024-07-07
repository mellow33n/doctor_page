import { useState } from "react";
import { InputLabel, Input, FormControl, FormHelperText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMaxDaysRange } from "../../../../store/Reducers/scheduleSettingsSlice";

export default function FirstStep() {
  const [inputValue, setValue] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const numberValidation = {
    required: "Поле не може бути пустим",
    pattern: {
      value: /^(?!0$)(?!-)(?!.*\..*$)\d+$/,
      message: "Число повинно бути більше нуля і не дробове",
    },
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);

    if (!value) {
      setError(numberValidation.required);
    } else if (!numberValidation.pattern.value.test(value)) {
      setError(numberValidation.pattern.message);
    } else {
      setError("");
      dispatch(setMaxDaysRange(value));
    }
  };

  return (
    <div className="form-div">
      <FormControl error={!!error}>
        <InputLabel htmlFor="input-adornment-maxDaysRange">
          Вести запис на N днів вперед
        </InputLabel>
        <Input
          id="input-adornment-maxDaysRange"
          type="number"
          placeholder="Введіть числo днів"
          value={inputValue}
          onChange={handleInputChange}
        />
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
}
