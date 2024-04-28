
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import { RegisterStylesheet as styles }  from './RegisterStyle';
import Axios from '../../../Api/Axios'

function RgInputScreen() {
    const navigation = useNavigation();

    // set initial state of username and password   
    const [username, setUsername] = useState(''); // tạo biến username và hàm setUsername để quản lý trạng thái của username
    const [password, setPassword] = useState(''); // tạo biến password và hàm setPassword để quản lý trạng thái của password
    const [ email, setEmail] = useState(''); // tạo biến email và hàm setEmail để quản lý trạng thái của email
    const [ rePassword, setRePassword] = useState(''); // tạo biến rePassword và hàm setRePassword để quản lý trạng thái của rePassword

    // câp nhật trạng thái của username
    const handleUsernameChange = username => {
        setUsername(username); // cập nhật trạng thái của username 
    };

    // cập nhật trạng thái của password
    const handlePasswordChange = password => {
        setPassword(password); // cập nhật trạng thái của password
    };

    // cập nhật trạng thái của rePassword
    const handleRepasswordChange = rePassword => {
        setRePassword(rePassword); // cập nhật trạng thái của rePassword
    };

    // cập nhật trạng thái của email
    const handleEmailChange = email => {
        setEmail(email); // cập nhật trạng thái của email
    };

    // xử lý sự kiện khi người dùng nhấn nút đăng ký
    const handleRg = () => {
        console.log('Register button pressed');
        // kiểm tra xem mật khẩu và rePassword có khớp nhau không
        if (password !== rePassword) {
            console.log('Passwords do not match');
            return;
        }
        // gửi yêu cầu đến máy chủ để đăng ký tài khoản
        Axios.post('/users/register', {
            username: username,
            email: email,
            password: password
        })
        // xử lý kết quả trả về từ máy chủ sau khi đăng ký tài khoản thành công
        .then(response => {
            // kiểm tra xem tài khoản đã được tạo thành công chưa
            if (response.data.ping === '1'){
                console.log('User created successfully');
                navigation.navigate('Login'); // chuyển hướng người dùng đến màn hình đăng nhập nếu tài khoản được tạo thành công
            }
        })
        .catch(error => {
            console.log(`err: ${error}`);
        })
    };

    // useEffect(() => {
    //     console.log('username: ', username);
    //     console.log('email: ', email);
    //     console.log('password: ', password);
    //     console.log('rePassword: ', rePassword);
    // });

    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={350}
        >
            <SafeAreaView style={styles.container}>
                
                <View style={styles.base}>
                    <Image
                        style={styles.logo_2}
                        source={require("../../../../public/images/logo/e.png")}
                    />                
                    <View style={styles.TextInputBase}>
                        <TextInput 
                            value={username} // giá trị của username được cập nhật từ trạng thái của username
                            onChangeText={handleUsernameChange} // hàm xử lý sự kiện khi người dùng nhập username
                            placeholder='Username' 
                            style={styles.TextInput}
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput 
                            value={email} // giá trị của email được cập nhật từ trạng thái của email
                            onChangeText={handleEmailChange} // hàm xử lý sự kiện khi người dùng nhập email
                            placeholder='Email' 
                            style={styles.TextInput}
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput 
                            value={password} // giá trị của password được cập nhật từ trạng thái của password
                            onChangeText={handlePasswordChange} // hàm xử lý sự kiện khi người dùng nhập password
                            placeholder='Password'
                            style={styles.TextInput}
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput 
                            value={rePassword} // giá trị của rePassword được cập nhật từ trạng thái của rePassword
                            onChangeText={handleRepasswordChange} // hàm xử lý sự kiện khi người dùng nhập rePassword
                            placeholder='Retype Password' 
                            style={styles.TextInput}
                            placeholderTextColor="#ffffff"
                        />
                    </View>

                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#fc4401', '#fd1d8b']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.LoginButton}>
                        <TouchableOpacity
                            onPress={handleRg}
                        >
                            <Text style={styles.LoginButtonTxt}>SIGN UP</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <View style={styles.Sign}>
                        <Text style={styles.SignTitle}>Already have an account?</Text>
                        {/* // chuyển hướng người dùng đến màn hình đăng nhập */}
                        <TouchableOpacity 
                            style={styles.SignButton}
                            onPress={() => {navigation.navigate('Login');}}         
                        >
                            <Text style={styles.CreateButtonTxt}>Sign in</Text>
                        </TouchableOpacity>
                    </View>                
                </View>           

            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default RgInputScreen;