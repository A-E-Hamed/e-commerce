import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      bg: "#ffffff",
      text: "#121212",
      primary: "#121212",
      secondary: "#121212",
    },
    dark: {
      bg: "#121212",
      text: "#ffffff",
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? theme.colors.dark.bg : theme.colors.light.bg,
        color: props.colorMode === "dark" ? theme.colors.dark.text : theme.colors.light.text,
      },
    }),
  },
  
});

export default theme;
