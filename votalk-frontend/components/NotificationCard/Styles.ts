import { StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export const useNotificationCardStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        notificationCard: {
            backgroundColor: colors.card,
            borderRadius: 16,
            padding: 18,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: colors.border,
            shadowColor: colors.primary,
            shadowOpacity: 0.06,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 2 },
            elevation: 1,
        },
        notificationTitle: {
            color: colors.textPrimary,
            fontSize: 17,
            fontWeight: "bold",
            marginBottom: 4,
        },
        notificationBody: {
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 8,
        },
        notificationDate: {
            color: colors.textSecondary,
            fontSize: 13,
        },
    });
};
