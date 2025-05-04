import { Button } from "@mui/material"

type Props = {
  label : string | number;
  className ?: string // optional : you can use this prop or not
}

const NumberButton = ({label, className} : Props) => {
  return (
    <Button
      className={className} 
      variant="contained"
      size="large"
      style={{background: "#f0e9e9", color: "#000", borderRadius: "30px", padding: "15px 0", fontWeight: "bold"}}
    >
      {label}
    </Button>
  ) 
}

export default NumberButton;