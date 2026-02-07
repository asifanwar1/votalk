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

const OTP_LENGTH = 4;

const Otp = () => {
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
    const [submitted, setSubmitted] = useState(false);
    const styles = useOtpStyles();
    const router = useRouter();
    const inputs = useRef<Array<TextInput | null>>([]);

    const handleChange = (text: string, idx: number) => {
        if (!/^\d*$/.test(text)) return;
        const newOtp = [...otp];
        newOtp[idx] = text;
        setOtp(newOtp);

        if (text && idx < OTP_LENGTH - 1) {
            inputs.current[idx + 1]?.focus();
        }
    };

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

                                <View style={styles.otpRow}>
                                    {otp.map((digit, idx) => (
                                        <TextInput
                                            key={idx}
                                            ref={(ref) => {
                                                inputs.current[idx] = ref;
                                            }}
                                            style={styles.otpInput}
                                            keyboardType="number-pad"
                                            maxLength={1}
                                            value={digit}
                                            onChangeText={(text) =>
                                                handleChange(text, idx)
                                            }
                                            autoFocus={idx === 0}
                                            returnKeyType="next"
                                        />
                                    ))}
                                </View>

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
