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

export const useLearnStyles = () => {
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
            marginBottom: 24,
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
        headerText: {
            flexDirection: "column",
            wordWrap: "break-word",
            flexShrink: 1,
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
            flexShrink: 0,
        },
        section: {
            paddingHorizontal: 24,
            marginTop: 4,
        },
        card: {
            borderRadius: 20,
            padding: 20,
            marginBottom: 16,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },
            elevation: 2,
        },
        orangePinkGradient: {
            backgroundColor: colors.orangePink,
        },
        cyanBlueGradient: {
            backgroundColor: colors.cyanBlue,
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            marginBottom: 8,
        },
        cardTitle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#fff",
            marginLeft: 8,
        },
        cardDesc: {
            fontSize: 14,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 16,
        },
        cardButton: {
            backgroundColor: "rgba(255,255,255,0.2)",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 10,
            alignSelf: "flex-start",
        },
        cardButtonText: {
            color: "#fff",
            fontWeight: "500",
            fontSize: 14,
        },
        vocabCard: {
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: colors.border,
            shadowOpacity: 0.04,
        },
        vocabTitle: {
            color: colors.textPrimary,
            marginBottom: 12,
        },
        vocabRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: colors.inputBackground,
        },
        vocabWord: {
            color: "#334155",
            fontSize: 15,
        },
        vocabReview: {
            color: colors.secondary,
            fontSize: 14,
            fontWeight: "500",
        },
    });
};

export const useProgressStyles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            flex: 1,
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
        },
        headerText: {
            flex: 1,
        },
        headerTitle: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "bold",
        },
        headerSubtitle: {
            color: "rgba(255,255,255,0.85)",
            fontSize: 14,
            marginTop: 2,
        },
        trophyContainer: {
            width: 48,
            height: 48,
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
        },
        section: {
            paddingHorizontal: 24,
            marginTop: 24,
        },
        levelCard: {
            backgroundColor: colors.progressLevel,
            borderRadius: 20,
            padding: 24,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },
            elevation: 2,
        },
        levelRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
        },
        levelNumber: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "bold",
        },
        levelLabel: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 15,
            marginTop: 2,
        },
        progressBarBg: {
            backgroundColor: colors.progressBarBg,
            borderRadius: 8,
            height: 8,
            marginBottom: 8,
            overflow: "hidden",
        },
        progressBarFill: {
            backgroundColor: colors.progressBar,
            height: 8,
            borderRadius: 8,
        },
        progressText: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 12,
        },
        statsCard: {
            backgroundColor: colors.statsCard,
            borderRadius: 20,
            padding: 20,
            marginBottom: 16,
            shadowColor: "#000",
            shadowOpacity: 0.04,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 1 },
            elevation: 1,
            borderWidth: 1,
            borderColor: colors.statsCardBorder,
        },
        statsTitle: {
            fontWeight: "600",
            fontSize: 18,
            color: colors.statsTitle,
            marginBottom: 16,
        },
        statsGrid: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
        },
        statBox: {
            flexBasis: "48%",
            alignItems: "center",
            paddingVertical: 16,
            borderRadius: 14,
            marginBottom: 12,
        },
        statValue: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 4,
        },
        statLabel: {
            fontSize: 13,
            color: colors.textSecondary,
            textAlign: "center",
        },
    });
};
