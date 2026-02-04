import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { createStyles } from "./styles";

export const Button = ({ title, onPress }: any) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};
