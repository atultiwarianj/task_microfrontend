import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(255, 142, 137)",
      light: "#fff",
      dark: "black",
      contrastText: "#787a7a",
    },
    secondary: {
      main: "#fff",
      light: "#fcf8de",
      contrastText: "#D3D3D3",
    },
    error: {
      main: red.A400,
      light: "#96c746",
    },
  },

  spacing: 10,

  typography: {
    fontFamily:
      "Times New Roman, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",

    h1: {
      fontSize: { xs: "40px", sm: "48px", md: "56px", lg: "64px" },
      fontWeight: 600,
    },
    h2: {
      fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "52px" },
      fontWeight: 545,
    },
    h3: {
      fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "40px" },
      fontWeight: 550,
      lineHeight: "46px",
      letterSpacing: "1px",
    },
    h4: {
      fontSize: { xs: "18px", sm: "22px", md: "24px", lg: "28px" },
      fontWeight: 600,
      lineHeight: "40px",
    },
    subtitle1: {
      fontSize: { xs: "12px", sm: "14px", md: "16px" },
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: { xs: "16px", sm: "18px", md: "20px" },
      fontWeight: 500,
    },
    body1: {
      fontSize: { xs: "14px", sm: "16px", md: "18px" },
      fontWeight: 400,
    },
    body2: {
      fontSize: { xs: "16px", sm: "18px", md: "20px" },
      fontWeight: 400,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
          textTransform: "capitalize",
          fontWeight: 600,
          "&:hover": { color: "primary.main" },
        },
      },
    },
  },
});

export default theme;
