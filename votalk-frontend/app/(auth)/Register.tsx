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

                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.label}>Full Name</Text>
                            <View style={styles.inputWrapper}>
                                <User size={20} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChangeText={(text) =>
                                        setFormData({ ...formData, name: text })
                                    }
                                    autoCapitalize="words"
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputWrapper}>
                                <Mail size={20} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChangeText={(text) =>
                                        setFormData({
                                            ...formData,
                                            email: text,
                                        })
                                    }
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputWrapper}>
                                <Lock size={20} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChangeText={(text) =>
                                        setFormData({
                                            ...formData,
                                            password: text,
                                        })
                                    }
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
                                        <EyeOff size={20} color="#888" />
                                    ) : (
                                        <Eye size={20} color="#888" />
                                    )}
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.passwordHint}>
                                At least 8 characters with numbers & symbols
                            </Text>
                        </View>

                        <View style={{ marginBottom: 24 }}>
                            <Text style={styles.label}>Confirm Password</Text>
                            <View style={styles.inputWrapper}>
                                <Lock size={20} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChangeText={(text) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: text,
                                        })
                                    }
                                    secureTextEntry={!showPassword}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

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
