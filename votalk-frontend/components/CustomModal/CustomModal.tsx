import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useCustomModalStyles } from "./styles";

interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    loading?: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
    visible,
    onClose,
    title,
    children,
    confirmText = "OK",
    cancelText = "Cancel",
    onConfirm,
    loading = false,
}) => {
    const { colors } = useTheme();
    const styles = useCustomModalStyles(colors);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    <View style={styles.content}>{children}</View>
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.cancelBtn}
                            onPress={onClose}
                            disabled={loading}
                        >
                            <Text style={styles.cancelText}>{cancelText}</Text>
                        </TouchableOpacity>
                        {onConfirm && (
                            <TouchableOpacity
                                style={styles.confirmBtn}
                                onPress={onConfirm}
                                disabled={loading}
                            >
                                <Text style={styles.confirmText}>
                                    {loading ? "Please wait..." : confirmText}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
