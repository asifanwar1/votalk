import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/colors";

export const useCustomInputStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        label: {
            fontSize: 14,
            fontWeight: "500",
            color: colors.textSecondary,
            marginBottom: 8,
        },
        inputWrapper: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.inputBackground,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: 12,
            paddingVertical: 4,
            position: "relative",
        },
        inputIcon: {
            marginRight: 8,
        },
        input: {
            flex: 1,
            paddingVertical: 12,
            fontSize: 16,
            color: colors.textPrimary,
        },
        eyeButton: {
            padding: 4,
        },
    });
