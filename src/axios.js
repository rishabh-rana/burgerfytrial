import axios from 'axios';

const instance = axios.create({
  baseURL:'https://burger-15d97.firebaseio.com/'
}
)

export default instance;
