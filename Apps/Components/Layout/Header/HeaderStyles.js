import { StyleSheet } from "react-native";

export const HeaderStyleSheet = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    searchBar: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    searchButton: {
        padding: 10,
    },
    cartButton: {
        padding: 10,
    },
});