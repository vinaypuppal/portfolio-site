import type { WorkCategory } from '../content/data/works'
import { cn } from '../utils/cn'

interface Category {
  value: WorkCategory | 'all'
  label: string
  count: number
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: WorkCategory | 'all'
  onCategoryChange: (category: WorkCategory | 'all') => void
  className?: string
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  className,
}: CategoryFilterProps) {
  return (
    <div className={cn('flex flex-wrap gap-2 sm:gap-3 mb-8', className)}>
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            'px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 border',
            selectedCategory === category.value
              ? 'bg-lime-500/10 border-lime-500 text-lime-400'
              : 'bg-slate-800 border-slate-700 text-gray-300 hover:bg-slate-700 hover:border-slate-600',
          )}
        >
          {category.label} ({category.count})
        </button>
      ))}
    </div>
  )
}
