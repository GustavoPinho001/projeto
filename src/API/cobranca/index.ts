import axios from "axios";
import { Person } from "../../modules/USUARIOS/cadastro/cadastro";
import { Product } from "../../modules/PRODUTOS/addprodutos/addprodutos";
import { PoductUP } from "../../modules/PRODUTOS/updateProduct/upProduct";
const apiBase = axios.create({
  baseURL: "http://172.16.6.104:8080",
  headers: { Authorization: `bearer ${window.localStorage.getItem("token")} ` },
});

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

export async function addProductsAPI({ name, price, description }: Product) {
  const response = await apiBase.post("/product", {
    name: name,
    price: price,
    description: description,
  });
  return response.data;
}


export async function getAllProductsAPI() {
  const response = await apiBase.get("/product");

  return response.data;
}

export async function getProductByid(id: string) {
  const response = await apiBase.get(`/product/${id}`);

  return response.data;
}

export async function updateProducts({
  name,
  description,
  price,
  id,
}: PoductUP) {
  const response = await apiBase.patch(`/product/${id}`, {
    name: name,
    price: price,
    description: description,
  });

  return response.data;
}

export async function deleteThisProduct(id: string) {
  const response = await apiBase.delete(`/product/${id}`);

  return response.data;
}
