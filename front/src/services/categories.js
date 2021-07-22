import apiServer from './api'

export default {
  get: {
    categories() {
      return apiServer.get('/categories')
    },
  },
  post: {
    createCategory(data) {
      return apiServer.post('/categories/', data)
    },
  },
}
