import "./registration.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import CustomRadioGroup from "../../components/UI/radio_group";
import { Button } from "@mui/material";
import { addNewUser } from "../../api/users";
import { useNavigate } from "react-router";
import CustomInputNumberTel from "../../components/UI/inputs/inputNumber";
import CustomInputPassword from "../../components/UI/inputs/inputPassword";
import CustomInputPasswordConfirm from "../../components/UI/inputs/inputPasswordConfirm";
import CustomInputText from "../../components/UI/inputs/inputText";
import CustomInputEmail from "../../components/UI/inputs/inputEmail";
import InputSecretQuestion from "../../components/UI/inputs/inputSecretQuestion";
import CustomInputFirstName from "../../components/UI/inputs/inputFirstName";
import CustomInputLastName from "../../components/UI/inputs/inputLastName";




const radioGroupInfo = {
  name: "gender",
  isRequired: false,
  type: "radio",
  label: "Стать",
  labelValueOne: "Дівчина",
  labelValueTwo: "Чоловік",
};

const RegistrationForm = () => {
  const [formError, setFormError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onSubmit = async (data) => {
    setFormError("");
     try {
      const newUser = await addNewUser(data);
      const isSucces = newUser._id ? true:false ;
      if (isSucces) {
        navigate('/registration/succes')
        return
      }
      console.log(newUser);
      
      const is500Error = newUser.response.status === 500 ?? false;
      if (is500Error) {
        setFormError(`${newUser.response.data.error}`);
        return
      }

    } catch (error) {
      setFormError(`Помилка реєстрації. Будь ласка, спробуйте ще раз. Якщо помилка повториться - зверніться до адміністратора.`)
    } 
  }; 

  return (
    <form id="ss" onSubmit={handleSubmit(onSubmit)} className="reg-form">
      <h3>Форма реєстрації</h3>
      <p className="error-msg">{formError}</p>
      <CustomInputNumberTel props={{ control, errors }} />
      <CustomInputPassword props={{ control, errors }} />
      <CustomInputPasswordConfirm props={{ control, errors, getValues }}/>
      <CustomInputFirstName props={{ control, errors }}/>
      <CustomInputLastName props={{ control, errors }}/>
      <CustomInputEmail props={{ control, errors }}/>
      <CustomRadioGroup key={radioGroupInfo.name} props={{ radioGroupInfo, control }}/>
      <InputSecretQuestion props = {{control, errors}}/> 
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          scrollToTop();
          handleSubmit(onSubmit)(e);
        }}
        type="submit"
        id="scrollToError"
      >
        Реєстрація
      </Button>
    </form>
  );
};

export default RegistrationForm;
