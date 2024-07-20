import { ReactQueryWrapper } from 'app-wrappers/ReactQueryWrapper'
import { StoreWrapper } from 'app-wrappers/StoreWrapper'
import { ToastContainer } from 'app-wrappers/ToastContainer'
import RoutePath from 'shared/routes/RoutePath'
import 'react-day-picker/dist/style.css'

function App() {
  return (
    <div>
      <StoreWrapper>
        <ReactQueryWrapper>
          <RoutePath />
        </ReactQueryWrapper>
        <ToastContainer />
      </StoreWrapper>
    </div>
  )
}

export default App
