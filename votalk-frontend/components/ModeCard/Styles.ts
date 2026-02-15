import { StyleSheet } from "react-native";

export const modeCardStyles = StyleSheet.create({
    modeButtonWrapper: {
        width: "48%",
    },
    modeButton: {
        borderRadius: 16,
        padding: 10,
        height: 150,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    modeIcon: {
        fontSize: 32,
        marginBottom: 8,
    },
    modeTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 4,
    },
    modeDesc: {
        color: "#fff",
        fontSize: 12,
        textAlign: "center",
    },
});
