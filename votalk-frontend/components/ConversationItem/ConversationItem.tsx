import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
} from "react-native";
import { MessageSquareText, Clock, ArrowRight } from "lucide-react-native";
import { useConversationItemStyles } from "./Styles";
import { useTheme } from "../../hooks/useTheme";

type ConversationItemProps = {
    title: string;
    preview: string;
    date: string;
    score: number;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
};

export const ConversationItem: React.FC<ConversationItemProps> = ({
    title,
    preview,
    date,
    score,
    onPress,
    style,
}) => {
    const { colors } = useTheme();
    const styles = useConversationItemStyles();

    return (
        <TouchableOpacity
            style={[styles.item, style]}
            onPress={onPress}
            activeOpacity={0.85}
        >
            <View style={styles.itemIcon}>
                <MessageSquareText size={28} color={colors.primary} />
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemPreview}>{preview}</Text>
                <View style={styles.itemMeta}>
                    <Clock size={14} color={colors.textSecondary} />
                    <Text style={styles.itemDate}>{date}</Text>
                    <Text style={styles.itemScore}>Score: {score}</Text>
                </View>
            </View>
            <ArrowRight size={20} color={colors.textSecondary} />
        </TouchableOpacity>
    );
};
