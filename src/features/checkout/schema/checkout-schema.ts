import { z } from 'zod'

export const CheckOutSchema = z.object({
  country: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  pinCode: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email()
})
