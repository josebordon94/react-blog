import apiServer from './api'

export default {
  get: {
    posts() {
      return apiServer.get('/posts')
    },
    postDetail(id) {
      return apiServer.get(`/posts/${id}`)
    },
  },
  post: {
    createPost(data) {
      return apiServer.post('/posts/', data)
    },
  },
  delete: {
    deletePost(post_id) {
      return apiServer.delete(`/posts/${post_id}`)
    },
  },
  patch: {
    editPost(data) {
      return apiServer.patch(`/posts/${data.id}`, data)
    },
  },
}
