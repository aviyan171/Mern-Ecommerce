import { Navigate, Outlet } from 'react-router-dom'
import { UI_ROUTES } from 'shared/constants'
import { useCountTotalAmount } from 'shared/hooks/useCountTotalAmount'

export function CartLayout() {
  const { totalPrice } = useCountTotalAmount()

  if (!totalPrice) return <Navigate to={UI_ROUTES.home} />
  return <Outlet />
}
