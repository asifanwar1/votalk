import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRegisterStyles } from "@/app/(auth)/Styles";
import { getStatsStyles } from "./Styles";
import { useTheme } from "@/hooks/useTheme";

type Stats = {
    value: string;
    label: string;
    color?: string;
};

type StatsProps = {
    stats: Stats[];
};

export const Stats: React.FC<StatsProps> = ({ stats }) => {
    const { colors } = useTheme();
    const styles = getStatsStyles(colors);

    return (
        <View style={styles.trustRow}>
            {stats.map((stat, idx) => (
                <React.Fragment key={stat.label}>
                    <View style={styles.trustItem}>
                        <Text
                            style={[
                                styles.trustValue,
                                stat.color ? { color: stat.color } : {},
                            ]}
                        >
                            {stat.value}
                        </Text>
                        <Text style={styles.trustLabel}>{stat.label}</Text>
                    </View>
                    {idx < stats.length - 1 && (
                        <View style={styles.trustDivider} />
                    )}
                </React.Fragment>
            ))}
        </View>
    );
};
