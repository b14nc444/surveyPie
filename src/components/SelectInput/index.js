import styled from "styled-components";

const ItemWrapper = styled.div `
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

const SelectInputWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function Item({ children, onChange }) {
    return ( <
        ItemWrapper >
        <
        label >
        <
        input type = "checkbox"
        onChange = { onChange }
        /> <span / >
        <
        div > { children } < /div>{" "} <
        /label>{" "} <
        /ItemWrapper>
    );
}

function SelectInput({ answer, setAnswer, options }) {
    const handleChange = (checked, index) => {
        if (checked) {
            setAnswer([...answer, options.items[index]]);
        } else {
            setAnswer(answer.filter(item => item !== options.items[index]));
        }
        console.log(answer);
    };

    return ( <
        SelectInputWrapper > { " " } {
            options.items.map((item, index) => {
                return ( <
                    Item key = { index }
                    onChange = { e => handleChange(e.target.checked, index) } > { " " } { item } { " " } <
                    /Item>
                );
            })
        } { " " } <
        /SelectInputWrapper>
    );
}

export default SelectInput;