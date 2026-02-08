import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { createStyles } from "./styles";
import type {
    NavigationHelpers,
    ParamListBase,
} from "@react-navigation/native";
import type { Route, TabNavigationState } from "@react-navigation/native";
import type { EdgeInsets } from "react-native-safe-area-context";

type TabBarProps = {
    state: TabNavigationState<ParamListBase>;
    navigation: NavigationHelpers<ParamListBase>;
    icons: Array<React.ComponentType<{ size: number; color: string }>>;
    labels: string[];
    centerIcon: React.ComponentType<{ size: number; color: string }>;
    insets: EdgeInsets;
};

const CustomTabBar = ({
    state,
    icons,
    labels,
    navigation,
    centerIcon: CenterIcon,
    insets,
}: TabBarProps) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    return (
        <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
            {state.routes.map((route: Route<string>, idx: number) => {
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
                            color={isFocused ? colors.primary : "#64748b"}
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
