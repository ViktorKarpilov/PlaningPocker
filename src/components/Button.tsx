import "../style/button.css"

interface ButtonProps {
  children: JSX.Element | string,
  className?: string,
  onClick?: () => void,
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (<button className={className} onClick={onClick} >{children}</button>)
}
