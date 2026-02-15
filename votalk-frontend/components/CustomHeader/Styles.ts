import { StyleSheet } from "react-native";

export const createHeaderStyles = (colors: { primary: string }) =>
    StyleSheet.create({
        header: {
            paddingTop: 10,
            paddingBottom: 24,
            paddingHorizontal: 24,
            backgroundColor: colors.primary,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            height: 180,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        headerTitle: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "bold",
        },
        backBtn: {
            backgroundColor: colors.primary,
            borderRadius: 16,
            paddingVertical: 4,
            alignItems: "center",
            flexDirection: "row",
            gap: 6,
        },
        backBtnText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
        },
    });
