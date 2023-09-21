import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GuessTheNumber from './src/components/GuessTheNumber';

export default function App() {
  return (
    <View style={styles.container}>
      <GuessTheNumber maxTries={3} maxValue={5}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    paddingTop: 30
  },
});
