import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import {
    BotMessageSquare,
    Mic,
    ChevronRight,
    TrendingUp,
    Plane,
    Briefcase,
    ShoppingCart,
    MessageSquareText,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useHomeStyles } from "./Styles";
import { useTheme } from "../../../hooks/useTheme";

export default function Home() {
    const [activeTab, setActiveTab] = useState("home");
    const [isRecording, setIsRecording] = useState(false);
    const styles = useHomeStyles();
    const { colors } = useTheme();

    const conversationModes = [
        {
            id: 1,
            icon: <Plane size={32} color="#fff" />,
            title: "Travel",
            color: colors.modeTravel,
            desc: "Airport, Hotel, Directions",
        },
        {
            id: 2,
            icon: <Briefcase size={32} color="#fff" />,
            title: "Work",
            color: colors.modeWork,
            desc: "Meetings, Emails, Interviews",
        },
        {
            id: 3,
            icon: <ShoppingCart size={32} color="#fff" />,
            title: "Shopping",
            color: colors.modeShopping,
            desc: "Markets, Restaurants, Stores",
        },
        {
            id: 4,
            icon: <MessageSquareText size={32} color="#fff" />,
            title: "Daily Life",
            color: colors.modeDaily,
            desc: "Casual Conversations",
        },
    ];

    const recentSessions = [
        {
            score: 87,
            topic: "Airport Check-in",
            time: "2m ago",
            improvement: "+12",
        },
        {
            score: 92,
            topic: "Restaurant Order",
            time: "1h ago",
            improvement: "+5",
        },
        {
            score: 78,
            topic: "Job Interview",
            time: "Yesterday",
            improvement: "+8",
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <LinearGradient
                    colors={[colors.headerGradient1, colors.headerGradient2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.header}
                >
                    <View style={styles.headerTop}>
                        <View>
                            <Text style={styles.headerTitle}>Votalk</Text>
                            <Text style={styles.headerSubtitle}>
                                Speak with confidence
                            </Text>
                        </View>
                        <View style={styles.trophyContainer}>
                            <BotMessageSquare size={24} color="#fff" />
                        </View>
                    </View>

                    <View style={styles.statsCard}>
                        <View style={styles.statsRow}>
                            <View style={styles.statItem}>
                                <Text style={styles.statValue}>127</Text>
                                <Text style={styles.statLabel}>
                                    Streak Days
                                </Text>
                            </View>
                            <View
                                style={[styles.statItem, styles.statItemBorder]}
                            >
                                <Text style={styles.statValue}>84%</Text>
                                <Text style={styles.statLabel}>Avg Score</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={styles.statValue}>23</Text>
                                <Text style={styles.statLabel}>Hours</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Start</Text>
                    <TouchableOpacity
                        onPress={() => setActiveTab("conversation")}
                        activeOpacity={0.8}
                    >
                        <LinearGradient
                            colors={[
                                colors.headerGradient1,
                                colors.headerGradient2,
                            ]}
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
                                        <Text style={styles.quickStartTitle}>
                                            Start Speaking
                                        </Text>
                                        <Text style={styles.quickStartSubtitle}>
                                            Practice conversation now
                                        </Text>
                                    </View>
                                </View>
                                <ChevronRight size={24} color="#fff" />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Choose Your Scene</Text>
                    <View style={styles.modesGrid}>
                        {conversationModes.map((mode) => (
                            <TouchableOpacity
                                key={mode.id}
                                onPress={() => setActiveTab("conversation")}
                                activeOpacity={0.8}
                                style={styles.modeButtonWrapper}
                            >
                                <View
                                    style={[
                                        styles.modeButton,
                                        { backgroundColor: mode.color },
                                    ]}
                                >
                                    <Text style={styles.modeIcon}>
                                        {mode.icon}
                                    </Text>
                                    <Text style={styles.modeTitle}>
                                        {mode.title}
                                    </Text>
                                    <Text style={styles.modeDesc}>
                                        {mode.desc}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Sessions</Text>
                    <View style={styles.sessionsList}>
                        {recentSessions.map((session, idx) => (
                            <View key={idx} style={styles.sessionCard}>
                                <View style={styles.sessionContent}>
                                    <View style={styles.sessionLeft}>
                                        <Text style={styles.sessionTopic}>
                                            {session.topic}
                                        </Text>
                                        <Text style={styles.sessionTime}>
                                            {session.time}
                                        </Text>
                                    </View>
                                    <View style={styles.sessionRight}>
                                        <Text style={styles.sessionScore}>
                                            {session.score}
                                        </Text>
                                        <View
                                            style={styles.improvementContainer}
                                        >
                                            <TrendingUp
                                                size={12}
                                                color={colors.improvement}
                                            />
                                            <Text
                                                style={styles.improvementText}
                                            >
                                                {session.improvement}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
