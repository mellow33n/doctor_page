import React from "react";
import CustomInputText from "./inputText";



const inputInfo = {
    name: "firstName",
    isRequired: true,
    type: "text",
    placeholder: "Введіть ваше імʼя",
    label: "Імʼя",
  }

function CustomInputFirstName (props) {
    const {control, errors} = props.props;
    

    return <>
    <CustomInputText props={{ control, errors, inputInfo }}/>
    </>
}

export default CustomInputFirstName