import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useConversationsStyles } from "./Styles";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { ConversationItem } from "@/components/ConversationItem/ConversationItem";

const chatHistory = [
    {
        id: "1",
        title: "Airport Check-in",
        date: "Feb 12, 2026",
        preview: "Agent: Welcome! May I see your passport?",
        score: 87,
    },
    {
        id: "2",
        title: "Restaurant Order",
        date: "Feb 11, 2026",
        preview: "Waiter: What would you like to order?",
        score: 92,
    },
    {
        id: "3",
        title: "Job Interview",
        date: "Feb 10, 2026",
        preview: "Interviewer: Tell me about yourself.",
        score: 78,
    },
];

const Conversations = () => {
    const { colors } = useTheme();
    const styles = useConversationsStyles();
    const router = useRouter();

    const renderItem = ({ item }: { item: (typeof chatHistory)[0] }) => (
        <ConversationItem
            key={item.id}
            title={item.title}
            preview={item.preview}
            date={item.date}
            score={item.score}
            onPress={() => router.push("/(main)/(tabs)/More")}
        />
    );

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headerTitle}>Chat History</Text>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => router.push("/(main)/(tabs)/More")}
                >
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>Back</Text>
                </TouchableOpacity>
            </View> */}
            <CustomHeader
                title="Chat History"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.push("/(main)/(tabs)/More")}
            />
            <FlatList
                data={chatHistory}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No conversations yet.</Text>
                }
            />
        </View>
    );
};

export default Conversations;
