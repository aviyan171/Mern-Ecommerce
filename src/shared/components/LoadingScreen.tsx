import { Circles } from 'react-loader-spinner'

export function LoadingScreen() {
  return (
    <div className="absolute z-10 left-[50%] top-[50%]">
      <Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" visible={true} />
    </div>
  )
}
