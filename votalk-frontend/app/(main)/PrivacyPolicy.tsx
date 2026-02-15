import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { usePrivacyPolicyStyles } from "./Styles";
import { ArrowLeft, Shield } from "lucide-react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";

const PRIVACY_TEXT = `
Your privacy is important to us. Votalk collects only the data necessary to provide and improve your language learning experience. We do not sell or share your personal information with third parties.

- We use your data to personalize lessons and track your progress.
- All conversations and recordings are processed securely.
- You can request deletion of your account and data at any time.

For more details, please contact us at support@votalk.app.
`;

const PrivacyPolicy = () => {
    const { colors } = useTheme();
    const styles = usePrivacyPolicyStyles();
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headerTitle}>Privacy Policy</Text>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => router.push("/(main)/(tabs)/More")}
                >
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>Back</Text>
                </TouchableOpacity>
            </View> */}
            <CustomHeader
                title="Privacy Policy"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.push("/(main)/(tabs)/More")}
            />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.iconCircle}>
                    <Shield size={36} color="#fff" />
                </View>
                <Text style={styles.title}>Your Privacy Matters</Text>
                <Text style={styles.body}>{PRIVACY_TEXT}</Text>
            </ScrollView>
        </View>
    );
};

export default PrivacyPolicy;
