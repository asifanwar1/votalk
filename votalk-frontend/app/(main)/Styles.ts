import { StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export const useProfileStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        avatarSection: {
            alignItems: "center",
            marginTop: -48,
            marginBottom: 24,
        },
        avatarWrapper: {
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
        },
        avatarImg: {
            width: 112,
            height: 112,
            borderRadius: 56,
            borderWidth: 4,
            borderColor: "#fff",
        },
        avatarPlaceholder: {
            width: 112,
            height: 112,
            borderRadius: 56,
            backgroundColor: colors.secondary,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 4,
            borderColor: "#fff",
        },
        avatarActions: {
            flexDirection: "row",
            position: "absolute",
            bottom: -5,
        },
        avatarActionBtn: {
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 6,
            marginLeft: 8,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 1 },
            elevation: 2,
        },
        infoSection: {
            paddingHorizontal: 24,
        },
        infoRow: {
            marginBottom: 24,
        },
        label: {
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 6,
        },
        infoValueRow: {
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
        },
        value: {
            color: colors.textPrimary,
            fontSize: 18,
            fontWeight: "500",
            flex: 1,
        },
        input: {
            backgroundColor: colors.inputBackground,
            color: colors.textPrimary,
            fontSize: 18,
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: colors.border,
        },
        saveBtn: {
            backgroundColor: colors.primary,
            borderRadius: 16,
            paddingVertical: 14,
            alignItems: "center",
            marginTop: 12,
            shadowColor: colors.primary,
            shadowOpacity: 0.12,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },
            elevation: 2,
        },
        saveBtnText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
        },
    });
};

export const useAboutStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        content: {
            padding: 24,
            alignItems: "center",
        },
        iconCircle: {
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: colors.textPrimary,
            marginBottom: 4,
        },
        subtitle: {
            fontSize: 16,
            color: colors.textSecondary,
            marginBottom: 16,
        },
        body: {
            fontSize: 15,
            color: colors.textPrimary,
            textAlign: "center",
            marginBottom: 12,
        },
        sectionTitle: {
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
            marginTop: 24,
            marginBottom: 8,
        },
        link: {
            color: colors.primary,
            fontSize: 15,
            marginBottom: 8,
            textDecorationLine: "underline",
        },
        version: {
            color: colors.textSecondary,
            fontSize: 13,
            marginTop: 24,
        },
    });
};

export const usePrivacyPolicyStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        content: {
            padding: 24,
            alignItems: "center",
        },
        iconCircle: {
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: colors.textPrimary,
            marginBottom: 16,
        },
        body: {
            fontSize: 15,
            color: colors.textPrimary,
            textAlign: "left",
            marginBottom: 12,
        },
    });
};

export const useContactUsStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        content: {
            padding: 24,
            alignItems: "center",
        },
        iconCircle: {
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: colors.textPrimary,
            marginBottom: 4,
        },
        subtitle: {
            fontSize: 16,
            color: colors.textSecondary,
            marginBottom: 16,
            textAlign: "center",
        },
        contactRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
        },
        contactText: {
            color: colors.textPrimary,
            fontSize: 16,
            marginLeft: 10,
            textDecorationLine: "underline",
        },
        form: {
            width: "100%",
            marginTop: 24,
        },
        label: {
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 6,
        },
        input: {
            backgroundColor: colors.inputBackground,
            color: colors.textPrimary,
            fontSize: 16,
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: 16,
        },
        messageInput: {
            height: 100,
            textAlignVertical: "top",
        },
        sendBtn: {
            backgroundColor: colors.primary,
            borderRadius: 16,
            paddingVertical: 14,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 4,
            shadowColor: colors.primary,
            shadowOpacity: 0.12,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },
            elevation: 2,
        },
        sendBtnText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
            marginLeft: 8,
        },
    });
};

export const useConversationsStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        listContent: {
            padding: 24,
            paddingTop: 8,
        },
        emptyText: {
            color: colors.textSecondary,
            textAlign: "center",
            marginTop: 32,
        },
    });
};

export const useBadgesStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        badgesListContent: {
            padding: 24,
            paddingTop: 8,
        },
        badgeItem: {
            borderRadius: 16,
            padding: 18,
            marginBottom: 16,
            flexDirection: "row",
            alignItems: "center",
        },
        badgeIconCircle: {
            width: 48,
            height: 48,
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
        },
        badgeName: {
            fontSize: 17,
            fontWeight: "bold",
        },
        badgeDesc: {
            fontSize: 14,
            marginTop: 2,
        },
        badgeUnlocked: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
        },
        emptyText: {
            color: colors.textSecondary,
            textAlign: "center",
            marginTop: 32,
        },
        badgeStatusIcon: {
            marginLeft: 12,
            alignItems: "center",
            justifyContent: "center",
        },
    });
};

export const useSettingsStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        section: {
            marginTop: 24,
            paddingHorizontal: 24,
        },
        sectionHeader: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            justifyContent: "space-between",
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.textPrimary,
            marginLeft: 8,
        },
        optionRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 12,
            paddingHorizontal: 8,
            borderRadius: 10,
            marginBottom: 6,
            backgroundColor: colors.inputBackground,
        },
        optionRowActive: {
            borderWidth: 2,
            borderColor: colors.primary,
            backgroundColor: colors.card,
        },
        optionLabel: {
            fontSize: 16,
            color: colors.textPrimary,
        },
        optionLabelActive: {
            color: colors.primary,
            fontWeight: "bold",
        },
        radioOuter: {
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
        },
        radioInner: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: colors.primary,
        },
        switchRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 8,
            borderRadius: 10,
            backgroundColor: colors.inputBackground,
            marginBottom: 8,
        },
        switchLabel: {
            fontSize: 16,
            color: colors.textPrimary,
        },
        addBtn: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.primary,
            borderRadius: 16,
            paddingVertical: 6,
            paddingHorizontal: 14,
            marginLeft: 8,
        },
        addBtnText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 4,
        },
        sceneRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: colors.inputBackground,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginBottom: 8,
        },
        sceneLabel: {
            fontSize: 16,
            color: colors.textPrimary,
        },
        removeBtn: {
            backgroundColor: colors.danger,
            borderRadius: 12,
            padding: 4,
            marginLeft: 8,
        },
        modalOverlay: {
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
            justifyContent: "center",
            alignItems: "center",
        },
        modalContent: {
            backgroundColor: colors.card,
            borderRadius: 18,
            padding: 24,
            width: "85%",
            alignItems: "center",
        },
        modalTitle: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.textPrimary,
            marginBottom: 16,
        },
        modalInput: {
            width: "100%",
            backgroundColor: colors.inputBackground,
            color: colors.textPrimary,
            fontSize: 16,
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: 18,
        },
        modalActions: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
        },
        modalBtn: {
            flex: 1,
            backgroundColor: colors.primary,
            borderRadius: 14,
            paddingVertical: 10,
            alignItems: "center",
            marginHorizontal: 4,
        },
        modalBtnCancel: {
            backgroundColor: colors.danger,
        },
        modalBtnText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 15,
        },
        content: {
            paddingBottom: 40,
            // alignItems: "center",
        },
    });
};

export const useNotificationStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        content: {
            padding: 24,
        },
        emptyText: {
            color: colors.textSecondary,
            textAlign: "center",
            marginTop: 32,
        },
    });
};
