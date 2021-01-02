import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'https://re-folio-default-rtdb.firebaseio.com/'
});

export default axiosBase;