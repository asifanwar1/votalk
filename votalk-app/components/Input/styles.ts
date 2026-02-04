import { StyleSheet } from "react-native";
import { radius, spacing } from "../../theme";

export const createStyles = (colors: any) =>
    StyleSheet.create({
        wrapper: {
            backgroundColor: colors.inputBg,
            borderRadius: radius.lg,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: spacing.md,
        },
        input: {
            fontSize: 16,
            paddingVertical: spacing.md,
            color: colors.textPrimary,
        },
    });
