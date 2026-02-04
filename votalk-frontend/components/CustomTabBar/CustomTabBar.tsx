// import React, { useEffect, useState } from "react";
// import {
//     LayoutChangeEvent,
//     Platform,
//     StyleSheet,
//     TouchableOpacity,
//     View,
// } from "react-native";
// import Animated, {
//     useAnimatedStyle,
//     useSharedValue,
//     withSpring,
// } from "react-native-reanimated";
// import {
//     SafeAreaView,
//     useSafeAreaInsets,
// } from "react-native-safe-area-context";

// import { Icon } from "@Components/Icon";
// import { Text } from "@Components/Text";
// import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
// import { verticalScale } from "@Utilities/Metrics";

// import { isPlatformIOS } from "@Utilities/Utils";
// import { BOTTOM_TAB_OPTIONS } from "routes/tabConfig";
// import { ThemeColors } from "styles/colors";
// import {
//     BUBBLE_TOP_OFFSET,
//     CIRCLE_SIZE,
//     HORIZONTAL_PADDING,
//     PRIMARY,
//     TAB_BAR_HEIGHT,
//     TAB_BOTTOM_EXTRA_SPACE,
//     WHITE_50,
// } from "./constants";
// import { TabBackground } from "./TabBackground";

// type LabelKey = keyof typeof BOTTOM_TAB_OPTIONS;

// export default function CustomTabBar(props: BottomTabBarProps) {
//     const { state, descriptors, navigation } = props;
//     const insets = useSafeAreaInsets();

//     const activeIndex = state.index;
//     const progress = useSharedValue<number>(activeIndex);
//     const [containerWidth, setContainerWidth] = useState<number>(0);
//     const tabCount = state.routes.length;

//     useEffect(() => {
//         progress.value = withSpring(activeIndex, {
//             damping: 18,
//             stiffness: 180,
//             mass: 0.9,
//         });
//     }, [activeIndex]);

//     const onLayout = (e: LayoutChangeEvent) => {
//         setContainerWidth(e.nativeEvent.layout.width);
//     };

//     const contentWidth = Math.max(containerWidth - HORIZONTAL_PADDING * 2, 0);
//     const tabWidth = contentWidth > 0 ? contentWidth / tabCount : 0;

//     const bubbleStyle = useAnimatedStyle(() => {
//         if (!tabWidth) return {} as any;
//         const translateX =
//             HORIZONTAL_PADDING +
//             progress.value * tabWidth +
//             (tabWidth - CIRCLE_SIZE) / 2;
//         const scale = withSpring(1, {
//             damping: 15,
//             stiffness: 200,
//         });
//         return {
//             transform: [{ translateX }, { scale }],
//         };
//     }, [tabWidth]);

//     return (
//         <SafeAreaView style={[styles.container]} edges={["bottom"]}>
//             {/* Extend background into the bottom safe area */}
//             <View
//                 pointerEvents="none"
//                 style={{
//                     position: "absolute",
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     height: insets.bottom,
//                     backgroundColor: PRIMARY,
//                 }}
//             />
//             <View style={styles.wrapper} onLayout={onLayout}>
//                 {!!tabWidth && (
//                     <TabBackground
//                         activeIndex={activeIndex}
//                         tabWidth={tabWidth}
//                         containerWidth={containerWidth}
//                         leftPadding={HORIZONTAL_PADDING}
//                     />
//                 )}

//                 {!!tabWidth && (
//                     <Animated.View
//                         style={[styles.fab, bubbleStyle]}
//                         pointerEvents="none"
//                     >
//                         {(() => {
//                             const route = state.routes[activeIndex];
//                             const label =
//                                 (descriptors[route.key].options
//                                     .tabBarLabel as string) ??
//                                 descriptors[route.key].options.title ??
//                                 route.name;
//                             const config =
//                                 BOTTOM_TAB_OPTIONS[label as LabelKey];
//                             return (
//                                 <Animated.View style={styles.fabInner}>
//                                     <Icon
//                                         width={24}
//                                         height={24}
//                                         source={config.icon[1]}
//                                         color={ThemeColors.WHITE}
//                                     />
//                                 </Animated.View>
//                             );
//                         })()}
//                     </Animated.View>
//                 )}

//                 <View
//                     style={[
//                         styles.itemsRow,
//                         {
//                             paddingHorizontal: HORIZONTAL_PADDING,
//                             paddingBottom: TAB_BOTTOM_EXTRA_SPACE,
//                         },
//                     ]}
//                 >
//                     {state.routes.map((route, index) => {
//                         const { options } = descriptors[route.key];
//                         const label =
//                             (options.tabBarLabel as string) ??
//                             options.title ??
//                             route.name;
//                         const isFocused = state.index === index;

//                         const onPress = () => {
//                             const event = navigation.emit({
//                                 type: "tabPress",
//                                 target: route.key,
//                                 canPreventDefault: true,
//                             });
//                             if (!isFocused && !event.defaultPrevented) {
//                                 navigation.navigate(route.name);
//                             }
//                         };

//                         const onLongPress = () => {
//                             navigation.emit({
//                                 type: "tabLongPress",
//                                 target: route.key,
//                             });
//                         };

//                         const config = BOTTOM_TAB_OPTIONS[label as LabelKey];

//                         return (
//                             <TouchableOpacity
//                                 accessibilityRole="button"
//                                 accessibilityState={
//                                     isFocused ? { selected: true } : {}
//                                 }
//                                 accessibilityLabel={
//                                     options.tabBarAccessibilityLabel
//                                 }
//                                 key={route.key}
//                                 onPress={onPress}
//                                 onLongPress={onLongPress}
//                                 style={[
//                                     styles.item,
//                                     {
//                                         width: tabWidth || undefined,
//                                         paddingTop: isPlatformIOS
//                                             ? verticalScale(0)
//                                             : verticalScale(10),
//                                     },
//                                 ]}
//                                 activeOpacity={0.8}
//                             >
//                                 <View style={styles.iconLabel}>
//                                     <Icon
//                                         width={22}
//                                         height={22}
//                                         source={
//                                             isFocused
//                                                 ? config.icon[1]
//                                                 : config.icon[0]
//                                         }
//                                         color={
//                                             isFocused
//                                                 ? ThemeColors.TRANSPARENT
//                                                 : WHITE_50
//                                         }
//                                     />
//                                     <Text
//                                         style={[
//                                             styles.label,
//                                             isFocused
//                                                 ? styles.activeLabel
//                                                 : styles.inactiveLabel,
//                                         ]}
//                                         size={14}
//                                         numberOfLines={1}
//                                         semiBold={isFocused}
//                                     >
//                                         {label}
//                                     </Text>
//                                 </View>
//                             </TouchableOpacity>
//                         );
//                     })}
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         ...Platform.select({
//             ios: {
//                 height: TAB_BAR_HEIGHT,
//             },
//         }),

//         position: "absolute",
//         left: 0,
//         right: 0,
//         bottom: 0,
//     },
//     wrapper: {
//         ...Platform.select({
//             ios: {
//                 height: TAB_BAR_HEIGHT,
//             },
//         }),
//         justifyContent: "center",
//     },
//     itemsRow: {
//         flexDirection: "row",
//         justifyContent: "flex-start",
//         alignItems: "center",
//     },
//     item: {
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     iconLabel: {
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: verticalScale(40),
//     },
//     label: {
//         marginTop: 4,
//     },
//     activeLabel: {
//         color: ThemeColors.WHITE,
//         fontWeight: "600",
//     },
//     inactiveLabel: {
//         color: WHITE_50,
//         fontWeight: "400",
//     },
//     fab: {
//         position: "absolute",
//         left: 0,
//         top: BUBBLE_TOP_OFFSET, // Adjusted to properly center within the deeper curve
//         width: CIRCLE_SIZE,
//         height: CIRCLE_SIZE,
//     },
//     fabInner: {
//         width: CIRCLE_SIZE,
//         height: CIRCLE_SIZE,
//         borderRadius: CIRCLE_SIZE / 2,
//         backgroundColor: PRIMARY,
//         justifyContent: "center",
//         alignItems: "center",
//         shadowColor: ThemeColors.BLACK,
//         shadowOpacity: 0.2,
//         shadowOffset: { width: 0, height: 4 },
//         shadowRadius: 8,
//         elevation: 4,
//     },
// });

import React from "react";

const CustomTabBar = (props: any) => {
    return <div>CustomTabBar</div>;
};

export default CustomTabBar;
