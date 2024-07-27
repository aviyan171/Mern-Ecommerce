import { useAppSelector } from 'shared/store/hooks'
import { LoadingScreen } from './LoadingScreen'

export function LoaderWithBgBlur({ children }: { children?: React.ReactNode }) {
  const isLoading = useAppSelector(({ user }) => user.isLoading)

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div className={`${isLoading && 'blur-sm'}`}>{children}</div>
    </div>
  )
}
