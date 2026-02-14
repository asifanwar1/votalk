import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useTheme } from "@/hooks/useTheme";
import { useCustomInputStyles } from "./styles";

type CustomInputProps = {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    keyboardType?: "default" | "email-address" | "numeric";
    secureTextEntry?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    showPasswordToggle?: boolean;
    style?: ViewStyle;
    inputStyle?: TextStyle;
    iconColor?: string;
};

export const CustomInput: React.FC<CustomInputProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    keyboardType = "default",
    secureTextEntry = false,
    startIcon,
    endIcon,
    showPasswordToggle = false,
    style,
    inputStyle,
    iconColor,
}) => {
    const [showPassword, setShowPassword] = useState(!secureTextEntry);
    const { colors } = useTheme();
    const styles = useCustomInputStyles(colors);

    return (
        <View style={[{ marginBottom: 24 }, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputWrapper}>
                {startIcon && <View style={styles.inputIcon}>{startIcon}</View>}
                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntry && !showPassword}
                />
                {showPasswordToggle && (
                    <TouchableOpacity
                        style={styles.eyeButton}
                        onPress={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <EyeOff size={20} color={iconColor || "#888"} />
                        ) : (
                            <Eye size={20} color={iconColor || "#888"} />
                        )}
                    </TouchableOpacity>
                )}
                {endIcon && !showPasswordToggle && (
                    <View style={styles.inputIcon}>{endIcon}</View>
                )}
            </View>
        </View>
    );
};
