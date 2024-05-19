import React from "react";
import CustomInputText from "./inputText";



const inputInfo = {
  name: "lastName",
  isRequired: true,
  type: "text",
  placeholder: "Введіть вашу фамілію",
  label: "Фамілія",
};

function CustomInputLastName (props) {
    const {control, errors} = props.props;
    return <>
    <CustomInputText props={{ control, errors, inputInfo }}/>
    </>
}

export default CustomInputLastName