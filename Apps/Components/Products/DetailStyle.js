import { StyleSheet } from "react-native";

export const DetailStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F7FF",
    },

    // ---------------------- Header ---------------------------    

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", // Change this line
        width: "100%",
        left: 0, // Align to the left
        padding: 10,
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },

    search_base: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F35C56",  
        borderRadius: 20, 
    },

    search_bar: {
        width: 220,
        height: 50,
        marginLeft: 20,
    },

    search_button: {
        marginLeft: 5,
        marginRight: 20,
    },

    // ---------------------- Main ---------------------------  

    main: {
        marginHorizontal: 20,
        marginBottom: 20,
    },

    product_image_list: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    left: {
        marginRight: 20,
    },

    right: {
        marginLeft: 20,
    },

    product_image: {
        flex: 1,
        width: 400,
        height: 400,
        borderRadius: 20,
        resizeMode: 'contain',
    },

    //----- Product Info -----

    product_info: {
        marginTop: 20,
    },

    product_name: {
        fontSize: 30,
        fontWeight: "bold",
    },

    product_storage: {
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        marginTop: 10,
    },

    product_storage_text: {
        fontSize: 18,
        marginRight: 10,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#F35C56", 
    },

    product_title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },

    product_color: {
        flexDirection: "row",
        marginTop: 10,
    },

    product_color_text: {
        fontSize: 18,
        marginRight: 10,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#F35C56", 
    },

    product_price: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
    },

    product_description: {
        fontSize: 18,
        marginTop: 10,
    },

    buy_button: {
        backgroundColor: "#F35C56",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    buy_button_items: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    buy_button_text: {
        color: "white",
        fontSize: 20,
        marginLeft: 10,
    },

});