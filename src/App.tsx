import { ReactQueryWrapper } from 'app-wrappers/ReactQueryWrapper'
import { StoreWrapper } from 'app-wrappers/StoreWrapper'
import { ToastContainer } from 'app-wrappers/ToastContainer'
import RoutePath from 'shared/routes/RoutePath'
import 'react-day-picker/dist/style.css'
import { AuthWrapper } from 'app-wrappers/AuthWrapper'

function App() {
  return (
    <div>
      <StoreWrapper>
        <AuthWrapper>
          <ReactQueryWrapper>
            <RoutePath />
          </ReactQueryWrapper>
          <ToastContainer />
        </AuthWrapper>
      </StoreWrapper>
    </div>
  )
}

export default App
