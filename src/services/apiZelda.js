import axios from 'axios'

const apiZelda = axios.create({
    baseURL: 'https://botw-compendium.herokuapp.com/api/v2',
    headers: {
        'content-type': 'application/json;charset=utf-8'
    }
})

export default apiZelda