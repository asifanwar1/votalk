import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRegisterStyles } from "@/app/(auth)/Styles";
import { getStatsStyles } from "./Styles";
import { useTheme } from "@/hooks/useTheme";

type Stats = {
    value: string;
    label: string;
    color?: string;
    labelColor?: string;
};

type StatsProps = {
    stats: Stats[];
};

export const Stats: React.FC<StatsProps> = ({ stats }) => {
    const { colors } = useTheme();
    const styles = getStatsStyles(colors);

    return (
        <View style={styles.statsRow}>
            {stats.map((stat, idx) => (
                <React.Fragment key={stat.label}>
                    <View style={styles.statsItem}>
                        <Text
                            style={[
                                styles.statsValue,
                                stat.color ? { color: stat.color } : {},
                            ]}
                        >
                            {stat.value}
                        </Text>
                        <Text
                            style={[
                                styles.statsLabel,
                                { color: stat.labelColor },
                            ]}
                        >
                            {stat.label}
                        </Text>
                    </View>
                    {idx < stats.length - 1 && (
                        <View style={styles.statsDivider} />
                    )}
                </React.Fragment>
            ))}
        </View>
    );
};
