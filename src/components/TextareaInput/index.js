import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 12px 18px;
  box-sizing: border-box;
  font-size: 18px;
  outline: none;
  height: 200px;
  resize: none;

  &:focus {
    border-color: #2196f3;
  }
`;

function TextareaInput({ answer, setAnswer, options }) {
  return (
    <Input
      type="textarea"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder={options.placeholder}
    />
  );
}

export default TextareaInput;
