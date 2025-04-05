import styled from "styled-components";

function Item({ children, checked, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} /> <span />
        <div> {children} </div>{" "}
      </label>{" "}
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      const max = options.max;

      if (answer.length >= max) {
        alert(`최대 ${max}개까지만 선택할 수 있습니다.`);
        return;
      }
      setAnswer([...answer, options.items[index]]);
    } else {
      setAnswer(answer.filter((item) => item !== options.items[index]));
    }
  };

  return (
    <SelectInputWrapper>
      {" "}
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            checked={answer.includes(item)}
            onChange={(e) => handleChange(e.target.checked, index)}
          >
            {" "}
            {item}{" "}
          </Item>
        );
      })}{" "}
    </SelectInputWrapper>
  );
}

const ItemWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type="checkbox"]:checked ~ span {
    width: 24px;
    height: 24px;
    border: 8px solid #6542f1;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
  }

  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type="checkbox"]:checked ~ div {
    font-weight: 700;
  }
`;

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default SelectInput;
