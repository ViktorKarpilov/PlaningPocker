import { useState } from "react";
import Button from "./Button";
import PopUp from "./PopUp";
import Switch from "./Switch";

interface BurgerState {
  opened: boolean,
  allowAnonymous: boolean,
  allowedChoices: string[],
}


function Burger() {
  var [burgerState, setState] = useState<BurgerState>({ opened: false, allowAnonymous: false, allowedChoices: ["1", "2"] });

  const toggleBurger = (event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setState({ ...burgerState, opened: !burgerState.opened });
  }

  const toggleBurgerEmpty = () => {
    setState({ ...burgerState, opened: !burgerState.opened});
  }

  const updateAllowAnonymous = () => {
    setState({ ...burgerState, allowAnonymous: !burgerState.allowAnonymous });
  }

  return (<div className="burger" onClick={toggleBurger}>
    BurgerIcon
      <Button onClick={toggleBurgerEmpty}><div>Burger</div></Button>
    {burgerState.opened &&
      <PopUp closeCallBack={toggleBurger} >
        <Switch isChecked={burgerState.allowAnonymous} onUpdateCallback={updateAllowAnonymous}>Allow anonymous</Switch>
        <Button>History</Button>
        <br/>

        <label>Allowed choices</label>
        <input type="text" role="listitem" value={burgerState.allowedChoices}/>

        <Button onClick={toggleBurgerEmpty}>Save</Button>
      </PopUp>}
  </div>)
}

export default Burger;

