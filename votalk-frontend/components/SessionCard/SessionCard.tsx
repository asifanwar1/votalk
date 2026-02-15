import React from "react";
import { View, Text } from "react-native";
import { TrendingUp } from "lucide-react-native";
import { useTheme } from "@/hooks/useTheme";
import { sessionCardStyles } from "./Styles";

type SessionCardProps = {
    topic: string;
    time: string;
    score: string | number;
    improvement: string;
};

export const SessionCard: React.FC<SessionCardProps> = ({
    topic,
    time,
    score,
    improvement,
}) => {
    const { colors } = useTheme();
    const styles = sessionCardStyles(colors);

    return (
        <View style={styles.sessionCard}>
            <View style={styles.sessionContent}>
                <View style={styles.sessionLeft}>
                    <Text style={styles.sessionTopic}>{topic}</Text>
                    <Text style={styles.sessionTime}>{time}</Text>
                </View>
                <View style={styles.sessionRight}>
                    <Text style={styles.sessionScore}>{score}</Text>
                    <View style={styles.improvementContainer}>
                        <TrendingUp size={12} color={colors.improvement} />
                        <Text style={styles.improvementText}>
                            {improvement}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
