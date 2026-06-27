import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const fetchSales = async () => {
  const response = await api.get('/sales');
  return response.data;
};

export const createSale = async (saleData: any) => {
  const response = await api.post('/sales', saleData);
  return response.data;
};

export const updateProduct = async (productId: string, productData: any) => {
  const response = await api.put(`/products/${productId}`, productData);
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await api.delete(`/products/${productId}`);
  return response.data;
};

export default {
  fetchProducts,
  fetchSales,
  createSale,
  updateProduct,
  deleteProduct,
};