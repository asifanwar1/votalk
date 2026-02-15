import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleProp,
    ViewStyle,
} from "react-native";
import { modeCardStyles } from "./Styles";

type ModeCardProps = {
    icon: React.ReactNode | string;
    title: string;
    desc: string;
    color: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
};

export const ModeCard: React.FC<ModeCardProps> = ({
    icon,
    title,
    desc,
    color,
    onPress,
    style,
}) => {
    const styles = modeCardStyles;
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.modeButtonWrapper, style]}
        >
            <View style={[styles.modeButton, { backgroundColor: color }]}>
                <Text style={styles.modeIcon}>{icon}</Text>
                <Text style={styles.modeTitle}>{title}</Text>
                <Text style={styles.modeDesc}>{desc}</Text>
            </View>
        </TouchableOpacity>
    );
};
