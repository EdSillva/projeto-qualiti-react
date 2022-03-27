import React from "react";
import InputMask from "react-input-mask";

const Input = (props) => (
    <InputMask mask="99:99" value={props.value} onChange={props.onChange} />
);

export default Input;