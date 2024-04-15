import { StyleSheet } from "react-native";

export const ProductUploadStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: "30%",
    },

    scroll: {
        marginHorizontal: 20,
    },

    upload: {
        marginBottom: 20,
    }, 

    upload_button: {
        backgroundColor: "#eb4a3d",
        padding: 10,
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },

    upload_items: {
        alignItems: "center",
    },

    upload_icon: {
        marginBottom: 10,
    },

    hint: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },

    sub_hint: {
        color: "white",
        fontSize: 15,
    },

    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    imageWrapper: {
        position: 'relative',
        marginRight: 10,
    },

    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 10,
    },

    deleteButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 12,
        padding: 5,
    },

    product_input: {
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },

    input: {
        backgroundColor: "#eb4a3d",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        color: "white",
    },

    input_area: {
        backgroundColor: "#eb4a3d",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        color: "white",
        height: 200,
    },

    product_title: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },

    submit_button: {
        backgroundColor: "#eb4a3d",
        padding: 10,
        borderRadius: 5,
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },

});