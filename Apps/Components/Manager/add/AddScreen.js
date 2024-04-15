import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native";

import { Ionicons, Entypo } from '@expo/vector-icons';

import { ProductUploadStyle as styles } from "./AddStyle";

export default function ProductUpload() {

    const navigation = useNavigation();

    const [images, setImages] = useState([]);

    const [colorImage, setColorImage] = useState([]);
    const [colorText, setColorText] = useState([]);

    const chooseImageFromDevice = async () => {

        if (images.length >= 3) {
            Alert.alert('Đã đạt giới hạn ảnh', 'Bản chỉ có thể tải lên tối đa 3 bức ảnh. Hãy gỡ bớt ảnh để thêm ảnh khác.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            multiple: true,
        });       

        if (!result.cancelled) {
            const selectedImages = result.assets.map(asset => asset.uri);
            setImages(prevImages => [...prevImages, ...selectedImages]);
        }
    };

    const removeImage = (indexToRemove) => {
        setImages(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
    };

    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add Product</Text>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.scroll}>

                <View style={styles.upload}>
                    <TouchableOpacity
                        style={styles.upload_button}
                        onPress={chooseImageFromDevice}
                    >
                        <View style={styles.upload_items}>
                            <Entypo style={styles.upload_icon} name="upload" size={24} color="white" />
                            <Text style={styles.hint}>Nhấn để tải lên</Text>
                            <Text style={styles.sub_hint}>PNG hoặc JPG</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    {images.map((imageUri, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Image
                                source={{ uri: imageUri }}
                                style={styles.thumbnail}
                            />
                            <TouchableOpacity onPress={() => removeImage(index)} style={styles.deleteButton}>
                                <Ionicons name="close-circle" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <View style={styles.product_input}>
                    <Text style={styles.product_title}>Tên sản phẩm</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên sản phẩm"
                        placeholderTextColor="#ffffff"
                    />

                    <Text style={styles.product_title}>Màu sắc</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Màu sắc"
                        placeholderTextColor="#ffffff"
                    />

                    <Text style={styles.product_title}>Dung lượng</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Dung Lượng"
                        placeholderTextColor="#ffffff"
                    />

                    <Text style={styles.product_title}>Thông tin sản phẩm</Text>
                    <TextInput
                        multiline={true}
                        style={styles.input_area}
                        placeholder="Thông tin sản phẩm"
                        textAlignVertical="top"
                        placeholderTextColor="#ffffff"
                    />

                    <Text style={styles.product_title}>Giá của sản phẩm</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Giá của sản phẩm"
                        placeholderTextColor="#ffffff"
                    />
                    <TouchableOpacity>
                        <Text style={styles.submit_button}>Tải lên</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};