import React from "react";
import CustomInputText from "./inputText";



const inputInfo = {
  name: "secretAnswear",
  isRequired: true,
  type: "text",
  placeholder: "Введіть секретну відповідь",
  label: "Секретна відповідь",
};

function CustomInputSecretAnswear (props) {
    const {control, errors} = props.props;
    return <>
    <CustomInputText props={{ control, errors, inputInfo }}/>
    </>
}

export default CustomInputSecretAnswear