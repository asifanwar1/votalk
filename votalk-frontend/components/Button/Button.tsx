import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
    buttonStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    isDisabled?: boolean;
};

export const Button = ({
    title,
    onPress,
    buttonStyles,
    textStyles,
    isDisabled,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={buttonStyles}
            onPress={onPress}
            disabled={isDisabled}
        >
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};
