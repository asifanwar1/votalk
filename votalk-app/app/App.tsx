import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Trophy, Mic, ChevronRight, TrendingUp } from "lucide-react-native";

export default function App() {
    const [activeTab, setActiveTab] = useState("home");
    const [isRecording, setIsRecording] = useState(false);

    const conversationModes = [
        {
            id: 1,
            icon: "✈️",
            title: "Travel",
            color: "from-blue-400 to-cyan-400",
            desc: "Airport, Hotel, Directions",
        },
        {
            id: 2,
            icon: "💼",
            title: "Work",
            color: "from-purple-400 to-pink-400",
            desc: "Meetings, Emails, Interviews",
        },
        {
            id: 3,
            icon: "🛍️",
            title: "Shopping",
            color: "from-orange-400 to-red-400",
            desc: "Markets, Restaurants, Stores",
        },
        {
            id: 4,
            icon: "💬",
            title: "Daily Life",
            color: "from-green-400 to-emerald-400",
            desc: "Casual Conversations",
        },
    ];

    const recentSessions = [
        {
            score: 87,
            topic: "Airport Check-in",
            time: "2m ago",
            improvement: "+12",
        },
        {
            score: 92,
            topic: "Restaurant Order",
            time: "1h ago",
            improvement: "+5",
        },
        {
            score: 78,
            topic: "Job Interview",
            time: "Yesterday",
            improvement: "+8",
        },
    ];

    return (
        <View style={styles.container}>
            <div className="flex-1 overflow-y-auto pb-24">
                {/* Header */}
                <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-b-3xl p-6 pb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-white text-3xl font-bold">
                                Votalk
                            </h1>
                            <p className="text-white/80 text-sm">
                                Speak with confidence
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Trophy size={10} />
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    127
                                </div>
                                <div className="text-xs text-white/70">
                                    Streak Days
                                </div>
                            </div>
                            <div className="text-center border-x border-white/20">
                                <div className="text-2xl font-bold text-white">
                                    84%
                                </div>
                                <div className="text-xs text-white/70">
                                    Avg Score
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    23
                                </div>
                                <div className="text-xs text-white/70">
                                    Hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Start */}
                <div className="px-6 mt-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Quick Start
                    </h2>
                    <button
                        onClick={() => setActiveTab("conversation")}
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <Mic size={10} />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">
                                        Start Speaking
                                    </div>
                                    <div className="text-sm text-white/80">
                                        Practice conversation now
                                    </div>
                                </div>
                            </div>
                            <ChevronRight size={10} />
                        </div>
                    </button>
                </div>

                {/* Conversation Modes */}
                <div className="px-6 mt-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Choose Your Scene
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {conversationModes.map((mode) => (
                            <button
                                key={mode.id}
                                onClick={() => setActiveTab("conversation")}
                                className={`bg-gradient-to-br ${mode.color} rounded-2xl p-4 text-white shadow-md hover:shadow-lg transition-all`}
                            >
                                <div className="text-3xl mb-2">{mode.icon}</div>
                                <div className="font-semibold text-lg mb-1">
                                    {mode.title}
                                </div>
                                <div className="text-xs text-white/80">
                                    {mode.desc}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recent Progress */}
                <div className="px-6 mt-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Recent Sessions
                    </h2>
                    <div className="space-y-3">
                        {recentSessions.map((session, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="font-semibold text-gray-800">
                                            {session.topic}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {session.time}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-indigo-600">
                                            {session.score}
                                        </div>
                                        <div className="text-xs text-green-600 flex items-center gap-1">
                                            <TrendingUp size={10} />
                                            {session.improvement}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
