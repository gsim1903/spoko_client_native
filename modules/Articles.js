import axios from 'axios'
import store from '../state/store/store'

const Articles = {
  async index() {
    const { data } = await axios.get(
      'https://spoko-app-again.herokuapp.com/api/articles',
    )
    store.dispatch({ type: 'SET_ARTICLES', payload: data.articles })
  },
}

export default Articles
