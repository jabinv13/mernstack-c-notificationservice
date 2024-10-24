import { OrderEvents, PaymentMode } from "../types";
import config from "config";

export const handleOrderText = (order) => {
  if (
    order.event_type === OrderEvents.ORDER_CREATE &&
    order.data.PaymentMode === PaymentMode.CASH
  )
    return `Thanku for your order .\n Your order id is : ${order.data._id} `;

  return "Thanku for your order";
};

export const handleOrderHtml = (order) => {
  //think abt proper checks
  //   if (
  //     order.event_type === OrderEvents.ORDER_CREATE &&
  //     order.data.PaymentMode === PaymentMode.CASH
  //   )
  return `<h3>Thanku for your order.</h3> 
    <div>Your orderId is :  <a href="${config.get("frontend.clientUI")}/order/${order.data._id}">${order.data._id}</a></div>
    
    `;

  return "Thanku for your order";
};
