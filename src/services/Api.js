import axios from 'axios'
// import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `http://api.tvmaze.com/`
  })
}
