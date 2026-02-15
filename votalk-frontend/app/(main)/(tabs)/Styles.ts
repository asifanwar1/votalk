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
            paddingBottom: 50,
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
        // statItem: {
        //     alignItems: "center",
        //     flex: 1,
        // },
        // statItemBorder: {
        //     borderLeftWidth: 1,
        //     borderRightWidth: 1,
        //     borderColor: "rgba(255, 255, 255, 0.2)",
        // },
        // statValue: {
        //     color: "#fff",
        //     fontSize: 24,
        //     fontWeight: "bold",
        // },
        // statLabel: {
        //     color: "rgba(255, 255, 255, 0.7)",
        //     fontSize: 12,
        // },
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
        // quickStartButton: {
        //     borderRadius: 16,
        //     padding: 24,
        //     shadowColor: "#000",
        //     shadowOffset: { width: 0, height: 4 },
        //     shadowOpacity: 0.1,
        //     shadowRadius: 8,
        //     elevation: 4,
        // },
        // quickStartContent: {
        //     flexDirection: "row",
        //     alignItems: "center",
        //     justifyContent: "space-between",
        // },
        // quickStartLeft: {
        //     flexDirection: "row",
        //     alignItems: "center",
        //     gap: 12,
        // },
        // micContainer: {
        //     width: 48,
        //     height: 48,
        //     backgroundColor: "rgba(255, 255, 255, 0.2)",
        //     borderRadius: 24,
        //     alignItems: "center",
        //     justifyContent: "center",
        // },
        // quickStartTitle: {
        //     color: "#fff",
        //     fontSize: 18,
        //     fontWeight: "600",
        // },
        // quickStartSubtitle: {
        //     color: "rgba(255, 255, 255, 0.8)",
        //     fontSize: 14,
        // },
        modesGrid: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
        },
        // modeButtonWrapper: {
        //     width: "48%",
        // },
        // modeButton: {
        //     borderRadius: 16,
        //     padding: 10,
        //     height: 150,
        //     shadowColor: "#000",
        //     shadowOffset: { width: 0, height: 2 },
        //     shadowOpacity: 0.1,
        //     shadowRadius: 4,
        //     elevation: 3,
        //     alignItems: "center",
        //     justifyContent: "center",
        // },
        // modeIcon: {
        //     fontSize: 32,
        //     marginBottom: 8,
        // },
        // modeTitle: {
        //     color: colors.card,
        //     fontSize: 18,
        //     fontWeight: "600",
        //     marginBottom: 4,
        // },
        // modeDesc: {
        //     color: colors.card,
        //     fontSize: 12,
        //     textAlign: "center",
        // },

        sessionsList: {
            gap: 12,
        },
        // sessionCard: {
        //     backgroundColor: colors.card,
        //     borderRadius: 12,
        //     padding: 16,
        //     shadowColor: "#000",
        //     shadowOffset: { width: 0, height: 1 },
        //     shadowOpacity: 0.05,
        //     shadowRadius: 2,
        //     elevation: 1,
        //     borderWidth: 1,
        //     borderColor: colors.border,
        // },
        // sessionContent: {
        //     flexDirection: "row",
        //     alignItems: "center",
        //     justifyContent: "space-between",
        // },
        // sessionLeft: {
        //     flex: 1,
        // },
        // sessionTopic: {
        //     fontSize: 16,
        //     fontWeight: "600",
        //     color: colors.textPrimary,
        // },
        // sessionTime: {
        //     fontSize: 14,
        //     color: colors.textSecondary,
        //     marginTop: 2,
        // },
        // sessionRight: {
        //     alignItems: "flex-end",
        // },
        // sessionScore: {
        //     fontSize: 24,
        //     fontWeight: "bold",
        //     color: colors.primary,
        // },
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
            paddingBottom: 50,
        },
        header: {
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            paddingHorizontal: 24,
            paddingTop: 60,
            paddingBottom: 32,
            marginBottom: 24,
            height: 180,
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
            paddingBottom: 50,
        },
        header: {
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            paddingHorizontal: 24,
            paddingTop: 60,
            paddingBottom: 32,
            height: 180,
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
            gap: 1,
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
        achievementsGrid: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "space-between",
        },
        achievementCard: {
            borderRadius: 16,
            padding: 16,
            alignItems: "center",
            width: "48%",
            marginBottom: 12,
            textAlign: "center",
        },
        achievementName: {
            fontSize: 16,
            fontWeight: "600",
            color: "#1e293b",
            marginTop: 8,
            marginBottom: 4,
            textAlign: "center",
        },
        achievementDesc: {
            fontSize: 12,
            color: "#64748b",
            textAlign: "center",
        },
    });
};

export const useMoreStyles = () => {
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
            height: 180,
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
        // moreItem: {
        //     flexDirection: "row",
        //     alignItems: "center",
        //     justifyContent: "space-between",
        //     backgroundColor: colors.card,
        //     borderRadius: 16,
        //     paddingVertical: 16,
        //     paddingHorizontal: 18,
        //     marginBottom: 12,
        //     shadowColor: "#000",
        //     shadowOpacity: 0.04,
        //     shadowRadius: 4,
        //     shadowOffset: { width: 0, height: 1 },
        //     elevation: 1,
        //     borderWidth: 1,
        //     borderColor: colors.border,
        // },
        // moreItemLeft: {
        //     flexDirection: "row",
        //     alignItems: "center",
        //     gap: 12,
        // },
        // moreItemLabel: {
        //     fontSize: 16,
        //     color: colors.textPrimary,
        //     fontWeight: "500",
        // },
    });
};

export const useSpeakStyles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        header: {
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            paddingHorizontal: 24,
            paddingTop: 40,
            paddingBottom: 32,
            backgroundColor: colors.primary,
            height: 180,
        },
        headerRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
        },
        headerBack: {
            color: "#fff",
            fontSize: 16,
        },
        languagePickerContainer: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 999,
            paddingHorizontal: 12,
            paddingVertical: 2,
        },
        picker: {
            color: "#fff",
            width: 120,
            marginLeft: 4,
            backgroundColor: "transparent",
        },
        headerCenter: {
            alignItems: "center",
        },
        headerMode: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
            marginBottom: 2,
        },
        headerTitle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
        },
        avatarSection: {
            alignItems: "center",
            paddingVertical: 24,
        },
        avatarWrapper: {
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
        },
        avatar: {
            width: 96,
            height: 96,
            borderRadius: 48,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
        },
        avatarPing: {
            position: "absolute",
            top: -8,
            left: -8,
            right: -8,
            bottom: -8,
            borderRadius: 56,
            borderWidth: 4,
            borderColor: colors.secondary,
            opacity: 0.5,
        },
        chatSection: {
            flex: 1,
            paddingHorizontal: 16,
        },
        chatRow: {
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 16,
        },
        avatarSmallAI: {
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 8,
        },
        avatarSmallUser: {
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: colors.success,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 8,
        },
        avatarSmallText: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold",
        },
        chatBubbleAI: {
            backgroundColor: colors.inputBackground,
            borderRadius: 18,
            borderTopLeftRadius: 4,
            paddingHorizontal: 16,
            paddingVertical: 12,
            maxWidth: "80%",
            flex: 1,
        },
        chatBubbleUser: {
            backgroundColor: colors.primary,
            borderRadius: 18,
            borderTopRightRadius: 4,
            paddingHorizontal: 16,
            paddingVertical: 12,
            maxWidth: "80%",
            flex: 1,
        },
        chatTextAI: {
            color: colors.textPrimary,
            fontSize: 15,
        },
        chatTextUser: {
            color: "#fff",
            fontSize: 15,
        },
        playButton: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
        },
        playButtonText: {
            color: colors.primary,
            fontSize: 14,
            marginLeft: 4,
        },
        pronunciationBox: {
            marginTop: 10,
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 8,
            padding: 8,
        },
        pronunciationRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 4,
        },
        pronunciationLabel: {
            color: "#fff",
            fontSize: 12,
        },
        pronunciationScore: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 12,
        },
        pronunciationBarBg: {
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 8,
            height: 6,
            overflow: "hidden",
        },
        pronunciationBarFill: {
            backgroundColor: colors.success,
            height: 6,
            borderRadius: 8,
        },
        inputSection: {
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
            backgroundColor: colors.card,
            borderTopWidth: 1,
            borderTopColor: colors.border,
            marginBottom: 30,
        },
        inputIconButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.inputBackground,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 4,
        },
        speakButton: {
            flex: 1,
            height: 56,
            borderRadius: 28,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 8,
            gap: 8,
        },
        speakButtonActive: {
            backgroundColor: colors.danger,
            shadowColor: colors.danger,
            shadowOpacity: 0.3,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
        },
        speakButtonInactive: {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOpacity: 0.2,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 2 },
        },
        speakButtonText: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 16,
            marginLeft: 8,
        },
        avatarPulse: {
            shadowColor: colors.primary,
            shadowOpacity: 0.5,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 0 },
            elevation: 8,
        },
    });
};
