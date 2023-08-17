import axios from "axios";

export interface Cobranca {
  nome: string;
  telefone: string;
  data: string;
  parcelaVencida: string;
  referencias: Referencias;
}
export interface Referencias {
  nome: string;
  telefone: string;
  referencia: string;
}
[];

export async function getCobranca(): Promise<any> {
  const response = await axios.get("http://ti18:3032/api/cobranca");
  return response.data;
}

export async function getCobrancaById(id: number): Promise<any> {
    const response = await axios.get(`http://ti18:3032/api/cobranca/${id}`);
    return response.data;
  }