import Button from "../components/Button";
import { useState } from "react";
import JoinRoomPopUp from "./JoinRoomPopUp";
import CreateRoopPopUp from "./CreateRoomPopUp";
import Burger from "../components/Burger";

interface WelcomePageState {
  isCreateRoomPopUpOn: boolean,
  isJoinRoomPopUpOn: boolean,
}

function WelcomePage() {
  var [state, setState] = useState<WelcomePageState>({ isCreateRoomPopUpOn: false, isJoinRoomPopUpOn: false});

  const handleOpenJoinRoom = () => {
    setState({ ...state, isJoinRoomPopUpOn: true });
  }

  const handleOpenCreateRoom = () => {
    setState({ ...state, isCreateRoomPopUpOn: true });
  }

  const closePopUps = () => {
    setState({ isCreateRoomPopUpOn: false, isJoinRoomPopUpOn: false});
  }

  const closePopUpsOnEvents = (event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    closePopUps();
  }

  return (
    <div className="container-lg mx-auto">
      <div className="text-6xl font-extrabold font-serif text-center">Welcome to fortress planing poker</div>
      <br />
      <Button className="primary" onClick={handleOpenJoinRoom}>Open join room</Button>
      <br />
      <Button onClick={handleOpenCreateRoom}><div>Open create room</div></Button>

      {state.isJoinRoomPopUpOn && <JoinRoomPopUp closeCallBack={closePopUpsOnEvents} />}
      {state.isCreateRoomPopUpOn && <CreateRoopPopUp closeCallBack={closePopUpsOnEvents} />}
      <Burger/>

    </div>
  )
}

export default WelcomePage;
