import { StyleSheet } from "react-native";

export const ManageStyleSheet = StyleSheet.create({
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

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },

    List: {
        width: "100%",
        height: "100%",
        marginTop: 10,
    },

    items: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        backgroundColor: "#fff",
        marginHorizontal: 10, // Thêm marginHorizontal để cách đều khoảng trắng ở hai bên trái và phải của mỗi item
        marginBottom: 10, // Thêm marginBottom để cách đều khoảng trắng giữa các item
        padding: 10,
        borderRadius: 10,
    },

    itemsTxt: {
        width: 200,
        marginLeft: 10,
    },

    itemsImg: {
        width: 80,
        height: 80,
        borderRadius: 10,
        resizeMode: 'contain',
    },

});