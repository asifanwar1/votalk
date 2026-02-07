import { Tabs, useFocusEffect, usePathname } from "expo-router";
import { useCallback, useEffect } from "react";

import {
    Home,
    Book,
    Mic,
    TrendingUp,
    MoreHorizontal,
} from "lucide-react-native";

import CustomTabBar from "../../../components/CustomTabBar/CustomTabBar";
import { BOTTOM_TAB_OPTIONS } from "../../../routes/tabConfig";

const ICONS = [Home, Book, Mic, TrendingUp, MoreHorizontal];

const LABELS = ["Home", "Learn", "Speak", "Progress", "More"];

export default function TabsLayout() {
    return (
        <Tabs
            tabBar={(props) => (
                <CustomTabBar
                    state={props.state}
                    navigation={props.navigation}
                    icons={ICONS}
                    labels={LABELS}
                    centerIcon={Mic}
                />
            )}
            screenOptions={{
                headerShown: false,
            }}
        >
            {Object.keys(BOTTOM_TAB_OPTIONS).map((route) => (
                <Tabs.Screen key={route} name={route} />
            ))}
        </Tabs>
    );
}
