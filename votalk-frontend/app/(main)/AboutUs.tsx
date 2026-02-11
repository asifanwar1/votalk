import React from "react";
import {
    View,
    Text,
    ScrollView,
    Linking,
    TouchableOpacity,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useAboutStyles } from "./Styles";
import { ArrowLeft, Info } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function AboutUs() {
    const { colors } = useTheme();
    const styles = useAboutStyles();
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>About Us</Text>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => router.push("/(main)/(tabs)/More")}
                >
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>Back</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.iconCircle}>
                    <Info size={36} color="#fff" />
                </View>
                <Text style={styles.title}>Votalk</Text>
                <Text style={styles.subtitle}>Speak with confidence</Text>
                <Text style={styles.body}>
                    Votalk is your AI-powered language companion, designed to
                    help you practice real-life conversations, improve your
                    pronunciation, and build confidence in speaking. Our mission
                    is to make language learning engaging, accessible, and
                    effective for everyone.
                </Text>
                <Text style={styles.body}>
                    Whether you're traveling, working, or just chatting, Votalk
                    adapts to your needs with personalized lessons, instant
                    feedback, and a supportive community.
                </Text>
                <Text style={styles.sectionTitle}>Contact & Links</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL("mailto:support@votalk.app")}
                >
                    <Text style={styles.link}>support@votalk.app</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL("https://votalk.app")}
                >
                    <Text style={styles.link}>https://votalk.app</Text>
                </TouchableOpacity>
                <Text style={styles.version}>Version 1.0.0</Text>
            </ScrollView>
        </View>
    );
}
