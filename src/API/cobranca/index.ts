import axios from "axios";
import { Person } from "../../modules/cadastro/cadastro";
import { Product } from "../../modules/addprodutos/addprodutos"

 export async function createUser({name, senha, email}:Person){
  const response = await axios.post("http://172.16.6.104:8080/user",{name:name, senha:senha, email:email})

  return response.data 
  
}
export async function getAllUsers() {
  const response = await axios.get("http://172.16.6.104:8080/user",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})

  return response.data
    
}
export async function deleteUser(id: string) {
  const response = await axios.delete(`http://172.16.6.104:8080/user/${id}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})

  return response.data
    
}
export async function login( form:Person) {
  const response = await axios.post(`http://172.16.6.104:8080/login/`, {senha:form.senha, email:form.email, headers:{authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTI3MDMzMjUsImV4cCI6MTY5MjcxNDEyNX0.5rBD65mopb63DUpKnOwTba1Rde71QIoY4aMrVrkGHcU"}} )
  
  return response.data

}
export async function updateUsers({name, senha, email, id}: Person) {
  const response = await axios.put(`http://172.16.6.104:8080/user/${id}`,{ name:name, senha:senha, email:email }, {headers: {authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})

  return response.data
}
export async function getUserApi(id: string) {
  const response = await axios.get(`http://172.16.6.104:8080/user/${id}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})

  return response.data
    
}
export async function addProductsAPI({name, price, description,}:Product) {
  const response = await axios.post('http://172.16.6.104:8080/product',{name:name, price:price, description:description}, {headers:{authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})
  return response.data
}

export async function getAllProductsAPI() {
  const response = await axios.get('http://172.16.6.104:8080/product',{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})
  
  return response.data
}
export async function getProductByid(id:string) {
  const response = await axios.get ('http://172.16.6.104:8080/556656',{headers: {Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})
 
  return response.data
}