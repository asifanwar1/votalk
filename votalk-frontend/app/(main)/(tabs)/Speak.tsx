import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
    Globe,
    Mic,
    Volume2,
    Play,
    MessageCircle,
    Camera,
} from "lucide-react-native";
import { useSpeakStyles } from "./Styles";
import { useTheme } from "../../../hooks/useTheme";
import { router } from "expo-router";

const Speak = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const styles = useSpeakStyles();
    const { colors } = useTheme();
    const languages = [
        "English",
        "Arabic",
        "Spanish",
        "French",
        "German",
        "Chinese",
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.headerBack}>← Back</Text>
                    </TouchableOpacity>
                    <View style={styles.languagePickerContainer}>
                        <Globe size={18} color="#fff" />
                        <Picker
                            selectedValue={selectedLanguage}
                            style={styles.picker}
                            dropdownIconColor="#fff"
                            onValueChange={(itemValue) =>
                                setSelectedLanguage(itemValue)
                            }
                        >
                            {languages.map((lang) => (
                                <Picker.Item
                                    key={lang}
                                    label={lang}
                                    value={lang}
                                    color="#000"
                                />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={styles.headerCenter}>
                    <Text style={styles.headerMode}>✈️ Travel Mode</Text>
                    <Text style={styles.headerTitle}>Airport Check-in</Text>
                </View>
            </View>

            <View style={styles.avatarSection}>
                <View style={styles.avatarWrapper}>
                    <View
                        style={[
                            styles.avatar,
                            isRecording ? styles.avatarPulse : null,
                        ]}
                    >
                        <Volume2 size={36} color="#fff" />
                    </View>
                    {isRecording && <View style={styles.avatarPing} />}
                </View>
            </View>

            <ScrollView
                style={styles.chatSection}
                contentContainerStyle={{ paddingVertical: 8 }}
            >
                <View style={styles.chatRow}>
                    <View style={styles.avatarSmallAI}>
                        <Text style={styles.avatarSmallText}>AI</Text>
                    </View>
                    <View style={styles.chatBubbleAI}>
                        <Text style={styles.chatTextAI}>
                            Hello! I'm the airport check-in agent. How can I
                            help you today?
                        </Text>
                        <TouchableOpacity style={styles.playButton}>
                            <Play size={16} color={colors.primary} />
                            <Text style={styles.playButtonText}>Play</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.chatRow, { justifyContent: "flex-end" }]}>
                    <View style={styles.chatBubbleUser}>
                        <Text style={styles.chatTextUser}>
                            I'd like to check in for my flight to Paris.
                        </Text>
                        <View style={styles.pronunciationBox}>
                            <View style={styles.pronunciationRow}>
                                <Text style={styles.pronunciationLabel}>
                                    Pronunciation
                                </Text>
                                <Text style={styles.pronunciationScore}>
                                    92/100
                                </Text>
                            </View>
                            <View style={styles.pronunciationBarBg}>
                                <View
                                    style={[
                                        styles.pronunciationBarFill,
                                        { width: "92%" },
                                    ]}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.avatarSmallUser}>
                        <Text style={styles.avatarSmallText}>You</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.inputSection}>
                <TouchableOpacity style={styles.inputIconButton}>
                    <Camera size={22} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.speakButton,
                        isRecording
                            ? styles.speakButtonActive
                            : styles.speakButtonInactive,
                    ]}
                    onPress={() => setIsRecording(!isRecording)}
                >
                    <Mic size={22} color="#fff" />
                    <Text style={styles.speakButtonText}>
                        {isRecording ? "Listening..." : "Tap to Speak"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputIconButton}>
                    <MessageCircle size={22} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Speak;
