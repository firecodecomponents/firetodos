import Home from "./Pages/Home";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditTodo from "./Pages/EditTodo";
import TodoViewer from "./Pages/TodoViewer";
import Layout from "./data/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "./COLORS";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#494aa2",
      main: colors.primary,
    },
    secondary: {
      main: "#535591",
    },
    info: {
      main: "#f4a261",
    },
    warning: {
      main: "#e76f51",
    },
    yellow: { main: "#ffaf47" },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Inter"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/edit" element={<EditTodo />} />
              <Route path="/todos" element={<TodoViewer />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
