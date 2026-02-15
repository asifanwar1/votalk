import { StyleSheet } from "react-native";

export const getStatsStyles = (colors: any) =>
    StyleSheet.create({
        statsRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        statsItem: {
            alignItems: "center",
            flex: 1,
        },
        statsValue: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 2,
        },
        statsLabel: {
            fontSize: 12,
            color: colors.textSecondary,
            textAlign: "center",
        },
        statsDivider: {
            width: 1,
            height: 40,
            backgroundColor: colors.border,
            marginHorizontal: 8,
        },
    });
