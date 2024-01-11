import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import CustomInput from "../../components/UI/input";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Button
} from "@mui/material";

const inputInfo = [
  {
    name: "tel",
    isRequired: true,
    type: "tel",
    placeholder: "Введіть повний номер без плюсу",
    label: "Телефон",
  },
  {
    name: "password",
    isRequired: true,
    type: "password",
    placeholder: "Вигадайте пароль",
    label: "Пароль",
  },
  {
    name: "acceptPassword",
    isRequired: true,
    type: "password",
    placeholder: "Продублюйте його",
    label: "Підтвердження паролю",
  },
  {
    name: "firstName",
    isRequired: true,
    type: "text",
    placeholder: "Введіть ваше імʼя",
    label: "Імʼя",
  },
  {
    name: "lastName",
    isRequired: true,
    type: "text",
    placeholder: "Введіть вашу фамілію",
    label: "Фамілія",
  },
  {
    name: "email",
    isRequired: false,
    type: "email",
    placeholder: "Введіть вашу пошту",
    label: "Пошта",
  },
  {
    name: "birthdayDate",
    isRequired: false,
    type: "date",
    placeholder: "ДД.ММ.РРРР",
    label: "Дата народження",
  },
];

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Ваша логіка асинхронної реєстрації тут
      const response = await axios.post("/api/register", data);

      // Обробка відповіді сервера або інші дії після успішної реєстрації
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Обробка помилки під час реєстрації
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputInfo.map((inputInfoItem, _, inputs) => {
        return (
          <div key={inputInfoItem.name}>
            <CustomInput props={{ inputInfoItem, control }} />
          </div>
        );
      })}
      <Controller
        name={"birthdayDate"}
        control={control}
        render={({ field }) => (
          <FormControl>
            <FormLabel id="radio-buttons-group-label">Стать</FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Жіноча"
              />
              <FormControlLabel value="male" control={<Radio />} label="Ч" />
            </RadioGroup>
          </FormControl>
        )}
      />
      {/* <Controller
        name={"birthdayDate"}
        control={control}
        render={({ field }) => (
          <FormControl>
            <FormLabel id="radio-buttons-group-label">Стать</FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Жіноча"
              />
              <FormControlLabel value="male" control={<Radio />} label="Ч" />
            </RadioGroup>
          </FormControl>
        )}
      /> */}
      <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          type="submit"
        >
          Sign up
        </Button>
      
    </form>
  );
};

export default RegistrationForm;
