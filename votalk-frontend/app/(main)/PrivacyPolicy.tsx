import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { usePrivacyPolicyStyles } from "./Styles";
import { Shield } from "lucide-react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { PRIVACY_TEXT } from "@/mock-data/content";

const PrivacyPolicy = () => {
    const { colors } = useTheme();
    const styles = usePrivacyPolicyStyles();
    const router = useRouter();

    return (
        <View style={styles.container}>
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
