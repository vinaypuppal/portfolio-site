import { Link, rootRouteId, useMatch, useRouter } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  })

  console.error('DefaultCatchBoundary Error:', error)

  const errorMessage = error?.message || 'An unexpected error occurred'
  const errorName = error?.name || 'Error'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse" />
          <AlertTriangle className="w-32 h-32 mx-auto text-orange-400 relative" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
            Oops! Something went wrong
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-gray-300">{errorName}</p>
            <p className="text-gray-400 max-w-md mx-auto">
              {errorMessage}
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-sm text-gray-400">
            Don't worry, we've logged this error and will look into it. 
            You can try refreshing the page or going back to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.invalidate()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 font-medium border border-gray-700"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          {isRoot ? (
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all hover:scale-105 font-medium"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          ) : (
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all hover:scale-105 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
