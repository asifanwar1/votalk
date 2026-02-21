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
import { ROUTE_PATHS } from "@/routes/routes";
import { Stats } from "@/components/Stats/Stats";
import { activeStats } from "@/mock-data/stats";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

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
                            <View style={styles.termsText}>
                                <Text>I agree to the </Text>
                                <Button
                                    title="Terms of Service"
                                    textStyles={styles.link}
                                    onPress={() =>
                                        router.push(ROUTE_PATHS.APP.TERMS)
                                    }
                                />
                                <Text> and </Text>
                                <Button
                                    title="Privacy Policy"
                                    textStyles={styles.link}
                                    onPress={() =>
                                        router.push(
                                            ROUTE_PATHS.APP.PRIVACY_POLICY,
                                        )
                                    }
                                />
                            </View>
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
                                onPress={() =>
                                    router.push(ROUTE_PATHS.AUTH.LOGIN)
                                }
                                buttonStyles={styles.signInButton}
                                textStyles={styles.signinLink}
                            />
                        </View>
                    </View>

                    <View style={styles.trustContainer}>
                        <Stats stats={activeStats} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Register;
