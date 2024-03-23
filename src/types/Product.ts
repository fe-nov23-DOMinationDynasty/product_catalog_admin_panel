import { ProductInfo } from './ProductInfo';

export interface Product {
  id: string;
  productInfoId: string;
  category: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  productInfo: ProductInfo;
}
