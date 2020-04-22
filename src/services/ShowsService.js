import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('search/shows?q=girls', {
      params: {
        search: search
      }
    })
  },
  search (keyword) {
    keyword = keyword || 'girls'
    return Api().get(`search/shows?q=${keyword}`)
  }
}
