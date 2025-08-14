import { cn } from '../utils/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'max-w-4xl' | 'max-w-6xl' | 'max-w-7xl'
}

export function Container({ children, className, maxWidth = 'max-w-6xl' }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4', maxWidth, className)}>
      {children}
    </div>
  )
}
