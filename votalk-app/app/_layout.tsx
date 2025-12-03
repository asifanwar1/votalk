import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false, animation: "none" }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(main)" options={{ headerShown: false }} />
            </Stack>
        </>
    );
};

export default RootLayout;

const styles = StyleSheet.create({});
