import { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { LoadingScreen } from 'shared/components/LoadingScreen'

function Router({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>{children}</Routes>
    </Suspense>
  )
}

export default Router
