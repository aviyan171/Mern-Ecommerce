import { useNavigate } from 'react-router-dom'
import Button from 'shared/components/Button'
import { UI_ROUTES } from 'shared/constants'

function CartButtonGroup() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between">
      <Button text="Continue Shopping" onClick={() => navigate(UI_ROUTES.category)} background="white" />
    </div>
  )
}

export default CartButtonGroup
