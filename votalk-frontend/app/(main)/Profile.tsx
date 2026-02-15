import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ArrowLeft, Camera, Pencil, User } from "lucide-react-native";
import { useTheme } from "../../hooks/useTheme";
import { useProfileStyles } from "./Styles";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";

const Profile = () => {
    const { colors } = useTheme();
    const styles = useProfileStyles();
    const router = useRouter();
    const [name, setName] = useState("Your Name");
    const [bio, setBio] = useState("Tell us about yourself...");
    const [editingName, setEditingName] = useState(false);
    const [editingBio, setEditingBio] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });
        if (!result.canceled && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });
        if (!result.canceled && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <CustomHeader
                title="Profile"
                showBack={true}
                backLabel="Back"
                colors={colors}
                onBack={() => router.push("/(main)/(tabs)/More")}
            />
            {/* <View style={styles.header}>
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => router.push("/(main)/(tabs)/More")}
                >
                    <ArrowLeft size={18} color="#fff" />
                    <Text style={styles.saveBtnText}>Back</Text>
                </TouchableOpacity>
            </View> */}
            <View style={styles.avatarSection}>
                <View style={styles.avatarWrapper}>
                    {image ? (
                        <Image
                            source={{ uri: image }}
                            style={styles.avatarImg}
                        />
                    ) : (
                        <View style={styles.avatarPlaceholder}>
                            <User size={48} color="#fff" />
                        </View>
                    )}
                    <View style={styles.avatarActions}>
                        <TouchableOpacity
                            style={styles.avatarActionBtn}
                            onPress={pickImage}
                        >
                            <Pencil size={18} color={colors.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.avatarActionBtn}
                            onPress={takePhoto}
                        >
                            <Camera size={18} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.infoSection}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Name</Text>
                    {editingName ? (
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            onBlur={() => setEditingName(false)}
                            autoFocus
                        />
                    ) : (
                        <TouchableOpacity
                            style={styles.infoValueRow}
                            onPress={() => setEditingName(true)}
                        >
                            <Text style={styles.value}>{name}</Text>
                            <Pencil size={16} color={colors.primary} />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>About</Text>
                    {editingBio ? (
                        <TextInput
                            style={[styles.input, { height: 80 }]}
                            value={bio}
                            onChangeText={setBio}
                            onBlur={() => setEditingBio(false)}
                            multiline
                            autoFocus
                        />
                    ) : (
                        <TouchableOpacity
                            style={styles.infoValueRow}
                            onPress={() => setEditingBio(true)}
                        >
                            <Text style={styles.value}>{bio}</Text>
                            <Pencil size={16} color={colors.primary} />
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity style={styles.saveBtn}>
                    <Text style={styles.saveBtnText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Profile;
