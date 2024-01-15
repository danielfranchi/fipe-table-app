import { DataObject } from "@/types/select";
import { Autocomplete, TextField, styled } from "@mui/material";

export const MyStyledAutocomplete = styled(Autocomplete<DataObject>)({
  width: "400px",
  borderColor: "#ededed",
  backgroundColor: "#ffffff",
  color: "#8d909b",
  /*  "&:hover": {
      backgroundColor: "#ffffff",
    }, */
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#ededed",
    },
    "&.Mui-focused:hover fieldset": {
      borderColor: "#ededed",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ededed",
    },
  },
});
