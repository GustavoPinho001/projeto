import axios from "axios";
import { Person } from "../../modules/cadastro/cadastro";

 export async function createUser({name, senha, email}:Person){
  const response = await axios.post("http://ti20:8080/user",{name:name, senha:senha, email:email})

  return response.data

  
  
}
export async function getAllUsers() {
  const response = await axios.get("http://ti20:8080/user",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})

  return response.data
    
}

export async function deleteUser(id: string) {
  const response = await axios.delete(`http://ti20:8080/user/${id}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiZ3VzdGF2b2Rhc2lsdmFwaW5obzhAZ21haWwuY29tIiwibmFtZSI6Ikd1c3Rhdm8gUGluaG8iLCJpYXQiOjE2OTIyODE5NDEsImV4cCI6MTY5NDg3Mzk0MX0.KglRFxb_zhsz_z6QSdTBW2MXgy2wy9utT0cM6EANTI4"}})

  return response.data
    
}