import { StyleSheet } from 'react-native';

export const RegisterStylesheet = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    base: {
        marginTop: 100,
    },

    logo: {
        width: 400,
        height: 400,
        marginTop: -20,
    },

    LoginTitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Roboto',
    },

    LoginButton: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },

    LoginButtonTxt: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    GoogleLogin: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,        
    },

    GoogleLoginBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    GoogleLoginTxt: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginLeft: 10,
    },

    SignButton: {
        marginLeft: 5,
    },

    CreateButtonTxt: {
        color: '#fc4401',
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    // ------------------- Login Input -----------------------

    logo_2: {
        width: 350,
        height: 350,
        marginTop: -40,
    },

    TextInputBase: {
        alignItems: 'center',
        marginBottom: 20,    
    },

    TextInput: {
        
        backgroundColor: '#eb4a3d',
        color: '#fff',
        borderRadius: 20,
        marginBottom: 20,
        width: 350,
        height: 50,
        fontSize: 18,
        fontFamily: 'Roboto',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 20,
    },

    Sign: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },

    SignTitle: {
        fontSize: 18,
        fontFamily: 'Roboto',
    },

});