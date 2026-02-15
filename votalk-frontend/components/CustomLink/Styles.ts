import { StyleSheet } from "react-native";

export const customLinkStyles = StyleSheet.create({
    customLinkItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 18,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
        borderWidth: 1,
        borderColor: "#e5e7eb",
    },
    customLinkLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    customLinkLabel: {
        fontSize: 16,
        color: "#1e293b",
        fontWeight: "500",
    },
});
