import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Award } from "lucide-react-native";

const Progress = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingBottom: 96,
                paddingHorizontal: 24,
                paddingTop: 24,
            }}
        >
            {/* Header */}
            <Text style={styles.header}>Your Progress</Text>

            {/* Level Card */}
            <View style={styles.levelCard}>
                <View style={styles.levelRow}>
                    <Award size={28} color="#fff" />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.levelNumber}>Level 12</Text>
                        <Text style={styles.levelLabel}>
                            Intermediate Speaker
                        </Text>
                    </View>
                </View>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: "65%" }]} />
                </View>
                <Text style={styles.progressText}>650/1000 XP to Level 13</Text>
            </View>

            {/* Weekly Stats */}
            <View style={styles.statsCard}>
                <Text style={styles.statsTitle}>Weekly Stats</Text>
                <View style={styles.statsGrid}>
                    <View
                        style={[styles.statBox, { backgroundColor: "#eef2ff" }]}
                    >
                        <Text style={[styles.statValue, { color: "#6366f1" }]}>
                            47
                        </Text>
                        <Text style={styles.statLabel}>Minutes Practiced</Text>
                    </View>
                    <View
                        style={[styles.statBox, { backgroundColor: "#f3e8ff" }]}
                    >
                        <Text style={[styles.statValue, { color: "#a21caf" }]}>
                            156
                        </Text>
                        <Text style={styles.statLabel}>Words Learned</Text>
                    </View>
                    <View
                        style={[styles.statBox, { backgroundColor: "#dcfce7" }]}
                    >
                        <Text style={[styles.statValue, { color: "#16a34a" }]}>
                            89%
                        </Text>
                        <Text style={styles.statLabel}>Accuracy</Text>
                    </View>
                    <View
                        style={[styles.statBox, { backgroundColor: "#ffedd5" }]}
                    >
                        <Text style={[styles.statValue, { color: "#ea580c" }]}>
                            12
                        </Text>
                        <Text style={styles.statLabel}>Scenarios Done</Text>
                    </View>
                </View>
            </View>

            {/* Achievements */}
            <View style={styles.achievementsCard}>
                <Text style={styles.achievementsTitle}>Achievements</Text>
                <View style={styles.achievementsGrid}>
                    {["🔥", "⭐", "🎯", "💎", "🏆", "👑", "⚡", "🌟"].map(
                        (emoji, idx) => (
                            <View key={idx} style={styles.achievementBox}>
                                <Text style={styles.achievementEmoji}>
                                    {emoji}
                                </Text>
                            </View>
                        ),
                    )}
                </View>
            </View>
        </View>
    );
};

export default Progress;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: 24,
    },
    levelCard: {
        backgroundColor: "#34d399",
        borderRadius: 20,
        padding: 24,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    levelRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    levelNumber: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
    levelLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 15,
        marginTop: 2,
    },
    progressBarBg: {
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 8,
        height: 8,
        marginBottom: 8,
        overflow: "hidden",
    },
    progressBarFill: {
        backgroundColor: "#fff",
        height: 8,
        borderRadius: 8,
    },
    progressText: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 12,
    },
    statsCard: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
        borderWidth: 1,
        borderColor: "#e5e7eb",
    },
    statsTitle: {
        fontWeight: "600",
        fontSize: 18,
        color: "#1e293b",
        marginBottom: 16,
    },
    statsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12,
    },
    statBox: {
        flexBasis: "48%",
        alignItems: "center",
        paddingVertical: 16,
        borderRadius: 14,
        marginBottom: 12,
    },
    statValue: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 13,
        color: "#64748b",
        textAlign: "center",
    },
    achievementsCard: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
        borderWidth: 1,
        borderColor: "#e5e7eb",
    },
    achievementsTitle: {
        fontWeight: "600",
        fontSize: 18,
        color: "#1e293b",
        marginBottom: 12,
    },
    achievementsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "flex-start",
    },
    achievementBox: {
        width: 56,
        height: 56,
        borderRadius: 14,
        backgroundColor: "#fef3c7",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginBottom: 10,
    },
    achievementEmoji: {
        fontSize: 28,
        textAlign: "center",
    },
});
