import { apiClient } from './client';

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface CreateProductDto {
    name: string;
    price: number;
}

// Response wrapper from NestJS TransformInterceptor
interface ApiResponse<T> {
    data: T;
}

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<ApiResponse<Product[]>>('/products');
    return response.data.data;
};

export const createProduct = async (data: CreateProductDto): Promise<Product> => {
    const response = await apiClient.post<ApiResponse<Product>>('/products', data, {
        headers: {
            'Authorization': 'secret_token'
        }
    });
    return response.data.data;
};
