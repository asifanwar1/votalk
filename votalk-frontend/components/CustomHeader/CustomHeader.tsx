import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { createHeaderStyles } from "./Styles";

interface CustomHeaderProps {
    title: string;
    showBack?: boolean;
    backLabel?: string;
    colors: { primary: string };
    onBack?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
    title,
    showBack = true,
    backLabel = "Back",
    colors,
    onBack,
}) => {
    const styles = createHeaderStyles(colors);

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            {showBack && (
                <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>{backLabel}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CustomHeader;
