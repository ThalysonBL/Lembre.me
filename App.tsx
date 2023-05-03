import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home/index";
import { Login } from "./src/screens/Login/index";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import Routes from './src/Routes/index';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const { fontsLoaded } = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
