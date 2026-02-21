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
    BotMessageSquare,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Globe,
    Zap,
    Award,
} from "lucide-react-native";
import { useLoginStyles } from "./Styles";
import { Button } from "../../components/Button/Button";
import { FeatureItem } from "@/components/FeatureItem/FeatureItem";
import { CustomInput } from "@/components/Input/Input";
import { ROUTE_PATHS } from "@/routes/routes";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    const styles = useLoginStyles();

    const featureData = [
        {
            icon: <Globe size={24} color="#fff" />,
            label: "20+ Languages",
            backgroundColor: "#38bdf8",
        },
        {
            icon: <Zap size={24} color="#fff" />,
            label: "AI Feedback",
            backgroundColor: "#a78bfa",
        },
        {
            icon: <Award size={24} color="#fff" />,
            label: "Real Progress",
            backgroundColor: "#fb7185",
        },
    ];

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
                        <View style={styles.headerGradient}>
                            <View style={{ alignItems: "center" }}>
                                <View style={styles.headerIcon}>
                                    <BotMessageSquare size={40} color="#fff" />
                                </View>
                                <Text style={styles.headerTitle}>Votalk</Text>
                                <Text style={styles.headerSubtitle}>
                                    Welcome back! Let's continue learning
                                </Text>
                            </View>
                        </View>

                        <View style={styles.formSection}>
                            <View style={styles.formContainer}>
                                <Text style={styles.signInTitle}>Sign In</Text>

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
                                <View
                                    style={{
                                        alignItems: "flex-end",
                                        marginBottom: 24,
                                    }}
                                >
                                    <Button
                                        title="Forgot Password?"
                                        onPress={() =>
                                            router.push(
                                                ROUTE_PATHS.AUTH
                                                    .FORGOT_PASSWORD,
                                            )
                                        }
                                        textStyles={styles.forgotPassword}
                                    />
                                </View>

                                <Button
                                    title="Sign In"
                                    onPress={() =>
                                        router.push(ROUTE_PATHS.APP.HOME)
                                    }
                                    buttonStyles={styles.signInButton}
                                    textStyles={styles.signInButtonText}
                                />
                                <View style={styles.dividerContainer}>
                                    <View style={styles.dividerLine} />
                                    <Text style={styles.dividerText}>
                                        Or continue with
                                    </Text>
                                    <View style={styles.dividerLine} />
                                </View>
                                <View style={styles.socialRow}>
                                    <Button
                                        title="Google"
                                        onPress={() => {}}
                                        buttonStyles={styles.socialButton}
                                        textStyles={styles.socialButtonText}
                                    />
                                    <Button
                                        title="Facebook"
                                        onPress={() => {}}
                                        buttonStyles={styles.socialButton}
                                        textStyles={styles.socialButtonText}
                                    />
                                </View>
                                <View style={styles.signupRow}>
                                    <Text style={styles.signupText}>
                                        Don't have an account?
                                    </Text>
                                    <Button
                                        title="Sign Up"
                                        onPress={() =>
                                            router.push(
                                                ROUTE_PATHS.AUTH.REGISTER,
                                            )
                                        }
                                        buttonStyles={styles.signUpButton}
                                        textStyles={styles.signupLink}
                                    />
                                </View>
                            </View>
                            <View style={styles.featuresRow}>
                                {featureData.map((item, idx) => (
                                    <FeatureItem
                                        key={item.label}
                                        icon={item.icon}
                                        label={item.label}
                                        backgroundColor={item.backgroundColor}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Login;
