import { Suspense } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Routes } from 'react-router-dom'

function Router({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex justify-center items-center ">
          <TailSpin height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" visible={true} />
        </div>
      }
    >
      <Routes>{children}</Routes>
    </Suspense>
  )
}

export default Router
