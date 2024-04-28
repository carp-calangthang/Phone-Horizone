import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import { loginStylesheet as styles }  from './LoginStyle';
import Axios from '../../../Api/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen() {
    const navigation = useNavigation(); // tạo biến navigation để điều hướng giữa các màn hình

    // set initial state of username and password   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // update state of username
    const handleUsernameChange = username => {
        setUsername(username);
    };

    // update state of password
    const handlePasswordChange = password => {
        setPassword(password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // useEffect(() là một hook của React dùng để thực thi một hàm sau mỗi lần render
    useEffect(() => {
        // Kiểm tra token khi màn hình được tải lần đầu tiên
        checkToken(); // Kiểm tra token khi màn hình được tải lần đầu tiên
    }, []);

    // const removeToken = async () => {
    //     try {
    //       await AsyncStorage.removeItem('accessToken');
    //       console.log('Đã xóa token thành công!');
    //     } catch (error) {
    //       console.log('Lỗi khi xóa token:', error);
    //     }
    // };

    // Hàm kiểm tra token khi người dùng đăng nhập
    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken'); // Lấy token từ AsyncStorage
            console.log('Token Login:', token);
            if (token) {
                // Token tồn tại, gửi yêu cầu đến máy chủ để kiểm tra tính hợp lệ của nó
                const response = await Axios.get('/users/current', {
                    headers: {
                        Authorization: `Bearer ${token}` // Thêm token vào header Authorization
                    }
                });
                console.log(`Server: ${response.data.message}`);
                if (response.data.ping === '1'){
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }] // Điều hướng đến màn hình chính và xóa lịch sử điều hướng
                    }); // Chuyển hướng người dùng đến màn hình chính nếu token hợp lệ
                } else {
                    console.log('Please login to continue! :D');
                }                     
            } else {
                console.log('Please login to continue!');
                Alert.alert('Please enter your username and password!');

            }
        } catch (error) { 
            Alert.alert('Please login to continue!');
            console.log(error.response.message);
        }
    };

    const cleanToken = () => {
        AsyncStorage.removeItem('accessToken');
    }

    const handleLogin = () => {
        Axios.post('/users/login', {
            username: username, 
            password: password
        })
        .then(response => {
            if (response.data.ping === '0') {
                Alert.alert('Error', response.data.message);
                return;
            }
            AsyncStorage.setItem('accessToken', response.data.accessToken); // Store access token locally
            // Kiểm tra token sau khi đăng nhập
            checkToken();
        })
        .catch(error => {
            console.log(error);
        })
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>

                <View style={styles.base}>
                    <Image
                        style={styles.logo_2}
                        source={require("../../../../public/images/logo/e.png")}
                    />                
                    <View style={styles.TextInputBase}>
                        <TextInput 
                            value={username}
                            onChangeText={handleUsernameChange}
                            placeholder='Username' 
                            placeholderTextColor="#ffffff"
                            style={styles.TextInput} 
                        />
                        <TextInput 
                            value={password}
                            onChangeText={handlePasswordChange}
                            placeholder='Password' 
                            style={styles.TextInput}
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#ffffff"
                        />
                        <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
                            <AntDesign name={showPassword ? 'eye' : 'eyeo'} size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                            onPress={handleLogin}
                    >
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#fc4401', '#fd1d8b']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.LoginButton}>
                            
                                <Text style={styles.LoginButtonTxt}>SIGN IN</Text>
                            
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.Forgot}>
                        <TouchableOpacity style={styles.ForgotButton} >
                            <Text style={styles.ForgotButtonTxt}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.Another}>
                        <TouchableOpacity 
                            style={styles.AnotherButton} 
                            onPress={() => {
                                navigation.navigate('LoginMore');
                            }}
                        >
                            <Text style={styles.AnotherButtonTxt}>Another Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Reg}>
                        <Text style={styles.RegTitle}>Don't have an account?</Text>
                        <TouchableOpacity 
                            style={styles.CreateButton} 
                            onPress={() => {
                                navigation.navigate('SignUp');
                            }}
                        >
                            <Text style={styles.CreateButtonTxt}>Create</Text>
                        </TouchableOpacity>
                    </View>                
                </View>     

            </SafeAreaView>
        </KeyboardAvoidingView> 
    );
};

export default LoginScreen;
