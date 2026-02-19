import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useConversationsStyles } from "./Styles";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { ConversationItem } from "@/components/ConversationItem/ConversationItem";
import { chatHistory } from "@/mock-data/chat";

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
