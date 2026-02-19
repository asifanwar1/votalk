import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useNotFoundStyles } from "./Styles";
import { useRouter } from "expo-router";
import { AlertTriangle } from "lucide-react-native";
import CustomHeader from "@/components/CustomHeader/CustomHeader";

const NotFound = () => {
    const { colors } = useTheme();
    const styles = useNotFoundStyles();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <CustomHeader
                title="Not Found"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.back()}
            />
            <View style={styles.content}>
                <View style={styles.iconCircle}>
                    <AlertTriangle size={40} color="#fff" />
                </View>
                <Text style={styles.title}>Page Not Found</Text>
                <Text style={styles.subtitle}>
                    Sorry, the page you’re looking for doesn’t exist or has been
                    moved.
                </Text>
                <TouchableOpacity
                    style={styles.homeBtn}
                    onPress={() => router.replace("/(main)/(tabs)/Home")}
                >
                    <Text style={styles.homeBtnText}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NotFound;
