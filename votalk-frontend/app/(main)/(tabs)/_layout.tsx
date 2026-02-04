import { Tabs, useFocusEffect, usePathname } from "expo-router";
import { useCallback, useEffect } from "react";

import CustomTabBar from "../../../components/CustomTabBar/CustomTabBar";
import { BOTTOM_TAB_OPTIONS } from "../../../routes/tabConfig";

export default function TabsLayout() {
    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
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
