import { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import LoadingSpinner from 'shared/components/LoadingSpinner'

function Router({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex justify-center items-center ">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>{children}</Routes>
    </Suspense>
  )
}

export default Router
