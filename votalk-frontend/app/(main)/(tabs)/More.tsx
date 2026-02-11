import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
    User,
    MessageSquare,
    Info,
    Shield,
    Bell,
    BookText,
    Award,
    ChevronRight,
    Mail,
    Settings,
    CircleEllipsis,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../../hooks/useTheme";
import { useMoreStyles } from "./Styles";
import { ROUTE_PATHS } from "../../../routes/routes";
import { useRouter } from "expo-router";

const MORE_ITEMS = [
    {
        icon: <User size={22} color="#8b5cf6" />,
        label: "Profile",
        route: ROUTE_PATHS.APP.PROFILE,
    },
    {
        icon: <MessageSquare size={22} color="#8b5cf6" />,
        label: "Chat History",
        route: ROUTE_PATHS.APP.CONVERSATIONS,
    },
    {
        icon: <Award size={22} color="#8b5cf6" />,
        label: "Badges",
        route: ROUTE_PATHS.APP.BADGES,
    },
    {
        icon: <Bell size={22} color="#8b5cf6" />,
        label: "Notifications",
        route: ROUTE_PATHS.APP.NOTIFICATIONS,
    },
    {
        icon: <Info size={22} color="#8b5cf6" />,
        label: "About",
        route: ROUTE_PATHS.APP.ABOUT_US,
    },
    {
        icon: <Shield size={22} color="#8b5cf6" />,
        label: "Privacy Policy",
        route: ROUTE_PATHS.APP.PRIVACY_POLICY,
    },
    {
        icon: <Mail size={22} color="#8b5cf6" />,
        label: "Contact Us",
        route: ROUTE_PATHS.APP.CONTACT_US,
    },
    {
        icon: <Settings size={22} color="#8b5cf6" />,
        label: "Settings",
        route: ROUTE_PATHS.APP.SETTINGS,
    },
];

const More = () => {
    const { colors } = useTheme();
    const styles = useMoreStyles();
    const router = useRouter();
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
                            <Text style={styles.headerTitle}>More</Text>
                            <Text style={styles.headerSubtitle}>
                                Access more features and settings
                            </Text>
                        </View>
                        <View style={styles.trophyContainer}>
                            <CircleEllipsis size={24} color="#fff" />
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.section}>
                    {MORE_ITEMS.map((item, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={styles.moreItem}
                            onPress={() => router.push(item.route)}
                            activeOpacity={0.8}
                        >
                            <View style={styles.moreItemLeft}>
                                {item.icon}
                                <Text style={styles.moreItemLabel}>
                                    {item.label}
                                </Text>
                            </View>
                            <ChevronRight size={20} color="#64748b" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default More;
