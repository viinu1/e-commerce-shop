import axios from 'axios';

// const axios = require('axios');
const BASE_URL = 'https://fakestoreapiserver.reactbd.com';

const options = {
    params: {},
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
