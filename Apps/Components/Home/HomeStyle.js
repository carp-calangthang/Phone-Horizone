import React from "react";
import { StyleSheet } from "react-native";

export const HomeStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginTop: 20,
    },    

    // ---------------- home ----------------\

    // ---------------- top ----------------\
    promotional: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    promotional_image : {
        width: 390,
        height: 200,
        borderRadius: 20, 
    },
    
    cate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },

    cateButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 20,
        margin: 10,
    },

    mobile_logo: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    // ---------------- middle ----------------\

    Intro: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
    },

    introImageContainer: {
        width: 400, // Đặt kích thước container là 200 (hoặc bất kỳ kích thước cố định nào bạn muốn)
        height: 400,
        marginLeft: -20,
    },
    intro_image: {
        borderRadius: 20,
        width: '100%',
        height: '100%', 
        resizeMode: 'cover',
        borderRadius: 20,   
    },
    textContainer: {
        position: 'absolute',
        bottom: 0, // Đặt văn bản ở dưới cùng
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Một lớp mờ để làm nền cho văn bản
        padding: 10,
    },
    intro_title: {
        color: 'white',
        fontSize: 20,
    },
    intro_description: {
        color: 'white',
        fontSize: 16,
    },

    // ---------------- new phone ----------------\

    NewPhone: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },

    NewPhoneTxt: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    productBox: {
        marginTop: 10,
    },

    imageContainer: {
        width: 400, // Đặt kích thước container là 200 (hoặc bất kỳ kích thước cố định nào bạn muốn)
        height: 400,
        marginLeft: -40,
        marginRight: -80,
    },

    product_image: {
        width: '80%', 
        height: '80%',
        resizeMode: 'contain',
    },

    product_info: {
        marginTop: -50,
    },

    product_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    product_description: {
        fontSize: 16,
        marginBottom: 10,
    },

    product_price: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    // ---------------- hihi ----------------\

});