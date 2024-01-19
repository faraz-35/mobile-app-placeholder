import { PRIMARY_COLOR } from "@src/constants/styles";
import { extendTheme } from "native-base";

const nativeBaseTheme = extendTheme({
  components: {
    colors: {
      primary: {
        50: PRIMARY_COLOR,
        100: PRIMARY_COLOR,
        200: PRIMARY_COLOR,
        300: PRIMARY_COLOR,
        400: PRIMARY_COLOR,
        500: PRIMARY_COLOR,
        600: PRIMARY_COLOR,
        700: PRIMARY_COLOR,
        800: PRIMARY_COLOR,
        900: PRIMARY_COLOR,
      },
    },
    Input: {
      baseStyle: {
        innerHeight: "50px",
      },
      defaultProps: {
        variant: "filled",
        size: "md",
        bg: "black",
        _focus: {
          bg: "black",
          color: "white",
        },
        _hover: {
          bg: "black",
          color: "white",
        },
      },
    },
    Button: {
      baseStyle: {
        innerHeight: "50px",
      },
      defaultProps: {
        bg: PRIMARY_COLOR,
        borderRadius: "md",
        _hover: {
          bg: PRIMARY_COLOR,
          shadow: "4",
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Inter",
      },
    },
  },
});

export default nativeBaseTheme;
