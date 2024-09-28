export interface PopUpProps {
  closeCallBack: (event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>) => void,
  children: React.ReactNode,
}

const PopUp: React.FC<PopUpProps> = ({ closeCallBack, children }) => {

  return (<div className="blured" onClick={(event) => closeCallBack(event)}>
    <div className="popUp blured-background" onClick={(event) => event.stopPropagation()}>
      {children}
    </div>
  </div>)
}

export default PopUp;
