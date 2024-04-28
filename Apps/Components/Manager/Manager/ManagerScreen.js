import React, { useEffect, useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Alert, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import { ManageStyleSheet as styles } from "./ManagerStyle";

import Axios from "../../../Api/Axios";

function ManagerScreen() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await Axios.get("/product");
                setProducts(response.data); // set dữ liệu từ api vào state products
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const handleEditProduct = () => {
        // Xử lý sự kiện chỉnh sửa sản phẩm
    };

    const handleDeleteProduct = (productName) => {
        const confirmDelete = () => {
            Alert.alert(
                "Xác nhận",
                `Bạn có chắc chắn muốn xoá sản phẩm ${productName} không?`,
                [
                    {
                        text: "Huỷ bỏ",
                        style: "cancel",
                    },
                    { text: "Xoá", onPress: () => DeleteProduct() },
                ],
                { cancelable: false }
            );
        };
    
        const DeleteProduct = async () => {
            try {
                const response = await Axios.delete("/product/delete/", { data: { name: productName } });
                Alert.alert("Delete Product", response.data.message);
                // Xoá sản phẩm khỏi danh sách hiển thị 
                // Bằng cách lọc ra các sản phẩm khác với sản phẩm cần xoá và set lại state
                // Để cập nhật giao diện mà không cần fetch lại dữ liệu
                const newProducts = products.filter((product) => product.name !== productName);
                setProducts(newProducts);
                updateHomeScreenProducts(newProducts); // Cập nhật danh sách sản phẩm trên màn hình chính (Home) sau khi xoá sản phẩm
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        };
    
        confirmDelete();
    };

    const renderItem = ({ item }) => (
        console.log(item.id),
        <View style={styles.items}>
            <Image style={styles.itemsImg} source={{ uri: `${item.image}` }} />
            <View style={styles.itemsTxt}>
                <Text style={styles.itemsName}>{item.name}</Text>
                <Text style={styles.itemsDes}>{item.description}</Text>
                <Text style={styles.itemsPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.itemsUpdate} onPress={() => navigation.navigate("Update", { productId: item.id })}>
                <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemsDelete} onPress={() => handleDeleteProduct(item.name)}>
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );

    const updateHomeScreenProducts = async (newProducts) => {
        // Sử dụng AsyncStorage để lưu trữ danh sách sản phẩm mới
        try {
            await AsyncStorage.setItem('homeScreenProducts', JSON.stringify(newProducts)); // Lưu dữ liệu dạng JSON vào AsyncStorage với key là 'homeScreenProducts'
        } catch (error) {
            console.error("Error updating home screen products:", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="home" size={32} color="black" />
                </TouchableOpacity>
                <View style={styles.search_base}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={'#fff'}
                        style={styles.search_bar}
                    />
                    <TouchableOpacity style={styles.search_button}>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>         
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    <Image 
                        style={styles.image} 
                        source={require("../../../../public/images/icon/apple.jpg")}
                    />
                </TouchableOpacity>     
            </View>

            <Text style={styles.title}>Manager</Text>

            <FlatList
                style={styles.List}
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />

        </SafeAreaView>
    );
}

export default ManagerScreen;
