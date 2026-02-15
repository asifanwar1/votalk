import { StyleSheet } from "react-native";

export const getStatsStyles = (colors: any) =>
    StyleSheet.create({
        trustRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        trustItem: {
            alignItems: "center",
            flex: 1,
        },
        trustValue: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 2,
        },
        trustLabel: {
            fontSize: 12,
            color: colors.textSecondary,
            textAlign: "center",
        },
        trustDivider: {
            width: 1,
            height: 40,
            backgroundColor: colors.border,
            marginHorizontal: 8,
        },
    });
