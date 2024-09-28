import { ICheckoutForm, OrderItem, OrderRequestBody } from '../interface'

export const checkoutPayload = (
  data: ICheckoutForm,
  {
    discount,
    orderItems,
    subtotal,
    user,
    total
  }: { discount: number; orderItems: OrderItem[]; subtotal: number; user: string; total: number }
): OrderRequestBody => {
  const tax = 200
  return {
    shippingInfo: {
      address: `${data.city},${data.country}`,
      city: data.city,
      country: data.country,
      email: data.email,
      phoneNo: Number(data.phone),
      pinCode: Number(data.pinCode),
      state: data.state
    },
    discount,
    orderItems,
    shippingCharges: 0,
    subtotal,
    tax,
    user,
    total: total + tax
  }
}
