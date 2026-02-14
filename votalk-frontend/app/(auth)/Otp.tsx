import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useOtpStyles } from "./Styles";
import { Mail } from "lucide-react-native";
import { Button } from "../../components/Button/Button";
import { OtpInput } from "@/components/OtpInput/OtpInput";

const OTP_LENGTH = 4;

const Otp = () => {
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
    const [submitted, setSubmitted] = useState(false);
    const styles = useOtpStyles();
    const router = useRouter();

    const handleSubmit = () => {
        setSubmitted(true);
        router.push("/(auth)/ChangePassword");
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.headerGradient}>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.headerIcon}>
                            <Mail size={40} color="#fff" />
                        </View>
                        <Text style={styles.headerTitle}>Verify OTP</Text>
                        <Text style={styles.headerSubtitle}>
                            Enter the 4-digit code sent to your email
                        </Text>
                    </View>
                </View>
                <View style={styles.formSection}>
                    <View style={styles.formContainer}>
                        {submitted ? (
                            <Text style={styles.successText}>
                                OTP verified! You may now reset your password.
                            </Text>
                        ) : (
                            <>
                                <Text style={styles.title}>Enter OTP</Text>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    length={4}
                                />

                                <Button
                                    title="Verify"
                                    onPress={handleSubmit}
                                    // disabled={otp.some((d) => !d)}
                                    buttonStyles={styles.verifyButton}
                                    textStyles={styles.verifyButtonText}
                                />
                                <Button
                                    title="Resend Code"
                                    onPress={() => {}}
                                    buttonStyles={styles.resendBtn}
                                    textStyles={styles.resendText}
                                />
                            </>
                        )}

                        <Button
                            title="Back to Login"
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

export default Otp;
