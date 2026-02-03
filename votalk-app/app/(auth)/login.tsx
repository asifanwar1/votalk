import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    MessageCircle,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Globe,
    Zap,
    Award,
} from "lucide-react-native";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <SafeAreaView
            style={{ flex: 1 }}
            edges={["bottom", "left", "right", "top"]}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={{ flex: 1 }}>
                        {/* Header Section with Gradient */}
                        <View style={styles.headerGradient}>
                            <View style={{ alignItems: "center" }}>
                                <View style={styles.headerIcon}>
                                    <MessageCircle size={40} color="#fff" />
                                </View>
                                <Text style={styles.headerTitle}>Votalk</Text>
                                <Text style={styles.headerSubtitle}>
                                    Welcome back! Let's continue learning
                                </Text>
                            </View>
                        </View>

                        {/* Form Section */}
                        <View style={styles.formSection}>
                            <View style={styles.formContainer}>
                                <Text style={styles.signInTitle}>Sign In</Text>
                                {/* ...inputs and buttons... */}
                                {/* Email Input */}
                                <View style={{ marginBottom: 16 }}>
                                    <Text style={styles.label}>Email</Text>
                                    <View style={styles.inputWrapper}>
                                        <Mail
                                            size={20}
                                            style={styles.inputIcon}
                                        />
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
                                <View style={{ marginBottom: 24 }}>
                                    <Text style={styles.label}>Password</Text>
                                    <View style={styles.inputWrapper}>
                                        <Lock
                                            size={20}
                                            style={styles.inputIcon}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter your password"
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
                                                <EyeOff
                                                    size={20}
                                                    color="#888"
                                                />
                                            ) : (
                                                <Eye size={20} color="#888" />
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Forgot Password */}
                                <View
                                    style={{
                                        alignItems: "flex-end",
                                        marginBottom: 24,
                                    }}
                                >
                                    <TouchableOpacity>
                                        <Text style={styles.forgotPassword}>
                                            Forgot Password?
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* Sign In Button */}
                                <TouchableOpacity style={styles.signInButton}>
                                    <Text style={styles.signInButtonText}>
                                        Sign In
                                    </Text>
                                </TouchableOpacity>
                                {/* Divider */}
                                <View style={styles.dividerContainer}>
                                    <View style={styles.dividerLine} />
                                    <Text style={styles.dividerText}>
                                        Or continue with
                                    </Text>
                                    <View style={styles.dividerLine} />
                                </View>
                                {/* Social Login */}
                                <View style={styles.socialRow}>
                                    <TouchableOpacity
                                        style={styles.socialButton}
                                    >
                                        <Text style={styles.socialButtonText}>
                                            Google
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.socialButton}
                                    >
                                        <Text style={styles.socialButtonText}>
                                            Facebook
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* Sign Up Link */}
                                <View
                                    style={{
                                        alignItems: "center",
                                        marginBottom: 0,
                                        paddingBottom: 32,
                                    }}
                                >
                                    <Text style={styles.signupText}>
                                        Don't have an account?
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            router.push("/(auth)/register")
                                        }
                                        style={{ alignItems: "center" }}
                                    >
                                        <Text style={styles.signupLink}>
                                            Sign Up
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* Features Preview */}
                            <View style={styles.featuresRow}>
                                <View style={styles.featureItem}>
                                    <View
                                        style={[
                                            styles.featureIcon,
                                            { backgroundColor: "#38bdf8" },
                                        ]}
                                    >
                                        <Globe size={24} color="#fff" />
                                    </View>
                                    <Text style={styles.featureText}>
                                        20+ Languages
                                    </Text>
                                </View>
                                <View style={styles.featureItem}>
                                    <View
                                        style={[
                                            styles.featureIcon,
                                            { backgroundColor: "#a78bfa" },
                                        ]}
                                    >
                                        <Zap size={24} color="#fff" />
                                    </View>
                                    <Text style={styles.featureText}>
                                        AI Feedback
                                    </Text>
                                </View>
                                <View style={styles.featureItem}>
                                    <View
                                        style={[
                                            styles.featureIcon,
                                            { backgroundColor: "#fb7185" },
                                        ]}
                                    >
                                        <Award size={24} color="#fff" />
                                    </View>
                                    <Text style={styles.featureText}>
                                        Real Progress
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Login;

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
        paddingBottom: 32,
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
    signInTitle: {
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
    forgotPassword: {
        fontSize: 14,
        color: "#6366f1",
        fontWeight: "500",
    },
    signInButton: {
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
    signInButtonText: {
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
    signupText: {
        color: "#64748b",
        fontSize: 14,
    },
    signupLink: {
        color: "#6366f1",
        fontWeight: "600",
    },
    featuresRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginBottom: 32,
    },
    featureItem: {
        alignItems: "center",
        flex: 1,
    },
    featureIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
    },
    featureText: {
        fontSize: 12,
        color: "#64748b",
        fontWeight: "500",
        textAlign: "center",
    },
});
