import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
    Globe,
    Mic,
    Volume2,
    Play,
    MessageCircle,
    Camera,
} from "lucide-react-native";

const Speak = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const languages = [
        "English",
        "Arabic",
        "Spanish",
        "French",
        "German",
        "Chinese",
    ];
    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={styles.headerGradient}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => {}}>
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

            {/* AI Avatar */}
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

            {/* Chat Messages */}
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
                            <Play size={16} color="#6366f1" />
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

            {/* Input Area */}
            <View style={styles.inputSection}>
                <TouchableOpacity style={styles.inputIconButton}>
                    <Camera size={22} color="#6366f1" />
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
                    <MessageCircle size={22} color="#6366f1" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Speak;

const styles = StyleSheet.create({
    headerGradient: {
        backgroundColor: "#6366f1",
        padding: 16,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    headerBack: {
        color: "#fff",
        fontSize: 16,
    },
    languagePickerContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 2,
    },
    picker: {
        color: "#fff",
        width: 120,
        marginLeft: 4,
        backgroundColor: "transparent",
    },
    headerCenter: {
        alignItems: "center",
    },
    headerMode: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 14,
        marginBottom: 2,
    },
    headerTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    avatarSection: {
        alignItems: "center",
        paddingVertical: 24,
    },
    avatarWrapper: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: "#8b5cf6",
        alignItems: "center",
        justifyContent: "center",
    },
    avatarPulse: {
        // You can add animation here if needed
    },
    avatarPing: {
        position: "absolute",
        top: -8,
        left: -8,
        right: -8,
        bottom: -8,
        borderRadius: 56,
        borderWidth: 4,
        borderColor: "#a5b4fc",
        opacity: 0.5,
    },
    chatSection: {
        flex: 1,
        paddingHorizontal: 16,
    },
    chatRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 16,
    },
    avatarSmallAI: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#8b5cf6",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },
    avatarSmallUser: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#34d399",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    avatarSmallText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    chatBubbleAI: {
        backgroundColor: "#f1f5f9",
        borderRadius: 18,
        borderTopLeftRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 12,
        maxWidth: "80%",
        flex: 1,
    },
    chatBubbleUser: {
        backgroundColor: "#6366f1",
        borderRadius: 18,
        borderTopRightRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 12,
        maxWidth: "80%",
        flex: 1,
    },
    chatTextAI: {
        color: "#1e293b",
        fontSize: 15,
    },
    chatTextUser: {
        color: "#fff",
        fontSize: 15,
    },
    playButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    playButtonText: {
        color: "#6366f1",
        fontSize: 14,
        marginLeft: 4,
    },
    pronunciationBox: {
        marginTop: 10,
        backgroundColor: "rgba(255,255,255,0.15)",
        borderRadius: 8,
        padding: 8,
    },
    pronunciationRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    pronunciationLabel: {
        color: "#fff",
        fontSize: 12,
    },
    pronunciationScore: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
    pronunciationBarBg: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 8,
        height: 6,
        overflow: "hidden",
    },
    pronunciationBarFill: {
        backgroundColor: "#bbf7d0",
        height: 6,
        borderRadius: 8,
    },
    inputSection: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e5e7eb",
    },
    inputIconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#f1f5f9",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4,
    },
    speakButton: {
        flex: 1,
        height: 56,
        borderRadius: 28,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
        gap: 8,
    },
    speakButtonActive: {
        backgroundColor: "#ef4444",
        shadowColor: "#ef4444",
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    speakButtonInactive: {
        backgroundColor: "#6366f1",
        shadowColor: "#6366f1",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    speakButtonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
        marginLeft: 8,
    },
});
