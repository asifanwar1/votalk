import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { BookOpen, Zap, BookText } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLearnStyles } from "./Styles";
import { useTheme } from "../../../hooks/useTheme";
import { vocabList } from "@/mock-data/learning";

const Learn = () => {
    const styles = useLearnStyles();
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <LinearGradient
                    colors={[colors.headerGradient1, colors.headerGradient2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.header}
                >
                    <View style={styles.headerTop}>
                        <View style={styles.headerText}>
                            <Text style={styles.headerTitle}>
                                Learn & Practice
                            </Text>
                            <Text style={styles.headerSubtitle}>
                                Learn new words and perfect your pronunciation
                            </Text>
                        </View>
                        <View style={styles.trophyContainer}>
                            <BookText size={24} color="#fff" />
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.section}>
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
                            <Text style={styles.cardButtonText}>
                                Practice Now
                            </Text>
                        </TouchableOpacity>
                    </View>

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
                </View>
            </ScrollView>
        </View>
    );
};

export default Learn;
