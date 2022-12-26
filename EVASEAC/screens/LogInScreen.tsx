import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Styles from '../styles/Common';

export default function LogInScreen() {
    const [email, setEmail] =  useState('');

    const onSubmit = () => {
        navigation.navigate('Home');
    }
    
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <StatusBar style="auto" />

            <Text>INICIO</Text>
            <TextInput
                placeholder='correo@dominio.com'
                value={email}
                onChangeText={setEmail}
                style={{
                    fontSize: 18,
                    width: '80%',
                    marginVertical: 10
                }}
            />
            
            <Pressable
                onPress={onSubmit}
                style={{
                    backgroundColor: '#275DAD',
                    height: 50,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                    width: '70%'
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                >
                    Ingresar
                </Text>
            </Pressable>
            {/* <Button
                title='Sign Up'
                onPress={() => navigation.navigate('SignUp')}
            />
            <Button
                title='Home'
                onPress={() => navigation.navigate('Home')}
            /> */}
        </View>
    );
};