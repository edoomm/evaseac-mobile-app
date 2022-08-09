import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Styles from '../styles/Common';

export default function LogInScreen() {
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <StatusBar style="auto" />
            <Text>SplashScreen/LogIn screen</Text>
            <Button
                title='Sign Up'
                onPress={() => navigation.navigate('SignUp')}
            />
            <Button
                title='Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};