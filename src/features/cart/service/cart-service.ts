import { useMutation } from '@tanstack/react-query'
import { applyDiscount } from '../api/cart-api'
import { toast } from 'react-toastify'
import { TOAST_MESSAGE } from '../constants/cart-constants'
import { useAppDispatch } from 'shared/store/hooks'
import { setDiscountedAmount } from '../store/CartSlice'

export const useApplyDiscountMutation = () => {
  const dispatch = useAppDispatch()
  const mutation = useMutation({
    mutationFn: (data: { code: string }) => applyDiscount(data),
    onSuccess(res, context) {
      dispatch(
        setDiscountedAmount({
          couponName: context.code,
          discountAmount: res.data.discount
        })
      )
      toast(TOAST_MESSAGE.discountAppliedSuccessfully, { type: 'success' })
    },
    onError(err) {
      toast(err.message, { type: 'error' })
    }
  })
  return mutation
}
