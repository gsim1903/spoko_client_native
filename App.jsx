import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Appbar } from 'react-native-paper'
import Articles from './modules/Articles'

Articles

const App = () => {
  const { appTitle, articles } = useSelector((state) => state)
  useEffect(() => {
    Articles.index()
  }, [])

  let categories

if (articles) {
  categories = Object.keys(articles).map((category) => {
    return <Text key={category}><> </>{category}</Text>
  })
}
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appback}>
        <Appbar.Content
          title={<Text style={styles.appbackcont}> {appTitle}</Text>}
        />
      </Appbar.Header>
      {articles && <Text> We have articles for: {categories} </Text>}
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
