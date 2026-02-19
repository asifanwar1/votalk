import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useBadgesStyles } from "./Styles";
import { Lock, Unlock } from "lucide-react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { BADGES } from "@/mock-data/badges";

export default function Badges() {
    const { colors } = useTheme();
    const styles = useBadgesStyles();
    const router = useRouter();

    const renderItem = ({ item }: { item: (typeof BADGES)[0] }) => {
        const Icon = item.icon;
        return (
            <View
                style={[
                    styles.badgeItem,
                    {
                        backgroundColor: item.unlocked
                            ? colors.primary
                            : colors.inputBackground,
                        opacity: item.unlocked ? 1 : 0.5,
                    },
                ]}
            >
                <View
                    style={[
                        styles.badgeIconCircle,
                        {
                            backgroundColor: item.unlocked
                                ? colors.accent
                                : colors.border,
                        },
                    ]}
                >
                    <Icon size={28} color="#fff" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={[
                            styles.badgeName,
                            {
                                color: item.unlocked
                                    ? "#fff"
                                    : colors.textPrimary,
                            },
                        ]}
                    >
                        {item.name}
                    </Text>
                    <Text
                        style={[
                            styles.badgeDesc,
                            {
                                color: item.unlocked
                                    ? "#f3e8ff"
                                    : colors.textSecondary,
                            },
                        ]}
                    >
                        {item.desc}
                    </Text>
                </View>
                <View style={styles.badgeStatusIcon}>
                    {item.unlocked ? (
                        <Unlock size={24} color="#fff" />
                    ) : (
                        <Lock size={24} color={colors.textSecondary} />
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <CustomHeader
                title="Badges"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.push("/(main)/(tabs)/More")}
            />
            <FlatList
                data={BADGES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.badgesListContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No badges yet.</Text>
                }
            />
        </View>
    );
}
