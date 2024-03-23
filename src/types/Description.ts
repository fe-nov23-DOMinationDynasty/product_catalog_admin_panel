import { ProductInfo } from './ProductInfo';

export interface Description {
  id: string;
  productInfoId?: string;
  ProductInfo?: ProductInfo;
  title: string;
  text: string[];
}
