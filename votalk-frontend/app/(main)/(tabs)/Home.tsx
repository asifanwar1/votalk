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
import { useRouter } from "expo-router";
import { Stats } from "@/components/Stats/Stats";
import { ModeCard } from "@/components/ModeCard/ModeCard";
import { SessionCard } from "@/components/SessionCard/SessionCard";
import { QuickStartButton } from "@/components/QuickStartButton/QuickStartButton";
import { stats, recentSessions } from "@/mock-data/stats";

export default function Home() {
    const styles = useHomeStyles();
    const { colors } = useTheme();
    const router = useRouter();

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
                        <Stats stats={stats} />
                    </View>
                </LinearGradient>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Start</Text>
                    {/* <TouchableOpacity
                        onPress={() => router.push("/Speak")}
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
                    </TouchableOpacity> */}
                    <QuickStartButton onPress={() => router.push("/Speak")} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Choose Your Scene</Text>
                    <View style={styles.modesGrid}>
                        {conversationModes.map((mode) => (
                            <ModeCard
                                key={mode.id}
                                icon={mode.icon}
                                title={mode.title}
                                desc={mode.desc}
                                color={mode.color}
                                onPress={() => {}}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Sessions</Text>
                    <View style={styles.sessionsList}>
                        {recentSessions.map((session, idx) => (
                            <SessionCard
                                key={idx}
                                topic={session.topic}
                                time={session.time}
                                score={session.score}
                                improvement={session.improvement}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
