import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

const inputInfo = {
  name: "secretQuestion",
  isRequired: true,
  type: "select",
  label: "Секретне питання",
  helperText:
      "Оберіть питання, відповідь на нього Вам знадобиться у випадку, якщо треба буде відновити пароль",
  helperTextError:"Оберіть одне з питань",
  questions: {
    mother: "Дівоча фамілія мами",
    pet: "Імʼя домашнього улюблинця",
    street: "Назва вулиці, на якій Ви зростали",
    school: "Рік випуску зі школи",
    car: "Марка першої автівки",
    
  },
};

function CustomInputSelect(props) {
  const [question, setQuestion] = React.useState("");
  const { control, errors } = props.props;
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };
  const textValidation = {
    required: true,
    pattern: {
      value: /^(?!null$|undefined$).*$/,
      message: "Оберіть одне з питань",
    },
  }

  let inputComponent = (
    <Controller
      name={inputInfo.name}
      control={control}
      rules={textValidation}
      render={({ field }) => (
        <FormControl {...field}>
          <InputLabel id={inputInfo.label + "ID"}>{inputInfo.label}</InputLabel>
          <Select
            labelId={inputInfo.label}
            id={inputInfo.label}
            value={question}
            label={inputInfo.label}
            onChange={(e) => {
              handleChange(e);
              field.onChange(e);
            }}
            error={errors[inputInfo.name] ? true : false}
          >
            <MenuItem value={null} disabled>
              <em>None</em>
            </MenuItem>
            <MenuItem value={inputInfo.questions.mother}>{inputInfo.questions.mother}</MenuItem>
            <MenuItem value={inputInfo.questions.pet}>{inputInfo.questions.pet}</MenuItem>
            <MenuItem value={inputInfo.questions.street}>{inputInfo.questions.street}</MenuItem>
            <MenuItem value={inputInfo.questions.school}>{inputInfo.questions.school}</MenuItem>
            <MenuItem value={inputInfo.questions.car}>{inputInfo.questions.car}</MenuItem>
          </Select>
          <FormHelperText>{errors[inputInfo.name] ? inputInfo.helperTextError : inputInfo.helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );

  return (
    <>
      <span
        className={`error-msg ${errors[inputInfo.name] ? "error" : "no-error"}`}
      >
        {errors[inputInfo.name]?.message}
      </span>
      {inputComponent}
    </>
  );
}

export default CustomInputSelect;
