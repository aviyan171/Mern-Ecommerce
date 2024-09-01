import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'shared/store/store'

type Props = {
  children: React.ReactNode
}
export function StoreWrapper({ children }: Props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  )
}
