import { Button } from "@mui/material"

type NumberButtonProps = {
  number : number;
}

const NumberButton = ({number} : NumberButtonProps) => {
  return (
    <Button 
      variant="contained"
      size="large"
      style={{background: "#f0e9e9", color: "#000", borderRadius: "35px", padding: "15px 0", fontWeight: "bold"}}
    >
      {number}
    </Button>
  ) 
}

export default NumberButton;