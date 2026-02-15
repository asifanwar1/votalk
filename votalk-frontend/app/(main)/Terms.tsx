import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useAboutStyles } from "./Styles";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { useTheme } from "../../hooks/useTheme";
import { useRouter } from "expo-router";

const Terms = () => {
    const styles = useAboutStyles();
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <CustomHeader
                title="Terms of Service"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.back()}
            />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Terms of Service</Text>
                <Text style={styles.body}>
                    Welcome to Votalk! By using our app, you agree to the
                    following terms:
                </Text>
                <Text style={styles.body}>
                    1. You must use Votalk for lawful purposes only and not
                    misuse the app in any way.
                </Text>
                <Text style={styles.body}>
                    2. Your account and personal data are protected as described
                    in our Privacy Policy.
                </Text>
                <Text style={styles.body}>
                    3. Votalk may update these terms at any time. Continued use
                    of the app means you accept the new terms.
                </Text>
                <Text style={styles.body}>
                    4. All content, features, and services provided by Votalk
                    are subject to change without notice.
                </Text>
                <Text style={styles.body}>
                    5. If you have questions or concerns, please contact us at
                    support@votalk.app.
                </Text>
            </ScrollView>
        </View>
    );
};

export default Terms;
