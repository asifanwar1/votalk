import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
    MessageCircle,
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
} from "lucide-react-native";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Header Section with Gradient */}
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

                {/* Form Section */}
                <View style={styles.formSection}>
                    <View style={styles.formContainer}>
                        <Text style={styles.signUpTitle}>Create Account</Text>

                        {/* Name Input */}
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

                        {/* Email Input */}
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

                        {/* Password Input */}
                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputWrapper}>
                                <Lock size={20} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Create a strong password"
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

                        {/* Confirm Password Input */}
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

                        {/* Terms Checkbox */}
                        <View style={styles.checkboxRow}>
                            <TouchableOpacity
                                style={
                                    styles.checkbox
                                } /* implement checked state as needed */
                            >
                                {/* You can use a custom checkbox or a library */}
                            </TouchableOpacity>
                            <Text style={styles.termsText}>
                                I agree to the{" "}
                                <Text style={styles.link}>
                                    Terms of Service
                                </Text>{" "}
                                and{" "}
                                <Text style={styles.link}>Privacy Policy</Text>
                            </Text>
                        </View>

                        {/* Sign Up Button */}
                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={styles.signUpButtonText}>
                                Create Account
                            </Text>
                        </TouchableOpacity>

                        {/* Divider */}
                        <View style={styles.dividerContainer}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>
                                Or sign up with
                            </Text>
                            <View style={styles.dividerLine} />
                        </View>

                        {/* Social Login */}
                        <View style={styles.socialRow}>
                            <TouchableOpacity style={styles.socialButton}>
                                <Text style={styles.socialButtonText}>
                                    Google
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialButton}>
                                <Text style={styles.socialButtonText}>
                                    Facebook
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Sign In Link */}
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.signinText}>
                                Already have an account?{" "}
                                <Text style={styles.signinLink}>Sign In</Text>
                            </Text>
                        </View>
                    </View>

                    {/* Trust Indicators */}
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

const styles = StyleSheet.create({
    headerGradient: {
        backgroundColor: "#8b5cf6",
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
        padding: 32,
        paddingBottom: 48,
    },
    headerIcon: {
        width: 80,
        height: 80,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
        textAlign: "center",
    },
    headerSubtitle: {
        color: "rgba(255,255,255,0.9)",
        fontSize: 16,
        textAlign: "center",
    },
    formSection: {
        flex: 1,
        paddingHorizontal: 32,
        marginTop: -24,
    },
    formContainer: {
        backgroundColor: "#fff",
        borderRadius: 24,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
        padding: 32,
        marginBottom: 16,
    },
    signUpTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#334155",
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f1f5f9",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        paddingHorizontal: 12,
        paddingVertical: 4,
        position: "relative",
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: "#1e293b",
    },
    eyeButton: {
        position: "absolute",
        right: 12,
        top: "50%",
        marginTop: -10,
        padding: 4,
    },
    passwordHint: {
        fontSize: 12,
        color: "#64748b",
        marginTop: 4,
        marginLeft: 2,
    },
    checkboxRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 24,
        gap: 8,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#a3a3a3",
        marginTop: 2,
        marginRight: 8,
        backgroundColor: "#fff",
    },
    termsText: {
        fontSize: 13,
        color: "#64748b",
        flex: 1,
        flexWrap: "wrap",
    },
    link: {
        color: "#8b5cf6",
        fontWeight: "500",
    },
    signUpButton: {
        backgroundColor: "#8b5cf6",
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: "center",
        marginBottom: 16,
        shadowColor: "#8b5cf6",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    signUpButtonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#e5e7eb",
    },
    dividerText: {
        marginHorizontal: 12,
        color: "#64748b",
        fontSize: 14,
        backgroundColor: "#fff",
        paddingHorizontal: 8,
    },
    socialRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24,
        gap: 8,
    },
    socialButton: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 12,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        marginHorizontal: 4,
    },
    socialButtonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#334155",
    },
    signinText: {
        color: "#64748b",
        fontSize: 14,
    },
    signinLink: {
        color: "#6366f1",
        fontWeight: "600",
    },
    trustContainer: {
        backgroundColor: "#faf5ff",
        borderRadius: 16,
        padding: 20,
        marginTop: 16,
        marginBottom: 32,
    },
    trustRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    trustItem: {
        alignItems: "center",
        flex: 1,
    },
    trustValue: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
    },
    trustLabel: {
        fontSize: 12,
        color: "#64748b",
        textAlign: "center",
    },
    trustDivider: {
        width: 1,
        height: 40,
        backgroundColor: "#e5e7eb",
        marginHorizontal: 8,
    },
});
