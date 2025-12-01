import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
    MessageCircle,
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
} from "lucide-react-native";
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View>
            <div className="w-full h-full flex flex-col">
                {/* Header Section with Gradient */}
                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-b-[3rem] p-8 pb-12">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4">
                            <MessageCircle size={10} />
                        </div>
                        <h1 className="text-white text-4xl font-bold mb-2">
                            Join Votalk
                        </h1>
                        <p className="text-white/90 text-base">
                            Start your language journey today
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="flex-1 px-8 -mt-6 overflow-y-auto pb-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Create Account
                        </h2>

                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <User size={10} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => {}}
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail size={10} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => {}}
                                    placeholder="your.email@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock size={10} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={() => {}}
                                    placeholder="Create a strong password"
                                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <EyeOff size={10} />
                                    ) : (
                                        <Eye size={10} />
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 ml-1">
                                At least 8 characters with numbers & symbols
                            </p>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock size={10} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={() => {}}
                                    placeholder="Confirm your password"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="mb-6">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <span className="text-sm text-gray-600">
                                    I agree to the{" "}
                                    <span className="text-purple-600 font-medium">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span className="text-purple-600 font-medium">
                                        Privacy Policy
                                    </span>
                                </span>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all mb-4">
                            Create Account
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">
                                    Or sign up with
                                </span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">
                                    Google
                                </span>
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all">
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="#1877F2"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">
                                    Facebook
                                </span>
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center">
                            <span className="text-gray-600">
                                Already have an account?{" "}
                            </span>
                            <button
                                onClick={() => {}}
                                className="text-purple-600 font-semibold hover:text-purple-700"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5">
                        <div className="flex items-center justify-center gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold text-purple-600">
                                    500K+
                                </div>
                                <div className="text-xs text-gray-600">
                                    Active Learners
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-300"></div>
                            <div>
                                <div className="text-2xl font-bold text-pink-600">
                                    4.9★
                                </div>
                                <div className="text-xs text-gray-600">
                                    App Rating
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-300"></div>
                            <div>
                                <div className="text-2xl font-bold text-orange-600">
                                    20+
                                </div>
                                <div className="text-xs text-gray-600">
                                    Languages
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({});
