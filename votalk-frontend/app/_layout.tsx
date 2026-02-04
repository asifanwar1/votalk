import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const RootLayout = () => {
    return (
        <>
            {/* <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false, animation: "none" }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(main)" options={{ headerShown: false }} />
            </Stack> */}

            <GestureHandlerRootView>
                <SafeAreaProvider>
                    <KeyboardProvider>
                        {/* <BottomSheetModalProvider> */}
                        <Slot />
                        {/* </BottomSheetModalProvider> */}
                    </KeyboardProvider>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </>
    );
};

export default RootLayout;

const styles = StyleSheet.create({});
