import { Loader as ReactLoader } from 'lucide-react'

export function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ReactLoader size={100} />
      <p className="mt-10 text-5xl text-center ml-20">Loading......</p>
    </div>
  )
}
