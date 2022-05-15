import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Appbar } from 'react-native-paper'

const App = () => {
  const { appTitle } = useSelector((state) => state)
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appback}>
        <Appbar.Content
          title={<Text style={styles.appbackcont}> {appTitle}</Text>}
        />
      </Appbar.Header>
      <Text> What goes here</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColour: ':#fff',
  },
  appback: { backgroundColor: 'cyan' },
  appbackcont: { fontWeight: 'bold', fontSize: 23 },
})
