import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MainLayout = () => {
    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                    <KeyboardProvider>
                        <Stack
                            screenOptions={{
                                headerShown: false,
                                animation: "none",
                            }}
                        />
                    </KeyboardProvider>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </>
    );
};

export default MainLayout;

const styles = StyleSheet.create({});
