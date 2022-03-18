import { DefaultTheme, DarkTheme } from "react-native-paper"

export const Ligth = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#5F9EA0",
        accent: "	#66CDAA",
        background: "E1E1E1",
        surface: "#F3F3F3",
        text: "#232323"
    }
}

export const Dark = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary: "#008080",
        accent: "	#008B8B",
        background: "#20B2AA",
        surface: "#F3F3F3",
        text: "#F3F3F3"
    }
}