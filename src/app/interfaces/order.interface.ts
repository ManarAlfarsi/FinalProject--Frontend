import { CandleInterface } from "./candle.interface";
import { CustomerInterFace } from "./customer.interface";

export interface OrderInterface{
  id?:number;
  orderDate?:string;
  totalPrice?:number;
  customer?:CustomerInterFace;
  candles?:CandleInterface[];
}
