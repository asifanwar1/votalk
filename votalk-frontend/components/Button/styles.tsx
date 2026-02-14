import { ThemeColors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const createButtonStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        button: {
            backgroundColor: colors.primary,
            borderRadius: 16,
            paddingVertical: 16,
            alignItems: "center",
            marginBottom: 16,
            shadowColor: colors.primary,
            shadowOpacity: 0.2,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            elevation: 2,
        },
        text: {
            color: colors.textPrimary,
            fontWeight: "600",
            fontSize: 16,
        },
    });
