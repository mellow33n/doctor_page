import CustomInputSecretAnswear from "./inputSecretAnswear";
import CustomInputSelect from "./inputSelect";





function InputSecretQuestion(props) {
  const { control, errors } = props.props;
  


  return (
    <div className="form-div">
      <CustomInputSelect props = {{control, errors}}/>
      <CustomInputSecretAnswear props = {{control, errors}} />
    </div>
  );
}

export default InputSecretQuestion;
