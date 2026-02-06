import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useWelcomeStyles } from "./Styles";

export default function Welcome() {
    const styles = useWelcomeStyles();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Votalk</Text>
            <Text style={styles.subtitle}>
                Join a community that offers a safe space, a strong voice, and a
                shared journey.
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(auth)/Register")}
            >
                <Text style={styles.buttonText}>Create New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.outlineButton]}
                onPress={() => router.push("/(auth)/Login")}
            >
                <Text style={[styles.buttonText, styles.outlineButtonText]}>
                    Log In To Existing Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}
