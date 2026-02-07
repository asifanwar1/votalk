import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Mail } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useForgotPasswordStyles } from "./Styles";
import { Button } from "../../components/Button/Button";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const styles = useForgotPasswordStyles();
    const router = useRouter();

    const handleSubmit = () => {
        setSubmitted(true);
        router.push("/(auth)/Otp");
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.headerGradient}>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.headerIcon}>
                            <Mail size={40} color="#fff" />
                        </View>
                        <Text style={styles.headerTitle}>Forgot Password</Text>
                        <Text style={styles.headerSubtitle}>
                            Enter your email to reset your password
                        </Text>
                    </View>
                </View>
                <View style={styles.formSection}>
                    <View style={styles.formContainer}>
                        {submitted ? (
                            <Text style={styles.successText}>
                                If an account exists for {email}, you’ll receive
                                a password reset email shortly.
                            </Text>
                        ) : (
                            <>
                                <Text style={styles.title}>
                                    Forgot Password
                                </Text>

                                <Text style={styles.label}>Email</Text>
                                <View style={styles.inputWrapper}>
                                    <Mail size={20} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="your.email@example.com"
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                </View>

                                <Button
                                    title="Send Reset Link"
                                    onPress={handleSubmit}
                                    buttonStyles={styles.resetButton}
                                    textStyles={styles.resetButtonText}
                                />
                            </>
                        )}

                        <Button
                            title="Back to Login"
                            onPress={() => router.push("/(auth)/Login")}
                            buttonStyles={styles.backToLoginBtn}
                            textStyles={styles.backToLoginText}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ForgotPassword;
