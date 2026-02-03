import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import { BookOpen, Zap } from "lucide-react-native";

const vocabList = [
    "Boarding pass",
    "Departure gate",
    "Baggage claim",
    "Customs",
];

const Learn = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 96,
                    paddingHorizontal: 24,
                    paddingTop: 24,
                }}
            >
                <Text style={styles.header}>Learn & Practice</Text>

                {/* AI-Generated Lessons */}
                <View style={[styles.card, styles.orangePinkGradient]}>
                    <View style={styles.row}>
                        <BookOpen size={24} color="#fff" />
                        <Text style={styles.cardTitle}>
                            AI-Generated Lessons
                        </Text>
                    </View>
                    <Text style={styles.cardDesc}>
                        Personalized vocabulary, quizzes, and flashcards
                    </Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>
                            Start Learning
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Pronunciation Practice */}
                <View style={[styles.card, styles.cyanBlueGradient]}>
                    <View style={styles.row}>
                        <Zap size={24} color="#fff" />
                        <Text style={styles.cardTitle}>
                            Pronunciation Practice
                        </Text>
                    </View>
                    <Text style={styles.cardDesc}>
                        Real-time phoneme-level feedback
                    </Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>Practice Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Vocabulary This Week */}
                <View style={[styles.card, styles.vocabCard]}>
                    <Text style={[styles.cardTitle, styles.vocabTitle]}>
                        Vocabulary This Week
                    </Text>
                    <View>
                        {vocabList.map((word, idx) => (
                            <View
                                key={idx}
                                style={[
                                    styles.vocabRow,
                                    idx === vocabList.length - 1 && {
                                        borderBottomWidth: 0,
                                    },
                                ]}
                            >
                                <Text style={styles.vocabWord}>{word}</Text>
                                <TouchableOpacity>
                                    <Text style={styles.vocabReview}>
                                        Review
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Learn;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: 24,
    },
    card: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    orangePinkGradient: {
        backgroundColor: "#fb7185", // fallback for gradient
    },
    cyanBlueGradient: {
        backgroundColor: "#38bdf8", // fallback for gradient
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 8,
    },
    cardTitle: {
        fontWeight: "600",
        fontSize: 18,
        color: "#fff",
        marginLeft: 8,
    },
    cardDesc: {
        fontSize: 14,
        color: "rgba(255,255,255,0.85)",
        marginBottom: 16,
    },
    cardButton: {
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
        alignSelf: "flex-start",
    },
    cardButtonText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 14,
    },
    vocabCard: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        shadowOpacity: 0.04,
    },
    vocabTitle: {
        color: "#1e293b",
        marginBottom: 12,
    },
    vocabRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#f1f5f9",
    },
    vocabWord: {
        color: "#334155",
        fontSize: 15,
    },
    vocabReview: {
        color: "#6366f1",
        fontSize: 14,
        fontWeight: "500",
    },
});
