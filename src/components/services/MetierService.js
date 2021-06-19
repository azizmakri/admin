import axios from 'axios';

const METIER_API_BASE_URL = "http://localhost:8080/api/v1/metiers";
const METIER_API_BASE_URL_CREATE = "http://localhost:8080/api/v1/createMetiers";

class MetierService {

    getMetiers(search){
        return axios.post(METIER_API_BASE_URL,search);
    }

    createMetier(metier){
        return axios.post(METIER_API_BASE_URL_CREATE, metier);
    }

    getMetierById(metierId){
        return axios.get(METIER_API_BASE_URL + '/' + metierId);
    }

    updateMetier(metier, metierId){
        return axios.put(METIER_API_BASE_URL + '/' + metierId, metier);
    }

    deleteMetier(metierId){
        return axios.delete(METIER_API_BASE_URL + '/' + metierId);
    }
    findByTitle = (nom) => {
        return axios.post (METIER_API_BASE_URL + '/' + nom);
      };
    
}

export default new MetierService()