import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/colors";

export const useOtpInputStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        otpRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 24,
        },
        otpInput: {
            width: 56,
            height: 56,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.inputBackground,
            textAlign: "center",
            fontSize: 24,
            color: colors.textPrimary,
        },
    });
