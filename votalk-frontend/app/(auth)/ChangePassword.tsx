import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Lock, Eye, EyeOff } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useChangePasswordStyles } from "./Styles";
import { Button } from "../../components/Button/Button";

const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const styles = useChangePasswordStyles();
    const router = useRouter();

    const handleSubmit = () => {
        setSubmitted(true);
        router.push("/(auth)/Login");
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.headerGradient}>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.headerIcon}>
                            <Lock size={40} color="#fff" />
                        </View>
                        <Text style={styles.headerTitle}>Set New Password</Text>
                        <Text style={styles.headerSubtitle}>
                            Enter your new password below
                        </Text>
                    </View>
                </View>
                <View style={styles.formSection}>
                    <View style={styles.formContainer}>
                        {submitted ? (
                            <Text style={styles.successText}>
                                Your password has been changed successfully!
                            </Text>
                        ) : (
                            <>
                                <Text style={styles.title}>
                                    Change Password
                                </Text>

                                <Text style={styles.label}>New Password</Text>
                                <View style={styles.inputWrapper}>
                                    <Lock size={20} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="New password"
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!showPassword}
                                        autoCapitalize="none"
                                    />
                                    <TouchableOpacity
                                        style={styles.eyeButton}
                                        onPress={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.label}>
                                    Confirm Password
                                </Text>
                                <View style={styles.inputWrapper}>
                                    <Lock size={20} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        secureTextEntry={!showPassword}
                                        autoCapitalize="none"
                                    />
                                </View>

                                <Button
                                    title="Change Password"
                                    // disabled={
                                    //     !password ||
                                    //     !confirmPassword ||
                                    //     password !== confirmPassword
                                    // }
                                    onPress={handleSubmit}
                                    buttonStyles={styles.resetButton}
                                    textStyles={styles.resetButtonText}
                                />
                            </>
                        )}

                        <Button
                            title=" Back to Login"
                            onPress={() => router.push("/(auth)/Login")}
                            buttonStyles={{
                                alignItems: "center",
                                marginTop: 16,
                            }}
                            textStyles={styles.backToLoginText}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ChangePassword;
