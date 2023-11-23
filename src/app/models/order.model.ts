import { CandleInterface } from "./candle.model";
import { CustomerInterFace } from "./customer.model";

export interface OrderInterface{
  id?:number;
  orderDate?:string;
  totalPrice?:number;
  customer?:CustomerInterFace;
  candles?:CandleInterface[];
}
