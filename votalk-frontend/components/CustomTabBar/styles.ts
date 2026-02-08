import { StyleSheet, Platform } from "react-native";

export const createStyles = (colors: any) =>
    StyleSheet.create({
        tabBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: Platform.OS === "ios" ? 24 : 10,
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#e5e7eb",
            height: 92,
        },
        tab: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        label: {
            fontSize: 13,
            color: "#64748b",
            marginTop: 4,
        },
        labelFocused: {
            color: colors.primary,
            fontWeight: "bold",
        },
        centerTabWrapper: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: -24,
        },
        centerTab: {
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#6366f1",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 8,
        },
    });
