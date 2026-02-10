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
import { APP_ROUTES } from "../../../routes/routes";
import { useNavigation } from "@react-navigation/native";

const MORE_ITEMS = [
    {
        icon: <User size={22} color="#8b5cf6" />,
        label: "Profile",
        route: APP_ROUTES.PROFILE,
    },
    {
        icon: <MessageSquare size={22} color="#8b5cf6" />,
        label: "Chat History",
        route: APP_ROUTES.CONVERSATIONS,
    },
    {
        icon: <Award size={22} color="#8b5cf6" />,
        label: "Badges",
        route: APP_ROUTES.BADGES,
    },
    {
        icon: <Bell size={22} color="#8b5cf6" />,
        label: "Notifications",
        route: APP_ROUTES.NOTIFICATIONS,
    },
    {
        icon: <Info size={22} color="#8b5cf6" />,
        label: "About",
        route: APP_ROUTES.ABOUT_US,
    },
    {
        icon: <Shield size={22} color="#8b5cf6" />,
        label: "Privacy Policy",
        route: APP_ROUTES.PRIVACY_POLICY,
    },
    {
        icon: <Mail size={22} color="#8b5cf6" />,
        label: "Contact Us",
        route: APP_ROUTES.CONTACT_US,
    },
    {
        icon: <Settings size={22} color="#8b5cf6" />,
        label: "Settings",
        route: APP_ROUTES.SETTINGS,
    },
];

const More = () => {
    const { colors } = useTheme();
    const styles = useMoreStyles();
    const navigation = useNavigation();

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
                            onPress={() =>
                                navigation.navigate(item.route as never)
                            }
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
