import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Trophy, Mic, ChevronRight, TrendingUp } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
    const [activeTab, setActiveTab] = useState("home");
    const [isRecording, setIsRecording] = useState(false);

    const conversationModes = [
        {
            id: 1,
            icon: "✈️",
            title: "Travel",
            colors: ["#60a5fa", "#22d3ee"] as [string, string],
            desc: "Airport, Hotel, Directions",
        },
        {
            id: 2,
            icon: "💼",
            title: "Work",
            colors: ["#c084fc", "#f472b6"] as [string, string],
            desc: "Meetings, Emails, Interviews",
        },
        {
            id: 3,
            icon: "🛍️",
            title: "Shopping",
            colors: ["#fb923c", "#ef4444"] as [string, string],
            desc: "Markets, Restaurants, Stores",
        },
        {
            id: 4,
            icon: "💬",
            title: "Daily Life",
            colors: ["#4ade80", "#10b981"] as [string, string],
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
                {/* Header */}
                <LinearGradient
                    colors={["#6366f1", "#9333ea", "#ec4899"]}
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
                            <Trophy size={24} color="#fff" />
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

                {/* Quick Start */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Start</Text>
                    <TouchableOpacity
                        onPress={() => setActiveTab("conversation")}
                        activeOpacity={0.8}
                    >
                        <LinearGradient
                            colors={["#6366f1", "#9333ea"]}
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

                {/* Conversation Modes */}
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
                                <LinearGradient
                                    colors={mode.colors}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.modeButton}
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
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Recent Progress */}
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
                                                color="#16a34a"
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 96,
    },
    header: {
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 32,
    },
    headerTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
    headerSubtitle: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 14,
    },
    trophyContainer: {
        width: 48,
        height: 48,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    statsCard: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    statItem: {
        alignItems: "center",
        flex: 1,
    },
    statItemBorder: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
    },
    statValue: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    statLabel: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 12,
    },
    section: {
        paddingHorizontal: 24,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1f2937",
        marginBottom: 16,
    },
    quickStartButton: {
        borderRadius: 16,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    quickStartContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    quickStartLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    micContainer: {
        width: 48,
        height: 48,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    quickStartTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    quickStartSubtitle: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 14,
    },
    modesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    modeButtonWrapper: {
        width: "48%",
    },
    modeButton: {
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    modeIcon: {
        fontSize: 32,
        marginBottom: 8,
    },
    modeTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 4,
    },
    modeDesc: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 12,
    },
    sessionsList: {
        gap: 12,
    },
    sessionCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        borderWidth: 1,
        borderColor: "#f3f4f6",
    },
    sessionContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sessionLeft: {
        flex: 1,
    },
    sessionTopic: {
        fontSize: 16,
        fontWeight: "600",
        color: "#1f2937",
    },
    sessionTime: {
        fontSize: 14,
        color: "#6b7280",
        marginTop: 2,
    },
    sessionRight: {
        alignItems: "flex-end",
    },
    sessionScore: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#6366f1",
    },
    improvementContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 2,
    },
    improvementText: {
        fontSize: 12,
        color: "#16a34a",
    },
});
