import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { styles } from "./Styles";

type FeatureItemProps = {
    icon: React.ReactNode;
    label: string;
    backgroundColor: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    featureIcon?: ViewStyle;
};

export const FeatureItem: React.FC<FeatureItemProps> = ({
    icon,
    label,
    backgroundColor,
    style,
    textStyle,
    featureIcon,
}) => (
    <View style={[styles.featureItem, style]}>
        <View style={[styles.featureIcon, { backgroundColor }, featureIcon]}>
            {icon}
        </View>
        <Text style={[styles.featureText, textStyle]}>{label}</Text>
    </View>
);
