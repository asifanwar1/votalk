import { StyleSheet } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

export const useHomeStyles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scrollView: {
            flex: 1,
        },
        scrollContent: {
            paddingBottom: 96,
        },
        header: {
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            paddingHorizontal: 24,
            paddingTop: 60,
            paddingBottom: 32,
        },
        headerTop: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
        },
        headerTitle: {
            color: colors.background,
            fontSize: 28,
            fontWeight: "bold",
        },
        headerSubtitle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 14,
        },
        trophyContainer: {
            width: 48,
            height: 48,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
        },
        statsCard: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.2)",
        },
        statsRow: {
            flexDirection: "row",
            justifyContent: "space-around",
        },
        statItem: {
            alignItems: "center",
            flex: 1,
        },
        statItemBorder: {
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.2)",
        },
        statValue: {
            color: "#fff",
            fontSize: 24,
            fontWeight: "bold",
        },
        statLabel: {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: 12,
        },
        section: {
            paddingHorizontal: 24,
            marginTop: 24,
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: "bold",
            color: colors.textPrimary,
            marginBottom: 16,
        },
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
        modesGrid: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
        },
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
            color: colors.card,
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 4,
        },
        modeDesc: {
            color: colors.card,
            fontSize: 12,
            textAlign: "center",
        },

        sessionsList: {
            gap: 12,
        },
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
};
