import axios from 'axios';

const FACULTE_API_BASE_URL = "http://localhost:8080/api/v1/facultes";

class FaculteService {

    getFacultes(){
        return axios.get(FACULTE_API_BASE_URL);
    }

    createFaculte(faculte){
        return axios.post(FACULTE_API_BASE_URL, faculte);
    }

    getFaculteById(faculteId){
        return axios.get(FACULTE_API_BASE_URL + '/' + faculteId);
    }

    updateFaculte(faculte, faculteId){
        return axios.put(FACULTE_API_BASE_URL + '/' + faculteId, faculte);
    }

    deleteFaculte(faculteId){
        return axios.delete(FACULTE_API_BASE_URL + '/' + faculteId);
    }
    
}

export default new FaculteService()