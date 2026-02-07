import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { createStyles } from "./styles";

type TabBarProps = {
    state: any;
    navigation: any;
    icons: Array<React.ComponentType<{ size: number; color: string }>>;
    labels: string[];
    centerIcon: React.ComponentType<{ size: number; color: string }>;
};

const CustomTabBar = ({
    state,
    icons,
    labels,
    navigation,
    centerIcon: CenterIcon,
}: TabBarProps) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route: any, idx: number) => {
                if (idx === 2) {
                    return (
                        <View key={route.key} style={styles.centerTabWrapper}>
                            <TouchableOpacity
                                style={styles.centerTab}
                                onPress={() => navigation.navigate(route.name)}
                                activeOpacity={0.8}
                            >
                                <CenterIcon size={32} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    );
                }

                const Icon = icons[idx];
                const isFocused = state.index === idx;

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={styles.tab}
                        onPress={() => navigation.navigate(route.name)}
                        activeOpacity={0.8}
                    >
                        <Icon
                            size={24}
                            color={isFocused ? "#6366f1" : "#64748b"}
                        />
                        <Text
                            style={[
                                styles.label,
                                isFocused && styles.labelFocused,
                            ]}
                        >
                            {labels[idx]}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;
