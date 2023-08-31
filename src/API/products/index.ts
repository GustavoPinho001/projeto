import axios from "axios";
import { Person } from "../../modules/USUARIOS/cadastro/cadastro";
import { Product } from "../../modules/PRODUTOS/addprodutos/addprodutos";
import { PoductUP } from "../../modules/PRODUTOS/updateProduct/upProduct";
import apiBase from "../apiBase";



export async function addProductsAPI({ name, price, images, description }: Product) {

  const response = await apiBase.post("/product", {
    name: name,
    price: price,
    description: description,
    images:images
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
  images
}: PoductUP) {
  const response = await apiBase.patch(`/product/${id}`, {
    name: name,
    price: price,
    description: description,
    images:images
  });

  return response.data;
}

export async function deleteThisProduct(id: string) {
  const response = await apiBase.delete(`/product/${id}`);

  return response.data;
}
