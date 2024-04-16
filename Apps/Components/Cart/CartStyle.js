import { StyleSheet } from 'react-native';

export const cartStylesheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F7FF",
        alignItems: "center",
        justifyContent: "center",
    },

    main: {
        marginBottom: 65,
    },

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

    // ---------------------- Search ---------------------------

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

    // ---------------------- Product list ---------------------------

    product_base: {
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "top",
        marginRight: 20,
        marginBottom: 20,
    },

    delete: {
        justifyContent: "center",
        alignItems: "center",
    },

    product_items: {
        marginLeft: 20,
    },

    product_image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'contain',
    },

    product_name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },

    product_description: {
        fontSize: 15,
        marginBottom: 5,
    },

    product_price_base: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    product_price: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        marginRight: 100,
    },

    product_count: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    addButton: {
        borderRadius: 10,
        borderWidth: 0.25,
        padding: 3,
    },

    quantity: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 10,
    },

    removeButton: {
        borderRadius: 10,
        borderWidth: 0.25,
        padding: 3,
    },

    // ---------------------- Prepare the bill ---------------------------

    checkout: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginHorizontal: 20,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
    },

    checkout_text: {
        fontSize: 18,
        marginLeft: -10,
        marginRight: 10,
    },

    total_text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
    },

    checkout_button: {
        backgroundColor: "#F35C56",
        borderRadius: 10,
        width: 100,
        height: 50,
        position: "absolute",
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },

});