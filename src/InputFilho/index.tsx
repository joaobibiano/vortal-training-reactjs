import React from "react";

interface IProps {
  value: string;
  onChangeCallback(value: string): void;
}

function InputFilho(props: IProps) {
  return (
    <input
      value={props.value}
      onChange={(ev) => props.onChangeCallback(ev.target.value)}
    />
  );
}

export default InputFilho;
