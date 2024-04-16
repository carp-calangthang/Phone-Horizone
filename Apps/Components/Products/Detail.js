import React, { useEffect, useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { DetailStyleSheet as styles } from "./DetailStyle";

import Axios from "../../Api/Axios";

function Detail() {

    const navigation = useNavigation();
    const route = useRoute();
    const { productId } = route.params;

    const [detail, setDetail] = useState({});

    useEffect(() => {
        Axios.get(`/product/find/${productId}`)
            .then((response) => {
                setDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [productId]);

    const AddCart = async (productid) => {
        try{
            console.log(productid);
            const token = await AsyncStorage.getItem('accessToken');
            const response = await Axios.post('/cart/add', {
                productid,
                quantity: 1
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data.message);
            if (response.data.ping === '1') {
                console.log("Product added to cart successfully.");
                Alert.alert('Thêm vào giỏ hàng thành công', 'Sản phẩm đã được thêm vào giỏ hàng của bạn.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                            
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <AntDesign name="home" size={32} color="black" />
                </TouchableOpacity>
                <View style={ styles.search_base }>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={'#fff'}
                        style={ styles.search_bar }
                    />
                    <TouchableOpacity style={ styles.search_button }>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>         
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Cart")} // Chuyển đến màn hình giỏ hàng
                >
                    <Image 
                        style={styles.image} 
                        source={require("../../../public/images/icon/apple.jpg")}
                    />
                </TouchableOpacity>     

            </View>

            <ScrollView style={styles.main} showsVerticalScrollIndicator={false} >

                <View style={styles.product}>

                    <View style={styles.product_image_list}>
                        <TouchableOpacity style={styles.left}>
                            <AntDesign name="caretleft" size={24} color="black" />
                        </TouchableOpacity>
                        <Image 
                            source={{uri: `${detail.image}`}} // Sử dụng uri của hình ảnh từ detail
                            style={styles.product_image}/>
                        <TouchableOpacity style={styles.right}>
                            <AntDesign name="caretright" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.product_info}>
                        <Text style={styles.product_name}>{detail.name}</Text>
                        <Text style={styles.product_price}>₫ {detail.price}</Text> 

                        <Text style={styles.product_title}>Dung lượng</Text>

                        <View style={styles.product_storage}>
                            <TouchableOpacity>
                                <Text style={styles.product_storage_text}>128GB</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.product_storage_text}>512GB</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.product_storage_text}>1TB</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.product_title}>Màu sắc</Text>

                        <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.product_color}>
                            <TouchableOpacity>
                                <Text style={styles.product_color_text}>Titan Xanh</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.product_color_text}>Titan Tự Nhiên</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.product_color_text}>Titan Trắng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.product_color_text}>Titan Đen</Text>
                            </TouchableOpacity>
                        </ScrollView>                       
                    </View>

                </View>

                <TouchableOpacity onPress={() => {AddCart(detail.id)}} style={styles.buy_button}>
                    <View style={styles.buy_button_items}>
                        <AntDesign name="shoppingcart" size={24} color="#fff" />
                        <Text style={styles.buy_button_text}>Mua ngay</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView> 

        </SafeAreaView>
    )

}

export default Detail;
