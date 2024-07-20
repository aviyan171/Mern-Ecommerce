import { Provider } from 'react-redux'
import { store } from 'shared/store/store'

type Props = {
  children: React.ReactNode
}
export function StoreWrapper({ children }: Props) {
  return <Provider store={store}>{children}</Provider>
}
