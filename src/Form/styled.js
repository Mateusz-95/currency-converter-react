import styled from "styled-components";

export const FormContent = styled.form`
  text-align: center;
`;

export const Text = styled.span`
  display: inline-block;
  max-width: 150px;
  margin-right: 10px;
`;

export const Field = styled.input`
  border: 1px solid #ccc;
  padding: 3px;
  width: 200px;
  border-radius: 5px;
  margin: 18px;

  &:hover {
    border-color: #777;
  }

  &:active {
    background-color: hsl(0, 53%, 90%);
  }
`;

export const Button = styled.button`
  width: 30%;
  border: none;
  background-color: teal;
  color: white;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: hsl(180, 100%, 30%);
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
  }
`;

export const Fieldset = styled.fieldset`
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Legend = styled.legend`
  background-color: hsl(180, 100%, 25%);
  color: white;
  border-radius: 5px;
  padding: 5px;
`;
