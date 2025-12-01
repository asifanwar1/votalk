import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BookOpen, Zap } from "lucide-react-native";

const Learn = () => {
    return (
        <View>
            <div className="flex-1 overflow-y-auto pb-24 px-6 pt-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Learn & Practice
                </h1>

                <div className="space-y-4">
                    <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-5 text-white shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                            <BookOpen size={10} />
                            <h3 className="font-semibold text-lg">
                                AI-Generated Lessons
                            </h3>
                        </div>
                        <p className="text-sm text-white/80 mb-4">
                            Personalized vocabulary, quizzes, and flashcards
                        </p>
                        <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                            Start Learning
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-5 text-white shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                            <Zap size={10} />
                            <h3 className="font-semibold text-lg">
                                Pronunciation Practice
                            </h3>
                        </div>
                        <p className="text-sm text-white/80 mb-4">
                            Real-time phoneme-level feedback
                        </p>
                        <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                            Practice Now
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                        <h3 className="font-semibold text-lg text-gray-800 mb-3">
                            Vocabulary This Week
                        </h3>
                        <div className="space-y-2">
                            {[
                                "Boarding pass",
                                "Departure gate",
                                "Baggage claim",
                                "Customs",
                            ].map((word, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                                >
                                    <span className="text-gray-700">
                                        {word}
                                    </span>
                                    <button className="text-indigo-600 text-sm font-medium">
                                        Review
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </View>
    );
};

export default Learn;

const styles = StyleSheet.create({});
