import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Styles from '../styles/Common';

export default function SignUpScreen () {
    return (
      <View style={Styles.container}>
        <StatusBar style="auto" />
        <Text>Sign Up screen</Text>
      </View>
    );
};