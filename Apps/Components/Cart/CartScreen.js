import React, { useState, useEffect } from "react";
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, ScrollView, SafeAreaView, View, TouchableOpacity, Image, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox } from "react-native-elements";
import Axios from "../../Api/Axios";
import { cartStylesheet as styles } from "./CartStyle";

export default function CartScreen() {
    const navigation = useNavigation(); // tạo biến navigation để điều hướng giữa các màn hình
    const [items, setItems] = useState([]); // tạo state items để lưu danh sách sản phẩm trong giỏ hàng
    const [totalPrice, setTotalPrice] = useState(0); // tạo state totalPrice để lưu tổng giá trị của giỏ hàng

    // Hàm useEffect sẽ chạy sau khi component được render
    useEffect(() => {
        // Hàm loadCart sẽ gọi API để lấy thông tin giỏ hàng
        const loadCart = async () => {
            try {
                const token = await AsyncStorage.getItem('accessToken'); // Lấy token từ AsyncStorage || Lưu ý: AsyncStorage là một cơ chế lưu trữ dữ liệu trên thiết bị của người dùng
                // Gọi API để lấy thông tin giỏ hàng 
                const response = await Axios.get('/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // Lưu thông tin giỏ hàng vào state items và totalPrice
                const cartData = response.data.cart;
                // Lưu thông tin giỏ hàng vào state items và totalPrice 
                setItems(cartData.items);
                // Tính tổng giá trị của giỏ hàng
                setTotalPrice(cartData.totalPrice);
            } catch (error) {
                console.log(error);
            }
        }
        // Gọi hàm loadCart để lấy thông tin giỏ hàng
        loadCart();
    }, []);

    // Hàm ConfirmDelete sẽ hiển thị cửa sổ xác nhận khi người dùng muốn xoá sản phẩm khỏi giỏ hàng
    const ConfirmDelete = async (productid) => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to delete this item from your cart?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    // Gọi hàm DeleteItem khi người dùng chọn xoá sản phẩm với id là productid
                    onPress: () => DeleteItem(productid) 
                }
            ]
        );
    };

    // Hàm DeleteItem sẽ gọi API để xoá sản phẩm khỏi giỏ hàng
    const DeleteItem = async (productid) => {
        try {
            console.log(productid); // In ra console để kiểm tra productid của sản phẩm cần xoá
            const token = await AsyncStorage.getItem('accessToken'); // Lấy token từ AsyncStorage
            // Gọi API để xoá sản phẩm khỏi giỏ hàng
            const response = await Axios.delete('/cart/remove', {
                headers: {
                    Authorization: `Bearer ${token}` // Truyền token vào header của request
                },
                data: { 
                    productid // Truyền productid vào body của request
                }
            });
            console.log(response.data.message);
            // Nếu sản phẩm đã được xoá khỏi giỏ hàng, cập nhật lại state items và totalPrice
            if (response.data.ping === '1') {
                // Lọc ra các sản phẩm khác với productid để cập nhật lại state items
                const updatedItems = items.filter(item => item.product !== productid);
                // Tính lại tổng giá trị của giỏ hàng sau khi xoá sản phẩm
                const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
                // Cập nhật state items và totalPrice
                setItems(updatedItems);
                // Cập nhật state items và totalPrice
                setTotalPrice(updatedTotalPrice);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Hàm handleQuantityChange sẽ cập nhật số lượng sản phẩm khi người dùng thay đổi số lượng sản phẩm 
    const handleQuantityChange = (quantity, index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity = quantity;
        const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
        setItems(updatedItems);
        setTotalPrice(updatedTotalPrice);
    };

    // Hàm addQuantity sẽ tăng số lượng sản phẩm khi người dùng nhấn nút tăng số lượng  sản phẩm
    const addQuantity = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity++;
        const updatedTotalPrice = totalPrice + updatedItems[index].productPrice;
        setItems(updatedItems);
        setTotalPrice(updatedTotalPrice);
    };

    // Hàm removeQuantity sẽ giảm số lượng sản phẩm khi người dùng nhấn nút giảm số lượng sản phẩm
    const removeQuantity = (index) => {
        const updatedItems = [...items];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity--;
            const updatedTotalPrice = totalPrice - updatedItems[index].productPrice;
            setItems(updatedItems);
            setTotalPrice(updatedTotalPrice);
        }
    };

    // Hàm renderProducts sẽ hiển thị danh sách sản phẩm trong giỏ hàng 
    const renderProducts = () => {
        // Duyệt qua từng sản phẩm trong giỏ hàng và hiển thị thông tin sản phẩm
        return items.map((item, index) => (
            // Hiển thị thông tin sản phẩm trong giỏ hàng || index: số thứ tự của sản phẩm trong giỏ hàng
            <View style={styles.product_base} key={index}> 

                <TouchableOpacity onPress={() => ConfirmDelete(item.product)} style={styles.delete}>
                    <Ionicons name="trash-bin" size={24} color="black" />
                </TouchableOpacity>       
                
                <TouchableOpacity>
                    <Image
                        style={styles.product_image}
                        source={{ uri: item.productImage[0] }} // Lấy ảnh sản phẩm từ API
                    />
                </TouchableOpacity>
                <View style={styles.product_items}>
                    <TouchableOpacity>
                        <Text style={styles.product_name}>{item.productName}</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.product_description}>{item.productDescription}</Text>
                    </TouchableOpacity>
                    <View style={styles.product_price_base}>
                        <Text style={styles.product_price}>{item.productPrice * item.quantity}₫</Text>
                        
                    </View>
                    <View style={styles.product_count}>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => addQuantity(index)}
                            >
                                <AntDesign name="plus" size={18} color="black" />
                            </TouchableOpacity>
                            <TextInput
                                style={styles.quantity}
                                value={item.quantity.toString()}
                                onChangeText={(text) => handleQuantityChange(parseInt(text), index)} // Cập nhật số lượng sản phẩm khi người dùng thay đổi số lượng 
                            />
                            <TouchableOpacity
                                onPress={() => removeQuantity(index)}
                                style={styles.removeButton}
                            >
                                <AntDesign name="minus" size={18} color="black" />
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        ));
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
                <TouchableOpacity onPress={console.log("Cart")}>
                    <Image
                        style={styles.image}
                        source={require("../../../public/images/product/iphone14.png")}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.main}
            >
                {renderProducts()}
            </ScrollView>
            <View style={styles.checkout}>
                <Text style={styles.checkout_text}>All</Text>
                <Text style={styles.total_text}>Total: {totalPrice}₫</Text>
                <TouchableOpacity style={styles.checkout_button}>
                    <MaterialIcons style={styles.checkout_icon} name="shopping-cart-checkout" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
