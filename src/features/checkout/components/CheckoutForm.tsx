import { FormProvider, useForm } from 'react-hook-form'
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

const defaultValues = checkoutDefaultValues
function CheckoutForm() {
  const methods = useForm({
    defaultValues,
    mode: 'onChange'
  })

  const user = useAppSelector(selectUser)
  const isUserLoggedIn = useCheckUserIsLoggedIn()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectUrl = location.search.split('=')[1]
  console.log({ redirectUrl }, '............')

  const { reset } = methods

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
    console.log(data)
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
