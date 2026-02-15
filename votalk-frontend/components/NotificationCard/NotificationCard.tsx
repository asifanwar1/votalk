import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { useNotificationCardStyles } from "./Styles";

type NotificationCardProps = {
    title: string;
    body: string;
    date: string;
    style?: StyleProp<ViewStyle>;
};

export const NotificationCard: React.FC<NotificationCardProps> = ({
    title,
    body,
    date,
    style,
}) => {
    const styles = useNotificationCardStyles();
    return (
        <View style={[styles.notificationCard, style]}>
            <Text style={styles.notificationTitle}>{title}</Text>
            <Text style={styles.notificationBody}>{body}</Text>
            <Text style={styles.notificationDate}>{date}</Text>
        </View>
    );
};
