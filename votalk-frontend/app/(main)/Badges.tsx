import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useBadgesStyles } from "./Styles";
import {
    Shield,
    Award,
    Star,
    Trophy,
    Flame,
    Heart,
    CheckCircle,
    Smile,
    BookOpen,
    Globe,
    Rocket,
    Target,
    Medal,
    ThumbsUp,
    Sun,
    Moon,
    Feather,
    Gift,
    Zap,
    Leaf,
    ArrowLeft,
    Lock,
    Unlock,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";

const BADGES = [
    {
        id: 1,
        name: "First Conversation",
        desc: "Complete your first chat",
        icon: Shield,
        unlocked: true,
    },
    {
        id: 2,
        name: "Streak Starter",
        desc: "Practice 3 days in a row",
        icon: Flame,
        unlocked: true,
    },
    {
        id: 3,
        name: "Quiz Master",
        desc: "Score 90+ in a session",
        icon: Award,
        unlocked: false,
    },
    {
        id: 4,
        name: "Polyglot",
        desc: "Try 3 different modes",
        icon: Globe,
        unlocked: false,
    },
    {
        id: 5,
        name: "Night Owl",
        desc: "Practice after midnight",
        icon: Moon,
        unlocked: false,
    },
    {
        id: 6,
        name: "Early Bird",
        desc: "Practice before 7am",
        icon: Sun,
        unlocked: false,
    },
    {
        id: 7,
        name: "Consistent",
        desc: "7-day streak",
        icon: CheckCircle,
        unlocked: false,
    },
    {
        id: 8,
        name: "Enthusiast",
        desc: "Complete 20 sessions",
        icon: Star,
        unlocked: false,
    },
    {
        id: 9,
        name: "Bookworm",
        desc: "Read 10 lesson tips",
        icon: BookOpen,
        unlocked: false,
    },
    {
        id: 10,
        name: "Motivator",
        desc: "Send 5 feedbacks",
        icon: Heart,
        unlocked: false,
    },
    {
        id: 11,
        name: "Champion",
        desc: "Score 100 in a session",
        icon: Trophy,
        unlocked: false,
    },
    {
        id: 12,
        name: "Rocket",
        desc: "Improve score by 20+",
        icon: Rocket,
        unlocked: false,
    },
    {
        id: 13,
        name: "Target Achiever",
        desc: "Hit your weekly goal",
        icon: Target,
        unlocked: false,
    },
    {
        id: 14,
        name: "Medalist",
        desc: "Unlock 10 badges",
        icon: Medal,
        unlocked: false,
    },
    {
        id: 15,
        name: "Positive Vibes",
        desc: "Give 10 thumbs up",
        icon: ThumbsUp,
        unlocked: false,
    },
    {
        id: 16,
        name: "Feather Touch",
        desc: "Use voice input",
        icon: Feather,
        unlocked: false,
    },
    {
        id: 17,
        name: "Gifted",
        desc: "Refer a friend",
        icon: Gift,
        unlocked: false,
    },
    {
        id: 18,
        name: "Lightning Fast",
        desc: "Finish a session in under 2 min",
        icon: Zap,
        unlocked: false,
    },
    {
        id: 19,
        name: "Green Leaf",
        desc: "Practice every day for a month",
        icon: Leaf,
        unlocked: false,
    },
    {
        id: 20,
        name: "Smiley",
        desc: "React to 10 messages",
        icon: Smile,
        unlocked: false,
    },
];

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
            {/* <View style={styles.header}>
                <Text style={styles.headerTitle}>Badges</Text>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => router.push("/(main)/(tabs)/More")}
                >
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>Back</Text>
                </TouchableOpacity>
            </View> */}
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
