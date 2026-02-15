import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Linking,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import {
    ArrowLeft,
    Mail,
    SendHorizonal,
    Phone,
    MessageCircle,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import { useContactUsStyles } from "./Styles";
import CustomHeader from "@/components/CustomHeader/CustomHeader";

const ContactUs = () => {
    const { colors } = useTheme();
    const router = useRouter();
    const styles = useContactUsStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSend = () => {
        if (!name || !email || !message) {
            Alert.alert("Please fill in all fields.");
            return;
        }
        setSending(true);
        setTimeout(() => {
            setSending(false);
            Alert.alert("Message sent!", "We'll get back to you soon.");
            setName("");
            setEmail("");
            setMessage("");
        }, 1200);
    };

    const handleEmailPress = () => {
        Linking.openURL("mailto:support@votalk.app");
    };

    const handlePhonePress = () => {
        Linking.openURL("tel:+1234567890");
    };

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headerTitle}>Contact Us</Text>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => router.push("/(main)/(tabs)/More")}
                >
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>Back</Text>
                </TouchableOpacity>
            </View> */}
            <CustomHeader
                title="Contact Us"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.push("/(main)/(tabs)/More")}
            />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
            >
                <ScrollView
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.iconCircle}>
                        <MessageCircle size={36} color="#fff" />
                    </View>
                    <Text style={styles.title}>
                        We'd love to hear from you!
                    </Text>
                    <Text style={styles.subtitle}>
                        Have questions, feedback, or need help? Reach out and
                        our team will respond as soon as possible.
                    </Text>
                    <View style={styles.contactRow}>
                        <Mail size={20} color={colors.primary} />
                        <TouchableOpacity onPress={handleEmailPress}>
                            <Text style={styles.contactText}>
                                support@votalk.app
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contactRow}>
                        <Phone size={20} color={colors.primary} />
                        <TouchableOpacity onPress={handlePhonePress}>
                            <Text style={styles.contactText}>
                                +1 234 567 890
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Your Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            placeholderTextColor={colors.textSecondary}
                            value={name}
                            onChangeText={setName}
                        />
                        <Text style={styles.label}>Your Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor={colors.textSecondary}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Text style={styles.label}>Message</Text>
                        <TextInput
                            style={[styles.input, styles.messageInput]}
                            placeholder="Type your message..."
                            placeholderTextColor={colors.textSecondary}
                            value={message}
                            onChangeText={setMessage}
                            multiline
                        />
                        <TouchableOpacity
                            style={styles.sendBtn}
                            onPress={handleSend}
                            disabled={sending}
                            activeOpacity={0.8}
                        >
                            <SendHorizonal size={20} color="#fff" />
                            <Text style={styles.sendBtnText}>
                                {sending ? "Sending..." : "Send Message"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default ContactUs;
