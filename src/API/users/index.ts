import apiBase from "../apiBase";
import { Person } from "../../modules/USUARIOS/cadastro/cadastro";
export async function createUser({ name, senha, email }: Person) {
    const response = await apiBase.post("/user", {
      name: name,
      senha: senha,
      email: email,
    });
  
    return response.data;
  }
  
  export async function getAllUsers() {
    const response = await apiBase.get("/user");
  
    return response.data;
  }
  
  export async function deleteUser(id: string) {
    const response = await apiBase.delete(`/user/${id}`);
  
    return response.data;
  }
  
  export async function login(form: Person) {
    const response = await apiBase.post(`/login/`, {
      senha: form.senha,
      email: form.email,
    });
  
    return response.data;
  }
  
  export async function updateUsers({ name, senha, email, id }: Person) {
    const response = await apiBase.put(`/user/${id}`, {
      name: name,
      senha: senha,
      email: email,
    });
  
    return response.data;
  }
  
  export async function getUserApi(id: string) {
    const response = await apiBase.get(`/user/${id}`);
  
    return response.data;
  }
  