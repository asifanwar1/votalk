import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    MessageCircle,
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
} from "lucide-react-native";
import { useRegisterStyles } from "./Styles";
import { useRouter } from "expo-router";
import { Button } from "../../components/Button/Button";
import { CustomInput } from "@/components/Input/Input";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const styles = useRegisterStyles();
    const router = useRouter();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.headerGradient}>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.headerIcon}>
                            <MessageCircle size={40} color="#fff" />
                        </View>
                        <Text style={styles.headerTitle}>Join Votalk</Text>
                        <Text style={styles.headerSubtitle}>
                            Start your language journey today
                        </Text>
                    </View>
                </View>

                <View style={styles.formSection}>
                    <View style={styles.formContainer}>
                        <Text style={styles.signUpTitle}>Create Account</Text>

                        <CustomInput
                            label="Full Name"
                            value={formData.name}
                            onChangeText={(text) =>
                                setFormData({
                                    ...formData,
                                    name: text,
                                })
                            }
                            placeholder="John Doe"
                            keyboardType="default"
                            startIcon={
                                <User
                                    size={20}
                                    color={styles.inputIcon.color}
                                />
                            }
                        />
                        <CustomInput
                            label="Email"
                            value={formData.email}
                            onChangeText={(text) =>
                                setFormData({
                                    ...formData,
                                    email: text,
                                })
                            }
                            placeholder="your.email@example.com"
                            keyboardType="email-address"
                            startIcon={
                                <Mail
                                    size={20}
                                    color={styles.inputIcon.color}
                                />
                            }
                        />

                        <View style={styles.passwordRow}>
                            <CustomInput
                                label="Password"
                                value={formData.password}
                                onChangeText={(text) =>
                                    setFormData({
                                        ...formData,
                                        password: text,
                                    })
                                }
                                placeholder="Enter your password"
                                secureTextEntry={true}
                                startIcon={
                                    <Lock
                                        size={20}
                                        color={styles.inputIcon.color}
                                    />
                                }
                                showPasswordToggle={true}
                            />
                            <Text style={styles.passwordHint}>
                                At least 8 characters with numbers & symbols
                            </Text>
                        </View>

                        <CustomInput
                            label="Confirm Password"
                            value={formData.confirmPassword}
                            onChangeText={(text) =>
                                setFormData({
                                    ...formData,
                                    confirmPassword: text,
                                })
                            }
                            placeholder="Confirm your password"
                            secureTextEntry={true}
                            startIcon={
                                <Lock
                                    size={20}
                                    color={styles.inputIcon.color}
                                />
                            }
                            showPasswordToggle={true}
                        />

                        <View style={styles.checkboxRow}>
                            <TouchableOpacity
                                style={styles.checkbox}
                            ></TouchableOpacity>
                            <Text style={styles.termsText}>
                                I agree to the{" "}
                                <Text style={styles.link}>
                                    Terms of Service
                                </Text>{" "}
                                and{" "}
                                <Text style={styles.link}>Privacy Policy</Text>
                            </Text>
                        </View>

                        <Button
                            title="Create Account"
                            onPress={() => ({})}
                            buttonStyles={styles.signUpButton}
                            textStyles={styles.signUpButtonText}
                        />

                        <View style={styles.dividerContainer}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>
                                Or sign up with
                            </Text>
                            <View style={styles.dividerLine} />
                        </View>

                        <View style={styles.socialRow}>
                            <Button
                                title="Google"
                                onPress={() => ({})}
                                buttonStyles={styles.socialButton}
                                textStyles={styles.socialButtonText}
                            />
                            <Button
                                title="Facebook"
                                onPress={() => ({})}
                                buttonStyles={styles.socialButton}
                                textStyles={styles.socialButtonText}
                            />
                        </View>

                        <View style={styles.account}>
                            <Text style={styles.signinText}>
                                Already have an account?{" "}
                            </Text>

                            <Button
                                title="Sign In"
                                onPress={() => router.push("/(auth)/Login")}
                                buttonStyles={styles.signInButton}
                                textStyles={styles.signinLink}
                            />
                        </View>
                    </View>

                    <View style={styles.trustContainer}>
                        <View style={styles.trustRow}>
                            <View style={styles.trustItem}>
                                <Text
                                    style={[
                                        styles.trustValue,
                                        { color: "#8b5cf6" },
                                    ]}
                                >
                                    500K+
                                </Text>
                                <Text style={styles.trustLabel}>
                                    Active Learners
                                </Text>
                            </View>
                            <View style={styles.trustDivider} />
                            <View style={styles.trustItem}>
                                <Text
                                    style={[
                                        styles.trustValue,
                                        { color: "#fb7185" },
                                    ]}
                                >
                                    4.9★
                                </Text>
                                <Text style={styles.trustLabel}>
                                    App Rating
                                </Text>
                            </View>
                            <View style={styles.trustDivider} />
                            <View style={styles.trustItem}>
                                <Text
                                    style={[
                                        styles.trustValue,
                                        { color: "#f59e42" },
                                    ]}
                                >
                                    20+
                                </Text>
                                <Text style={styles.trustLabel}>Languages</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Register;
