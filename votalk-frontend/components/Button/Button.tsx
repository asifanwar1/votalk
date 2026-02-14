import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
    ActivityIndicator,
} from "react-native";
import { createButtonStyles } from "./styles";

type ButtonProps = {
    title: string;
    onPress: () => void;
    buttonStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    loaderStyles?: StyleProp<ViewStyle>;
    isDisabled?: boolean;
    loading?: boolean;
};

export const Button = ({
    title,
    onPress,
    buttonStyles,
    textStyles,
    loaderStyles,
    isDisabled,
    loading = false,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[buttonStyles]}
            onPress={onPress}
            disabled={isDisabled || loading}
        >
            {loading ? (
                <ActivityIndicator style={[loaderStyles]} />
            ) : (
                <Text style={[textStyles]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};
