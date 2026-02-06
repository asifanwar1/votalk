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
import { useLoginStyles } from "./Styles";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const styles = useLoginStyles();

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
                                            router.push("/(auth)/Register")
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
