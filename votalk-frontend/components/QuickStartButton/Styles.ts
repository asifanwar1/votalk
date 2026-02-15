import { StyleSheet } from "react-native";

export const quickStartButtonStyles = StyleSheet.create({
    quickStartButton: {
        borderRadius: 16,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    quickStartContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    quickStartLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    micContainer: {
        width: 48,
        height: 48,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    quickStartTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    quickStartSubtitle: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 14,
    },
});
