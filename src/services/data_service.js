import axios from 'axios'

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export default class DataSevice {
    
    getAllPosts = async () => {
        return await axios.get(API_URL + "/api/posts/")
    }

    getPost = (id) => {
        return axios.get(API_URL + `/posts/${id}/`)
        }

    getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

}