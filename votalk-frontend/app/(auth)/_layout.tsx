import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { AUTH_ROUTES } from "../../routes/routes";

const AuthLayout = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Stack
                initialRouteName={AUTH_ROUTES.WELCOME}
                screenOptions={{ headerShown: false, animation: "none" }}
            >
                <Stack.Screen name={AUTH_ROUTES.WELCOME} />
                <Stack.Screen name={AUTH_ROUTES.LOGIN} />
                <Stack.Screen name={AUTH_ROUTES.REGISTER} />
                <Stack.Screen name={AUTH_ROUTES.FORGOT_PASSWORD} />
                <Stack.Screen name={AUTH_ROUTES.VERIFY_OTP} />
                <Stack.Screen name={AUTH_ROUTES.RESET_PASSWORD} />
            </Stack>
        </>
    );
};
export default AuthLayout;

const styles = StyleSheet.create({});
