import { createTheme } from "@mui/material";


export const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  export const LightTheme = createTheme({
    palette: {
      mode: "light",
      background:{
        default:"black"
      }
    },
  });