import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleProp,
    ViewStyle,
} from "react-native";
import { ChevronRight } from "lucide-react-native";
import { customLinkStyles } from "./Styles";

type CustomLinkProps = {
    icon: React.ReactNode;
    label: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
};

export const CustomLink: React.FC<CustomLinkProps> = ({
    icon,
    label,
    onPress,
    style,
}) => {
    const styles = customLinkStyles;
    return (
        <TouchableOpacity
            style={[styles.customLinkItem, style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.customLinkLeft}>
                {icon}
                <Text style={styles.customLinkLabel}>{label}</Text>
            </View>
            <ChevronRight size={20} color="#64748b" />
        </TouchableOpacity>
    );
};
