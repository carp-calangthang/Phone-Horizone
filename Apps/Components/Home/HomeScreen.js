import React, { useState, useEffect } from "react";
import { SvgXml } from 'react-native-svg';
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, TouchableOpacity, ScrollView, Image, Text } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStyleSheet as styles} from "./HomeStyle";
import HeaderBar from "../Layout/Header/Header";
import FooterBar from "../Layout/Footer/Footer";
import { iphone13Xml, iphone15Xml } from "./svg";

import Axios from "../../Api/Axios"

function HomeScreen() {

    const navigation = useNavigation(); 

    const [reload, setReload] = useState(false); // create state reload to reload screen when back

    // reload screen when back
    useEffect(() => {
        // add listener to reload screen when back
        const unsubscribe = navigation.addListener('focus', () => { 
            setReload(prev => !prev); // set reload to true to reload screen when back || !prev: get the opposite value of prev
        });
    
        return unsubscribe;
    }, [navigation]); // add navigation to useEffect dependencies

    const [products, setProducts] = useState([]); // add state products to store data from api

    // get data from api to state products when screen load
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await Axios.get("/product");
                setProducts(response.data); // set data from api to state products
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [reload]);  // add reload to useEffect dependencies to reload screen when back || reload: state to reload screen when back

    return (
        <SafeAreaView style={styles.container}>

            <HeaderBar />

            <ScrollView style={{marginBottom: 10}} showsVerticalScrollIndicator={false}>

                <View style={styles.promotional}>
                    <TouchableOpacity>
                        <Image 
                            source={require("../../../public/images/banner/sale.png")}
                            style={styles.promotional_image}
                        />
                    </TouchableOpacity>                
                </View>

                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.cate}>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone15Xml} width="80%" height="80%" />
                        <Text>Iphone 15 Pro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone15Xml} width="80%" height="80%" />
                        <Text>Iphone 14 Pro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone15Xml} width="80%" height="80%" />
                        <Text>Iphone 13 Pro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone15Xml} width="80%" height="80%" />
                        <Text>Iphone 12 Pro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone15Xml} width="80%" height="80%" />
                        <Text>Iphone 11 Pro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone13Xml} width="80%" height="80%" />
                        <Text>Iphone 15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone13Xml} width="80%" height="80%" />
                        <Text>Iphone 14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone13Xml} width="80%" height="80%" />
                        <Text>Iphone 13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone13Xml} width="80%" height="80%" />
                        <Text>Iphone 12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cateButton}>
                        <SvgXml xml={iphone13Xml} width="80%" height="80%" />
                        <Text>Iphone 11</Text>
                    </TouchableOpacity>
                </ScrollView>

                <View>
                    <View style={styles.NewPhone}>
                        <Text style={styles.NewPhoneTxt}>Sản Phẩm Mới</Text>

                        {/* show new data from api */}
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false}>
                            
                            {/* // Show products from product state  */}
                            {products.map((product) => ( // map to show each product on screen || product: each product in products
                                // show product info on screen || product: each product in products
                                // onPress: when click on product, navigate to Detail screen with product id || navigation.navigate('Detail', { productId: product.id })
                                <TouchableOpacity style={styles.productBox} key={product.id} onPress={() => navigation.navigate('Detail', { productId: product.id })}>
                                    
                                    <View style={styles.imageContainer}>
                                        <Image 
                                            source={{ uri: `${product.image}` }}  // get image from api
                                            style={styles.product_image} />
                                    </View>

                                    <View style={styles.product_info}>
                                        <Text style={styles.product_title}>{product.name}</Text>
                                        <Text style={styles.product_description}>{product.description}</Text>
                                        <Text style={styles.product_price}>{product.price}₫</Text>
                                    </View>      

                                </TouchableOpacity>
                            ))}

                        </ScrollView>
                    </View>
                </View>

                <View>
                    <View style={styles.NewPhone}>
                        <Text style={styles.NewPhoneTxt}>Sản Phẩm Bán Chạy</Text>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false}>                            
                            <TouchableOpacity 
                                style={styles.productBox}>
                                <View style={styles.imageContainer}>
                                    <Image 
                                        source={require("../../../public/images/product/iphone15pro.png")}
                                        style={styles.product_image}
                                    />
                                </View>
                                <View style={styles.product_info}>
                                    <Text style={styles.product_title}>iPhone 15 Pro</Text>
                                    <Text style={styles.product_description}>Một Iphone cực đỉnh</Text>
                                    <Text style={styles.product_price}>28.999.000đ</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.productBox}>
                                <View style={styles.imageContainer}>
                                    <Image 
                                        source={require("../../../public/images/product/iphone15.png")}
                                        style={styles.product_image}
                                    />
                                </View>
                                <View style={styles.product_info}>
                                    <Text style={styles.product_title}>iPhone 15 Pro</Text>
                                    <Text style={styles.product_description}>Một Iphone cực đỉnh</Text>
                                    <Text style={styles.product_price}>22.999.000đ</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

                <View>
                    <View style={styles.NewPhone}>
                        <Text style={styles.NewPhoneTxt}>Tìm Hiểu Về iPhone</Text>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false}>                            
                            <TouchableOpacity style={styles.Intro}>
                                <View style={styles.introImageContainer}>
                                    <Image 
                                        source={require("../../../public/images/app/cam.jpg")}
                                        style={styles.intro_image}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.intro_title}>Camera Tiên Tiến</Text>
                                        <Text style={styles.intro_description}>Phá Vỡ mọi giới hạn</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Intro}>
                                <View style={styles.introImageContainer}>
                                    <Image 
                                        source={require("../../../public/images/app/cpu.jpg")}
                                        style={styles.intro_image}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.intro_title}>Chip do Apple thiết kế</Text>
                                        <Text style={styles.intro_description}>Mang lại trải nghiệm tuyệt vời</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Intro}>
                                <View style={styles.introImageContainer}>
                                    <Image 
                                        source={require("../../../public/images/app/phone.jpg")}
                                        style={styles.intro_image}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.intro_title}>Thiết kế sáng tạo</Text>
                                        <Text style={styles.intro_description}>Đẹp và bền bỉ</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

            </ScrollView>

            <FooterBar />   

        </SafeAreaView>
    );
}

export default HomeScreen;