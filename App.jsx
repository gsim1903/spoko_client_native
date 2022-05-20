import { StyleSheet, Text, View  } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Appbar, Card } from 'react-native-paper'
import Articles from './modules/Articles'


Articles

const App = () => {
  const { appTitle, articles } = useSelector((state) => state)
  useEffect(() => {
    Articles.index()
  }, [])
  
if (articles) {
  content = Object.keys(articles).map((category) => {
    return (
      <>
    {articles[category].map((article) => {
      <Card>
      <Card.Title title={article.title} subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Title>{article.title} title</Title>
        <Paragraph>{article.body}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>

    })}
    </>
    )
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
