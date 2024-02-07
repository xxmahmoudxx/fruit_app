import { Categorys } from "../categorys/categorys";

export interface Fruits {
    id: number;
  name: string;
  quantity: number;
  price: number;
  category:Categorys;
}
