import { useState } from "react";
import PopUp from "../components/PopUp";

export interface JoinRoopPopUpProps {
  closeCallBack: (event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>) => void,
}

const JoinRoomPopUp: React.FC<JoinRoopPopUpProps> = ({ closeCallBack }) => {
  var [formState, setFormState] = useState({ username: "", roomId: 0, formId: 0 });

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

  return (<div className="JoinRoomPopUp">
    <PopUp closeCallBack={closeCallBack}>
      <form onSubmit={handleSubmit}>
        <label>
          Room ID:
          <input type="text" name="roomId" value={formState.roomId} onChange={handleInputChange} />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={formState.username} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Join</button>
      </form>
    </PopUp>
  </div>)
}

export default JoinRoomPopUp;
