import  axios  from "axios";

axios.defaults.baseURL = 'https://arthub-9969ce7ed1f1.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'mutipart/form-data'
axios.defaults.withCredentials = true