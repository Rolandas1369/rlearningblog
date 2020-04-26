import axios from 'axios'

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export default class DataSevice {


    getAllFeatures = async () => {
        return await axios.get(API_URL + "/api/features/")
    }

    getAllInsights = async () => {
        return await axios.get(API_URL + "/api/insights/")
    }
    
    getAllPosts = async () => {
        return await axios.get(API_URL + "/api/posts/")
    }

    getPost = (id) => {
        return axios.get(API_URL + `/api/posts/${id}/`)
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

    addItem = (item, content, image, filename, gist_id, gist_filename, video_src, lang_choice) => {
    

        let cokie = this.getCookie('csrftoken');
        let formData = new FormData()

        console.log('args',this.props)

        formData.append('title', item)
        formData.append('content', content)
        if(image !== null) {
            formData.append('image', image, image.name)
            formData.append('filename', filename)      
        }
        formData.append('gist_id', gist_id)
        formData.append('gist_filename', gist_filename)
        formData.append('video_src', video_src)
        formData.append('language_choice', lang_choice) //model name
        
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

            // set this axios.post(API_url + "/api/posts/create/", made a hard error to debug 
        axios.post("/api/posts/create/", 
                formData, 
                {headers: {'X-CSRFToken': cokie, 
                           'Accept': 'application/json',
                           'Content-Type': 'multipart/form-data', 
                           Authorization: cokie}})
                .then(console.log("Ok"))    
    };

    addFeature = (feature, path) => {

        let cokie = this.getCookie('csrftoken');
        let formData = new FormData()

        formData.append('content',feature)

        axios.post(`/api/${path}/create/`, 
                formData, 
                {headers: {'X-CSRFToken': cokie, 
                           'Accept': 'application/json',
                           'Content-Type': 'multipart/form-data', 
                           Authorization: cokie}})
                .then(console.log("Feature is added"))    
    }



    removeElement = (id, itemList) => {
       
        let cokie = this.getCookie('csrftoken');

        console.log('In remove', itemList)

        axios
            .delete(`/api/posts/delete/${id}/`, 
                   {headers: {'X-CSRFToken': cokie, 
                              'Accept': 'application/json',
                              'Content-Type': 'multipart/form-data',
                              Authorization: cokie}})
            
                const idx = itemList.findIndex((el) => el.id === id)
                itemList.splice(idx, 1)
                const newItemList = [...itemList.slice(0, idx), ...itemList.slice(idx)]
                
                return newItemList       
    }

    removeFeature = (id, itemList, feature) => {
       
        let cokie = this.getCookie('csrftoken');

        console.log('In remove', itemList)
        console.log('id', id)
        axios
            .delete(`/api/${feature}/delete/${id}/`, 
                   {headers: {'X-CSRFToken': cokie, 
                              'Accept': 'application/json',
                              'Content-Type': 'multipart/form-data',
                              Authorization: cokie}})
            
                const idx = itemList.findIndex((el) => el.id === id)
                itemList.splice(idx, 1)
                const newItemList = [...itemList.slice(0, idx), ...itemList.slice(idx)]
                
                return newItemList       
    }


    checkUser = async () => {  
        return await axios.get("/rest-auth/user/")  
    }

      getHtmlChanges() {
        let x =  axios.get("/api/html/1/");
        
        return x
    }

    changeHtmlColor = (color) => {
        let cokie = this.getCookie('csrftoken');
        let formData = new FormData()

        formData.append('background_color',color)

        axios.put("/api/html/1/", 
                formData, 
                {headers: {'X-CSRFToken': cokie, 
                           'Accept': 'application/json',
                           'Content-Type': 'multipart/form-data', 
                           Authorization: cokie}})
                .then(console.log("color is added"))   
    }

    getStack = async () => {
        return await axios.get(API_URL + "/api/techstack/")
    }

    getSkills = async () => {
        return await axios.get(API_URL + "/api/techskills/")
    }

    getEducation = async () => {
        return await axios.get(API_URL + "/api/education/")
    }

    getKnownTech = async () => {
        return await axios.get(API_URL + "/api/knowntech/")
    }

    getWorkExpierience = async () => {
        return await axios.get(API_URL + "/api/workexpierence/")
    }

    getLastHtml = async () => {
        return await axios.get(API_URL + "/api/html/")
    }

    addTech = (language, using_from) => {

        let cokie = this.getCookie('csrftoken');
        let formData = new FormData()

        formData.append('language',language)
        formData.append('using_from',using_from)

        axios.post(`/api/techstack/`, 
                formData, 
                {headers: {'X-CSRFToken': cokie, 
                           'Accept': 'application/json',
                           'Content-Type': 'multipart/form-data', 
                           Authorization: cokie}})
                .then(console.log("Tech is added"))    
    }

    addskill = (language_category, description, experience, skill) => {

        let cokie = this.getCookie('csrftoken');
        let formData = new FormData()

        formData.append('language_category',language_category)
        formData.append('description',description)
        formData.append('experience',experience)
        formData.append('skill',skill)

        axios.post(`/api/techfeatures/`, 
                formData, 
                {headers: {'X-CSRFToken': cokie, 
                           'Accept': 'application/json',
                           'Content-Type': 'multipart/form-data', 
                           Authorization: cokie}})
                .then(console.log("Feature is added"))    
    }
}