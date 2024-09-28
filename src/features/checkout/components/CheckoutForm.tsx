import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Divider from 'shared/components/Divider'
import { checkoutDefaultValues } from '../constants'
import { ICheckoutForm } from '../interface'
import CheckoutInput from './CheckoutInput'
import OrderDetails from './OrderDetails'
import { useAppSelector } from 'shared/store/hooks'
import { selectUser } from 'features/auth/login/auth-store/user-slice'
import { useEffect } from 'react'
import useCheckUserIsLoggedIn from 'shared/hooks/useCheckUserIsLoggedIn'
import { useLocation, useNavigate } from 'react-router-dom'
import { UI_ROUTES } from 'shared/constants'
import { checkoutPayload } from '../utils/checkout-utils'
import { selectCart, selectDiscountedDetail } from 'features/cart/store/CartSlice'
import { useCountTotalAmount } from 'shared/hooks/useCountTotalAmount'
import { convertUrlToLocalPath } from 'shared/utils'
import { CheckOutSchema } from '../schema/checkout-schema'

const defaultValues = checkoutDefaultValues
function CheckoutForm() {
  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(CheckOutSchema)
  })

  const user = useAppSelector(selectUser)
  const isUserLoggedIn = useCheckUserIsLoggedIn()
  const navigate = useNavigate()
  const location = useLocation()
  const discount = useAppSelector(selectDiscountedDetail).discountAmount || 0
  const orderItems = useAppSelector(selectCart) ?? []
  const { subTotal, totalPrice } = useCountTotalAmount()
  const userId = useAppSelector(selectUser)?._id || ''

  const { reset, formState } = methods

  useEffect(() => {
    if (user?.email) {
      reset({
        email: user.email
      })
    }
  }, [user?.email])

  const onSubmit = (data: ICheckoutForm) => {
    if (!isUserLoggedIn) {
      navigate(`${UI_ROUTES.login}?redirectUrl=${location.pathname}`)
      return
    }
    const payload = checkoutPayload(
      { ...data },
      {
        discount,
        orderItems: orderItems.map(items => {
          return {
            ...items,
            name: items.name,
            photo: convertUrlToLocalPath(items.photo),
            price: items.price.originalPrice,
            productId: items.productId,
            quantity: items.quantity
          }
        }),
        subtotal: subTotal,
        total: totalPrice,
        user: userId
      }
    )
    console.log({ payload })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="my-10">
          <div className="flex gap-10">
            <div className="flex-[4]">
              <p className="font-bold pb-6">BILLING DETAILS</p>
              <div className="mb-8">
                <Divider />
              </div>
              <CheckoutInput />
            </div>
            <div className="flex-[2] ">
              <OrderDetails />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default CheckoutForm
