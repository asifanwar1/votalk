import { useColorScheme } from "react-native";
import { LightColors, DarkColors } from "../theme/colors";

export const useTheme = () => {
    const scheme = useColorScheme();

    return {
        colors: scheme === "dark" ? DarkColors : LightColors,
        isDark: scheme === "dark",
    };
};
