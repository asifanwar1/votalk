import { TextInput, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { createStyles } from "./styles";

export const Input = (props: any) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.wrapper}>
            <TextInput
                {...props}
                placeholderTextColor={colors.textSecondary}
                style={styles.input}
            />
        </View>
    );
};
