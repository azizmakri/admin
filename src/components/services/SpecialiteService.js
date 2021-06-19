import axios from 'axios';

const SPECIALITE_API_BASE_URL = "http://localhost:8080/api/v1/specialites";

class SpecialiteService {

    getSpecialites(){
        return axios.get(SPECIALITE_API_BASE_URL);
    }

    createSpecialite(specialite){
        return axios.post(SPECIALITE_API_BASE_URL, specialite);
    }

    getSpecialiteById(specialiteId){
        return axios.get(SPECIALITE_API_BASE_URL + '/' + specialiteId);
    }

    updateSpecialite(specialite, specialiteId){
        return axios.put(SPECIALITE_API_BASE_URL + '/' + specialiteId, specialite);
    }

    deleteSpecialite(specialiteId){
        return axios.delete(SPECIALITE_API_BASE_URL + '/' + specialiteId);
    }
    
}

export default new SpecialiteService()