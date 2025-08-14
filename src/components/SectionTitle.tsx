import { cn } from '../utils/cn'

interface SectionTitleProps {
  children: React.ReactNode
  lineColor?: string
  className?: string
}

export function SectionTitle({
  children,
  lineColor = 'bg-blue-500',
  className,
}: SectionTitleProps) {
  return (
    <h2 className={cn('text-3xl font-bold flex items-center gap-3', className)}>
      <span className={cn('w-12 h-1 rounded', lineColor)} />
      {children}
    </h2>
  )
}
