import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AUTH_ROUTES } from "../../routes/routes";
import { navigate } from "expo-router/build/global-state/routing";

export default function Welcome() {
    return (
        // <AuthWrapper backgroundImage={BackgroundImage} enableKeyboardAware={false}>
        <Content />
        // </AuthWrapper>
    );
}

const Content = () => {
    const { bottom } = useSafeAreaInsets();

    return (
        <View style={[styles.content]}>
            {/* <View style={styles.textContainer}>
        <Text centered size={30} semiBold bottomSpacing={8}>
          Why Hersonity
        </Text>
        <Text style={styles.description} centered size={18} regular>
          Join a community that offers a safe space, a strong voice, and a
          shared journey.
        </Text>
      </View> */}
            <View style={styles.textContainer}>
                Join a community that offers a safe space, a strong voice, and a
                shared journey.
            </View>
            {/* 
      <View style={styles.buttonContainer}>
        <Button
          title="Create New Account"
          onPress={handleCreateAccount}
          variant={ButtonVariant.SOLID}
          numberOfLines={1}
          containerStyles={styles.createButton}
        />

        <Button
          title="Log In To Existing Account"
          onPress={handleLogin}
          variant={ButtonVariant.OUTLINED}
          containerStyles={styles.loginButton}
          color={ThemeColors.WHITE}
        />
      </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "flex-end",
    },
    textContainer: {},
    description: {
        alignSelf: "center",
        width: "70%",
    },
    buttonContainer: {},
    createButton: {
        borderWidth: 1,
    },
    loginButton: {
        borderWidth: 1,
    },
});
