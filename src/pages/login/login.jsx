
import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import CustomInputNumberTel from "../../components/UI/inputs/inputNumber";
import CustomInputPassword from "../../components/UI/inputs/inputPassword";
import { getLogin } from "../../api/users";

import { Button } from "@mui/material";



const Login = () => {
  const [loginError, setLoginError] = useState("");
  const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      console.log('request:', data);
      try {
        const login = await getLogin(data);
        console.log('response:',login);
        const isSucces = login._id ? true:false ;
        if (isSucces) {
          navigate('/')
          return
        }
        
        const is500Error = login.response.status === 500 ?? false;
        if (is500Error) {
          setLoginError(`${login.response.data.error}`);
          return
        }
  
      } catch (error) {
        setLoginError(`Особистий кабінет тимчасово недоступний, зверніться будь-ласка до адміністратора.`)
      } 
    }


    return (
      <form id="ss" onSubmit={handleSubmit(onSubmit)} className="reg-form">
        <h2>Форма для входу в кабінет</h2>
        <p className="error-msg">{loginError}</p>
        <CustomInputNumberTel props={{ control, errors }}/>
        <CustomInputPassword props={{ control, errors }} />
        <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          handleSubmit(onSubmit)(e);
        }}
        type="submit"
      >
        Увійти
      </Button>
      <Button
        color="primary"
        onClick={() => {
          navigate('/registration')
        }}
        type="button"
      >
        Зареєструватись
      </Button>
        
      </form>
    )

}


export default Login;