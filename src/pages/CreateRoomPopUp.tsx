import { useState } from "react";
import PopUp from "../components/PopUp";
import "../style/popUp.css";

export interface CreateRoopPopUpProps {
  closeCallBack: (event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>) => void,
}

const CreateRoopPopUp: React.FC<CreateRoopPopUpProps> = ({ closeCallBack }) => {
  var [formState, setFormState] = useState({ username: "", formId: 0 });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    closeCallBack(event);
    // onSubmit(formState);
  }

  return (
    <div className="createPopUp">
      <PopUp closeCallBack={closeCallBack}>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={formState.username} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Create</button>
        </form>
      </PopUp>
    </div>
  )
}

export default CreateRoopPopUp;
