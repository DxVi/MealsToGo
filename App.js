import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.green}>
          <Text>search</Text>
        </View>
        <View style={styles.blue}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  green: {
    padding: 16,
    backgroundColor: 'green',
  },
  blue: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue'
  }

});
