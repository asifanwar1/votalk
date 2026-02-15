import React, { useState } from "react";
import {
    View,
    Text,
    Switch,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
    Modal,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useSettingsStyles } from "./Styles";
import {
    ArrowLeft,
    Plus,
    Trash2,
    Sun,
    Moon,
    MessageSquare,
    Settings as SettingsIcon,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";

const AI_MODELS = [
    { label: "GPT-4", value: "gpt-4" },
    { label: "GPT-3.5", value: "gpt-3.5" },
    { label: "Claude 3", value: "claude-3" },
];

export default function Settings() {
    const { colors, isDark } = useTheme();
    const styles = useSettingsStyles();
    const router = useRouter();

    const [aiModel, setAiModel] = useState(AI_MODELS[0].value);
    const [historyEnabled, setHistoryEnabled] = useState(true);
    const [scenes, setScenes] = useState([
        { id: 1, name: "Travel" },
        { id: 2, name: "Work" },
        { id: 3, name: "Shopping" },
        { id: 4, name: "Daily Life" },
    ]);
    const [customSceneModal, setCustomSceneModal] = useState(false);
    const [newScene, setNewScene] = useState("");

    const handleAddScene = () => {
        if (newScene.trim()) {
            setScenes([...scenes, { id: Date.now(), name: newScene.trim() }]);
            setNewScene("");
            setCustomSceneModal(false);
        }
    };

    const handleRemoveScene = (id: number) => {
        setScenes(scenes.filter((scene) => scene.id !== id));
    };

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headerTitle}>Settings</Text>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => router.push("/(main)/(tabs)/More")}
                >
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>Back</Text>
                </TouchableOpacity>
            </View> */}
            <CustomHeader
                title="Settings"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.push("/(main)/(tabs)/More")}
            />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <SettingsIcon size={20} color={colors.primary} />
                        <Text style={styles.sectionTitle}>AI Model</Text>
                    </View>
                    {AI_MODELS.map((model) => (
                        <TouchableOpacity
                            key={model.value}
                            style={[
                                styles.optionRow,
                                aiModel === model.value &&
                                    styles.optionRowActive,
                            ]}
                            onPress={() => setAiModel(model.value)}
                        >
                            <Text
                                style={[
                                    styles.optionLabel,
                                    aiModel === model.value &&
                                        styles.optionLabelActive,
                                ]}
                            >
                                {model.label}
                            </Text>
                            <View style={styles.radioOuter}>
                                {aiModel === model.value && (
                                    <View style={styles.radioInner} />
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <MessageSquare size={20} color={colors.primary} />
                        <Text style={styles.sectionTitle}>Chat History</Text>
                    </View>
                    <View style={styles.switchRow}>
                        <Text style={styles.switchLabel}>
                            Enable Chat History
                        </Text>
                        <Switch
                            value={historyEnabled}
                            onValueChange={setHistoryEnabled}
                            thumbColor={
                                historyEnabled ? colors.primary : colors.border
                            }
                            trackColor={{
                                true: colors.accent,
                                false: colors.border,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        {isDark ? (
                            <Moon size={20} color={colors.primary} />
                        ) : (
                            <Sun size={20} color={colors.primary} />
                        )}
                        <Text style={styles.sectionTitle}>Theme</Text>
                    </View>
                    <View style={styles.switchRow}>
                        <Text style={styles.switchLabel}>
                            {isDark ? "Dark Mode" : "Light Mode"}
                        </Text>
                        <Switch
                            value={isDark}
                            // onValueChange={handleThemeToggle}
                            thumbColor={isDark ? colors.primary : colors.border}
                            trackColor={{
                                true: colors.accent,
                                false: colors.border,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Scenes</Text>
                        <TouchableOpacity
                            style={styles.addBtn}
                            onPress={() => setCustomSceneModal(true)}
                        >
                            <Plus size={18} color="#fff" />
                            <Text style={styles.addBtnText}>Add Scene</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={scenes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.sceneRow}>
                                <Text style={styles.sceneLabel}>
                                    {item.name}
                                </Text>
                                {item.id > 4 && (
                                    <TouchableOpacity
                                        style={styles.removeBtn}
                                        onPress={() =>
                                            handleRemoveScene(item.id)
                                        }
                                    >
                                        <Trash2 size={16} color="#fff" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>

            <Modal
                visible={customSceneModal}
                transparent
                animationType="slide"
                onRequestClose={() => setCustomSceneModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            Create Custom Scene
                        </Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Scene name"
                            placeholderTextColor={colors.textSecondary}
                            value={newScene}
                            onChangeText={setNewScene}
                        />
                        <View style={styles.modalActions}>
                            <TouchableOpacity
                                style={styles.modalBtn}
                                onPress={handleAddScene}
                            >
                                <Text style={styles.modalBtnText}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalBtn, styles.modalBtnCancel]}
                                onPress={() => setCustomSceneModal(false)}
                            >
                                <Text style={styles.modalBtnText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
