import axios from 'axios';

const API_URL = 'http://localhost:9999';

export function getProdData() {
    return axios.get(API_URL+'/getProd');
  }

export function addProdData(data){
    //await axios.post(API_URL+'/addProd', data)
    return axios.post(API_URL+'/addProd', data);
}  