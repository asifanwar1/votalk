import { StyleSheet, Text, View } from "react-native";
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
    const languages = [
        "English",
        "Arabic",
        "Spanish",
        "French",
        "German",
        "Chinese",
    ];
    return (
        <View>
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-b-3xl">
                    <div className="flex items-center justify-between mb-3">
                        <button onClick={() => {}} className="text-white">
                            ← Back
                        </button>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <Globe size={10} />
                            <select className="bg-transparent text-white text-sm font-medium border-none outline-none">
                                {languages.map((lang) => (
                                    <option key={lang} value={lang}>
                                        {lang}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-white/80 text-sm mb-1">
                            ✈️ Travel Mode
                        </div>
                        <div className="text-white font-semibold">
                            Airport Check-in
                        </div>
                    </div>
                </div>

                {/* AI Avatar */}
                <div className="flex justify-center py-6">
                    <div className="relative">
                        <div
                            className={`w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center ${
                                isRecording ? "animate-pulse" : ""
                            }`}
                        >
                            <Volume2 size={10} />
                        </div>
                        {isRecording && (
                            <div className="absolute inset-0 rounded-full border-4 border-indigo-300 animate-ping"></div>
                        )}
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto px-4 space-y-4">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">AI</span>
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                            <p className="text-gray-800">
                                Hello! I'm the airport check-in agent. How can I
                                help you today?
                            </p>
                            <button className="mt-2 text-indigo-600 text-sm flex items-center gap-1">
                                <Play size={10} /> Play
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-2 justify-end">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                            <p>I'd like to check in for my flight to Paris.</p>
                            <div className="mt-2 bg-white/20 rounded-lg p-2 text-xs">
                                <div className="flex items-center justify-between mb-1">
                                    <span>Pronunciation</span>
                                    <span className="font-bold">92/100</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-1.5">
                                    <div
                                        className="bg-green-300 h-1.5 rounded-full"
                                        style={{ width: "92%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">You</span>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex items-center gap-3">
                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Camera size={10} />
                        </button>

                        <button
                            onClick={() => setIsRecording(!isRecording)}
                            className={`flex-1 h-14 rounded-full flex items-center justify-center gap-2 font-semibold transition-all ${
                                isRecording
                                    ? "bg-red-500 text-white shadow-lg"
                                    : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                            }`}
                        >
                            <Mic size={10} />
                            {isRecording ? "Listening..." : "Tap to Speak"}
                        </button>

                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <MessageCircle size={10} />
                        </button>
                    </div>
                </div>
            </div>
        </View>
    );
};

export default Speak;

const styles = StyleSheet.create({});
