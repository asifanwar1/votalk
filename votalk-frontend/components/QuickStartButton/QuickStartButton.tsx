import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleProp,
    ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Mic, ChevronRight } from "lucide-react-native";
import { quickStartButtonStyles } from "./Styles";
import { useTheme } from "@/hooks/useTheme";

type QuickStartButtonProps = {
    title?: string;
    subtitle?: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
};

export const QuickStartButton: React.FC<QuickStartButtonProps> = ({
    title = "Start Speaking",
    subtitle = "Practice conversation now",
    onPress,
    style,
}) => {
    const { colors } = useTheme();
    const styles = quickStartButtonStyles;

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={style}>
            <LinearGradient
                colors={[colors.headerGradient1, colors.headerGradient2]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.quickStartButton}
            >
                <View style={styles.quickStartContent}>
                    <View style={styles.quickStartLeft}>
                        <View style={styles.micContainer}>
                            <Mic size={24} color="#fff" />
                        </View>
                        <View>
                            <Text style={styles.quickStartTitle}>{title}</Text>
                            <Text style={styles.quickStartSubtitle}>
                                {subtitle}
                            </Text>
                        </View>
                    </View>
                    <ChevronRight size={24} color="#fff" />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};
