import { StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export const useProfileStyles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        header: {
            paddingTop: 56,
            paddingBottom: 24,
            paddingHorizontal: 24,
            backgroundColor: colors.primary,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
        },
        headerTitle: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "bold",
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
            bottom: 0,
            right: -8,
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
        header: {
            paddingTop: 56,
            paddingBottom: 24,
            paddingHorizontal: 24,
            backgroundColor: colors.primary,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
        },
        headerTitle: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "bold",
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
