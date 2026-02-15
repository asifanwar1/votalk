import { StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export const useConversationItemStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        item: {
            backgroundColor: colors.card,
            borderRadius: 16,
            padding: 18,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: colors.border,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: colors.primary,
            shadowOpacity: 0.06,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 2 },
            elevation: 1,
        },
        itemIcon: {
            marginRight: 16,
        },
        itemContent: {
            flex: 1,
        },
        itemTitle: {
            color: colors.textPrimary,
            fontSize: 18,
            fontWeight: "bold",
        },
        itemPreview: {
            color: colors.textSecondary,
            fontSize: 14,
            marginTop: 2,
        },
        itemMeta: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 6,
        },
        itemDate: {
            color: colors.textSecondary,
            fontSize: 13,
            marginLeft: 4,
        },
        itemScore: {
            color: colors.success,
            fontSize: 13,
            marginLeft: 12,
        },
    });
};
