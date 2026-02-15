import { StyleSheet } from "react-native";

export const sessionCardStyles = (colors: any) =>
    StyleSheet.create({
        sessionCard: {
            backgroundColor: colors.card,
            borderRadius: 12,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
            borderWidth: 1,
            borderColor: colors.border,
        },
        sessionContent: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        sessionLeft: {
            flex: 1,
        },
        sessionTopic: {
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
        },
        sessionTime: {
            fontSize: 14,
            color: colors.textSecondary,
            marginTop: 2,
        },
        sessionRight: {
            alignItems: "flex-end",
        },
        sessionScore: {
            fontSize: 24,
            fontWeight: "bold",
            color: colors.primary,
        },
        improvementContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginTop: 2,
        },
        improvementText: {
            fontSize: 12,
            color: colors.improvement,
        },
    });
