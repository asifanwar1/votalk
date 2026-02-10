import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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
