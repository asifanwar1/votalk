import React, { useRef } from "react";
import { View, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { useOtpInputStyles } from "./Styles";

type OtpInputProps = {
    value: string[];
    onChange: (otp: string[]) => void;
    length?: number;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
};

export const OtpInput: React.FC<OtpInputProps> = ({
    value,
    onChange,
    length = 4,
    style,
    inputStyle,
}) => {
    const { colors } = useTheme();
    const styles = useOtpInputStyles(colors);
    const inputs = useRef<Array<TextInput | null>>([]);

    const handleChange = (text: string, idx: number) => {
        if (!/^\d*$/.test(text)) return;
        const newOtp = [...value];
        newOtp[idx] = text;
        onChange(newOtp);

        if (text && idx < length - 1) {
            inputs.current[idx + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, idx: number) => {
        if (e.nativeEvent.key === "Backspace" && !value[idx] && idx > 0) {
            inputs.current[idx - 1]?.focus();
        }
    };

    return (
        <View style={[styles.otpRow, style]}>
            {Array.from({ length }).map((_, idx) => (
                <TextInput
                    key={idx}
                    ref={(ref) => {
                        inputs.current[idx] = ref;
                    }}
                    style={[styles.otpInput, inputStyle]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={value[idx] || ""}
                    onChangeText={(text) => handleChange(text, idx)}
                    onKeyPress={(e) => handleKeyPress(e, idx)}
                    autoFocus={idx === 0}
                    returnKeyType="next"
                />
            ))}
        </View>
    );
};
