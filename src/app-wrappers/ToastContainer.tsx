import { ToastContainer as ReactToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function ToastContainer() {
  return <ReactToastContainer closeOnClick position="bottom-center" pauseOnHover theme="colored" hideProgressBar autoClose={5000} />
}
