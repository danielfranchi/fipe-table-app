import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const MyStyledButton = styled(Button)(({ disabled }) => ({
  width: "200px",
  height: "40px",
  borderRadius: "5px",
  marginTop: "1rem",
  backgroundColor: disabled ? "#e0e0e0" : "#5d00bf",
  color: disabled ? "#b9b9be" : "#fff",
  "&:hover": {
    backgroundColor: disabled ? "#e0e0e0" : "#5d00bf",
  },
}));
