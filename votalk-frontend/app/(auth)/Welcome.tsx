import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useWelcomeStyles } from "./Styles";
import { BotMessageSquare } from "lucide-react-native";
import { ROUTE_PATHS } from "@/routes/routes";

export default function Welcome() {
    const styles = useWelcomeStyles();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <BotMessageSquare size={80} color="#8b5cf6" />

            <Text style={styles.title}>Welcome to Votalk</Text>
            <Text style={styles.subtitle}>
                Join a community that offers a safe space, a strong voice, and a
                shared journey.
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(ROUTE_PATHS.AUTH.REGISTER)}
            >
                <Text style={styles.buttonText}>Create New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.outlineButton]}
                onPress={() => router.push(ROUTE_PATHS.AUTH.LOGIN)}
            >
                <Text style={[styles.buttonText, styles.outlineButtonText]}>
                    Log In To Existing Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}
