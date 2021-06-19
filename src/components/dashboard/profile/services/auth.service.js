import axios from "axios";
import { API_BASE_URL,  ACCESS_TOKEN } from '../../../../constants/index';
const API_URL = "http://localhost:8080/api/auth/";


const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};
class AuthService {

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
}
}
export default new AuthService();
