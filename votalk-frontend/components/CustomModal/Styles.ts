import { StyleSheet } from "react-native";

export const useCustomModalStyles = (colors: any) =>
    StyleSheet.create({
        overlay: {
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.35)",
            justifyContent: "center",
            alignItems: "center",
        },
        modal: {
            width: "85%",
            backgroundColor: colors.card,
            borderRadius: 18,
            padding: 24,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 4 },
            elevation: 8,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: colors.textPrimary,
            marginBottom: 12,
            textAlign: "center",
        },
        content: {
            marginBottom: 20,
        },
        actions: {
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 12,
        },
        cancelBtn: {
            paddingVertical: 10,
            paddingHorizontal: 18,
            borderRadius: 10,
            backgroundColor: colors.inputBackground,
        },
        cancelText: {
            color: colors.textSecondary,
            fontWeight: "bold",
            fontSize: 15,
        },
        confirmBtn: {
            paddingVertical: 10,
            paddingHorizontal: 18,
            borderRadius: 10,
            backgroundColor: colors.primary,
        },
        confirmText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 15,
        },
    });
