import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useNotificationStyles } from "./Styles";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { useRouter } from "expo-router";
import { NotificationCard } from "@/components/NotificationCard/NotificationCard";

const notifications = [
    {
        id: "1",
        title: "Welcome to Votalk!",
        body: "Start practicing conversations and earn badges.",
        date: "Feb 15, 2026",
    },
    {
        id: "2",
        title: "Daily Reminder",
        body: "Don't forget to practice speaking today.",
        date: "Feb 14, 2026",
    },
    {
        id: "3",
        title: "New Badge Unlocked",
        body: "You earned the 'Confident Speaker' badge.",
        date: "Feb 13, 2026",
    },
];

export default function Notifications() {
    const { colors } = useTheme();
    const styles = useNotificationStyles();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <CustomHeader
                title="Notifications"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.push("/(main)/(tabs)/More")}
            />
            <ScrollView contentContainerStyle={styles.content}>
                {notifications.length === 0 ? (
                    <Text style={styles.emptyText}>No notifications yet.</Text>
                ) : (
                    notifications.map((notif) => (
                        <NotificationCard
                            key={notif.id}
                            title={notif.title}
                            body={notif.body}
                            date={notif.date}
                        />
                    ))
                )}
            </ScrollView>
        </View>
    );
}
