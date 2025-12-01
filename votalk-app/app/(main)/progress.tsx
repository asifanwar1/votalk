import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Award } from "lucide-react-native";

const Progress = () => {
    return (
        <View>
            <div className="flex-1 overflow-y-auto pb-24 px-6 pt-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Your Progress
                </h1>

                <div className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl p-6 text-white shadow-md mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Award size={10} />
                        <div>
                            <div className="text-2xl font-bold">Level 12</div>
                            <div className="text-sm text-white/80">
                                Intermediate Speaker
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/20 rounded-full h-2 mb-2">
                        <div
                            className="bg-white h-2 rounded-full"
                            style={{ width: "65%" }}
                        ></div>
                    </div>
                    <div className="text-xs text-white/80">
                        650/1000 XP to Level 13
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-4">
                        Weekly Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-indigo-50 rounded-xl">
                            <div className="text-3xl font-bold text-indigo-600">
                                47
                            </div>
                            <div className="text-sm text-gray-600">
                                Minutes Practiced
                            </div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-xl">
                            <div className="text-3xl font-bold text-purple-600">
                                156
                            </div>
                            <div className="text-sm text-gray-600">
                                Words Learned
                            </div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-xl">
                            <div className="text-3xl font-bold text-green-600">
                                89%
                            </div>
                            <div className="text-sm text-gray-600">
                                Accuracy
                            </div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-xl">
                            <div className="text-3xl font-bold text-orange-600">
                                12
                            </div>
                            <div className="text-sm text-gray-600">
                                Scenarios Done
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3">
                        Achievements
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                        {["🔥", "⭐", "🎯", "💎", "🏆", "👑", "⚡", "🌟"].map(
                            (emoji, idx) => (
                                <div
                                    key={idx}
                                    className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center text-3xl"
                                >
                                    {emoji}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </View>
    );
};

export default Progress;

const styles = StyleSheet.create({});
