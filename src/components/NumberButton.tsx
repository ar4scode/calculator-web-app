import { Button } from "@mui/material"

type NumberButtonProps = {
  number : number;
}

const NumberButton = ({number} : NumberButtonProps) => {
  return (
    <Button variant="outlined" color="secondary" size="large">{number}</Button>
  ) 
}

export default NumberButton;