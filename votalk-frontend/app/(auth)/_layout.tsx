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
                initialRouteName={AUTH_ROUTES.LOGIN}
                screenOptions={{ headerShown: false, animation: "none" }}
            >
                <Stack.Screen name={AUTH_ROUTES.LOGIN} />
                <Stack.Screen name={AUTH_ROUTES.REGISTER} />
            </Stack>
        </>
    );
};
export default AuthLayout;

const styles = StyleSheet.create({});
