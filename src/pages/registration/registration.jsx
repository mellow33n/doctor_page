import "./registration.scss"
import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import CustomInput from "../../components/UI/input";
import CustomRadioGroup from "../../components/UI/radio_group";
import {
  Button,
} from "@mui/material";

const inputInfo = [
  {
    name: "tel",
    isRequired: true,
    type: "tel",
    placeholder: "Введіть повний номер 380....",
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
const radioGroupInfo = {
  name: "gender",
  isRequired: false,
  type: "radio",
  label: "Стать",
  labelValueOne: "Дівчина",
  labelValueTwo: "Чоловік",
};

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (data) => {
    /* try {
      // Ваша логіка асинхронної реєстрації тут
      const response = await axios.post("/api/register", data);

      // Обробка відповіді сервера або інші дії після успішної реєстрації
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Обробка помилки під час реєстрації
      console.error("Registration failed:", error.message);
    } */
    console.log(data);
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
      <h3>Форма реєстрації</h3>
      {inputInfo.map((inputInfoItem) => {
        return (
            <CustomInput key={inputInfoItem.name} props={{ inputInfoItem, control, errors }} />
        );
      })}
        <CustomRadioGroup key={radioGroupInfo.name} props={{ radioGroupInfo, control }}/>

      

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        type="submit"
      >
        Реєстрація
      </Button>
    </form>
  );
};

export default RegistrationForm;
