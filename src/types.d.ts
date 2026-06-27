declare module 'express' {
  import { Request, Response, NextFunction } from 'express';

  export interface CustomRequest extends Request {
    user?: any; // Adjust according to your user model
  }

  export interface CustomResponse extends Response {
    sendResponse: (data: any, status?: number) => void;
  }

  export interface Middleware {
    (req: CustomRequest, res: CustomResponse, next: NextFunction): void;
  }
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category?: string; // Optional field for product category
  expiryDate?: string; // Optional field for product expiry date
}

export interface Sale {
  id: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  date: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'staff';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}