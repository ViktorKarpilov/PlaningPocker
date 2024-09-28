import React from "react";

interface SwitchProps{
  onUpdateCallback: () => void,
  isChecked: boolean,
  children: JSX.Element | string,
}

export default function Switch(props:SwitchProps) {
  
  return (<label htmlFor="switch" className="gui-switch">
    {props.children}
    <input type="checkbox" role="switch" checked={props.isChecked} onChange={props.onUpdateCallback}/>
  </label>)

}
