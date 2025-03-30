import SelectInput from "../SelectInput";
import TextareaInput from "../TextareaInput";
import TextInput from "../TextInput";

function Body({ type, answer, setAnswer }) {
  let InputComponent = null;
  if (type === "select") {
    InputComponent = SelectInput;
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
    InputComponent = TextareaInput;
  }

  return <div> {InputComponent && <InputComponent answer={answer} setAnswer={setAnswer} />} </div>;
}

export default Body;
