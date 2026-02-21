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
import { CustomInput } from "@/components/Input/Input";
import { ROUTE_PATHS } from "@/routes/routes";

const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const styles = useChangePasswordStyles();
    const router = useRouter();

    const handleSubmit = () => {
        setSubmitted(true);
        router.push(ROUTE_PATHS.AUTH.LOGIN);
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

                                <CustomInput
                                    label="New Password"
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="New password"
                                    secureTextEntry={true}
                                    startIcon={
                                        <Lock
                                            size={20}
                                            color={styles.inputIcon.color}
                                        />
                                    }
                                    showPasswordToggle={true}
                                />
                                <CustomInput
                                    label="Confirm Password"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    placeholder="Confirm password"
                                    secureTextEntry={true}
                                    startIcon={
                                        <Lock
                                            size={20}
                                            color={styles.inputIcon.color}
                                        />
                                    }
                                    showPasswordToggle={true}
                                />

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
                            onPress={() => router.push(ROUTE_PATHS.AUTH.LOGIN)}
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
