import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CircleEllipsis, LogOut } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../../hooks/useTheme";
import { useMoreStyles } from "./Styles";
import { useRouter } from "expo-router";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { MORE_ITEMS } from "@/routes/linkConfig";
import CustomModal from "@/components/CustomModal/CustomModal";
import { ROUTE_PATHS } from "@/routes/routes";

const More = () => {
    const { colors } = useTheme();
    const styles = useMoreStyles();
    const router = useRouter();
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);

    const handleLogout = () => {
        setLogoutModalVisible(false);
        router.push(ROUTE_PATHS.AUTH.LOGIN);
    };

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
                        <CustomLink
                            key={idx}
                            icon={item.icon}
                            label={item.label}
                            onPress={() => router.push(item.route)}
                        />
                    ))}
                    <CustomLink
                        icon={<LogOut size={22} color="#8b5cf6" />}
                        label="Logout"
                        onPress={() => setLogoutModalVisible(true)}
                    />
                </View>
            </ScrollView>
            <CustomModal
                visible={logoutModalVisible}
                onClose={() => setLogoutModalVisible(false)}
                title="Confirm Logout"
                confirmText="Logout"
                cancelText="Cancel"
                onConfirm={handleLogout}
            >
                <Text>Are you sure you want to logout?</Text>
            </CustomModal>
        </View>
    );
};

export default More;
