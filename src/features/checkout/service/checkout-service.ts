import { useMutation } from '@tanstack/react-query'
import { OrderRequestBody } from '../interface'
import * as CheckoutApi from '../api/checkout-api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { UI_ROUTES } from 'shared/constants'
import { useAppDispatch } from 'shared/store/hooks'
import { removeAllCartItems } from 'features/cart/store/CartSlice'

export const useCreateOrderMutation = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const mutation = useMutation({
    mutationFn: ({ data }: { data: OrderRequestBody }) => CheckoutApi.createOrder(data),
    onSuccess(res) {
      toast.success(res.message)
      navigate(UI_ROUTES.home)
      dispatch(removeAllCartItems())
    },
    onError(error) {
      toast.error(error.message)
    }
  })
  return mutation
}
