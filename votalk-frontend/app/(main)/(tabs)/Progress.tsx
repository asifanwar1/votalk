import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Award, BookText, Trophy } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useProgressStyles } from "./Styles";
import { useTheme } from "../../../hooks/useTheme";

const Progress = () => {
    const styles = useProgressStyles();
    const { colors } = useTheme();

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
                        <View style={styles.headerText}>
                            <Text style={styles.headerTitle}>Progress</Text>
                            <Text style={styles.headerSubtitle}>
                                Track your progress and celebrate your
                                achievements
                            </Text>
                        </View>
                        <View style={styles.trophyContainer}>
                            <Trophy size={24} color="#fff" />
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.section}>
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
                            <View
                                style={[
                                    styles.progressBarFill,
                                    { width: "65%" },
                                ]}
                            />
                        </View>
                        <Text style={styles.progressText}>
                            650/1000 XP to Level 13
                        </Text>
                    </View>

                    <View style={styles.statsCard}>
                        <Text style={styles.statsTitle}>Weekly Stats</Text>
                        <View style={styles.statsGrid}>
                            <View
                                style={[
                                    styles.statBox,
                                    { backgroundColor: colors.statBox1 },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statValue,
                                        { color: colors.statValue1 },
                                    ]}
                                >
                                    47
                                </Text>
                                <Text style={styles.statLabel}>
                                    Minutes Practiced
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.statBox,
                                    { backgroundColor: colors.statBox2 },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statValue,
                                        { color: colors.statValue2 },
                                    ]}
                                >
                                    156
                                </Text>
                                <Text style={styles.statLabel}>
                                    Words Learned
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.statBox,
                                    { backgroundColor: colors.statBox3 },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statValue,
                                        { color: colors.statValue3 },
                                    ]}
                                >
                                    89%
                                </Text>
                                <Text style={styles.statLabel}>Accuracy</Text>
                            </View>
                            <View
                                style={[
                                    styles.statBox,
                                    { backgroundColor: colors.statBox4 },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statValue,
                                        { color: colors.statValue4 },
                                    ]}
                                >
                                    12
                                </Text>
                                <Text style={styles.statLabel}>
                                    Scenarios Done
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.statsCard}>
                        <Text style={styles.statsTitle}>Achievements</Text>
                        <View style={styles.achievementsGrid}>
                            <View style={styles.achievementCard}>
                                <Trophy size={28} color={colors.primary} />
                                <Text style={styles.achievementName}>
                                    Streak Master
                                </Text>
                                <Text style={styles.achievementDesc}>
                                    Completed 30 days in a row
                                </Text>
                            </View>
                            <View style={styles.achievementCard}>
                                <BookText size={28} color={colors.primary} />
                                <Text style={styles.achievementName}>
                                    Word Collector
                                </Text>
                                <Text style={styles.achievementDesc}>
                                    Learned 500 new words
                                </Text>
                            </View>
                            <View style={styles.achievementCard}>
                                <Award size={28} color={colors.primary} />
                                <Text style={styles.achievementName}>
                                    Fluency Badge
                                </Text>
                                <Text style={styles.achievementDesc}>
                                    Reached 90% accuracy
                                </Text>
                            </View>
                            <View style={styles.achievementCard}>
                                <Trophy size={28} color={colors.primary} />
                                <Text style={styles.achievementName}>
                                    Scenario Explorer
                                </Text>
                                <Text style={styles.achievementDesc}>
                                    Completed all conversation scenarios
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Progress;
