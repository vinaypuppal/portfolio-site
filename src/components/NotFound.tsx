import { Link } from '@tanstack/react-router'
import { Home, ArrowLeft, AlertCircle } from 'lucide-react'

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
          <AlertCircle className="w-32 h-32 mx-auto text-blue-400 relative" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-200">Page Not Found</h2>
          <div className="text-gray-400 max-w-md mx-auto">
            {children || (
              <p>
                Oops! The page you're looking for seems to have wandered off into the digital void. 
                Let's get you back on track.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 font-medium border border-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all hover:scale-105 font-medium"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
