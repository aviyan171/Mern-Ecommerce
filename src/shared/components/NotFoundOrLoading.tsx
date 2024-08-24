import LoadingSpinner from './LoadingSpinner'
import notFoundImg from '../assets/png/product-not-found.png'

export function NotFoundOrLoadingWrapper({ count, isLoading, children }: { count: number; isLoading: boolean; children: React.ReactNode }) {
  if (isLoading)
    return (
      <div className=" flex justify-center">
        <LoadingSpinner />
      </div>
    )

  if (!count) return <img src={notFoundImg} />
  return children
}
