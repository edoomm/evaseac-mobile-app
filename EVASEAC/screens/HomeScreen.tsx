import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import Styles from '../styles/Common';

export default function HomeScreen() {
    return (
      <View style={Styles.container}>
        <Text>Home screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  };