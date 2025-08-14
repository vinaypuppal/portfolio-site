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
            'px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg transition-all duration-300',
            selectedCategory === category.value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          )}
        >
          {category.label} ({category.count})
        </button>
      ))}
    </div>
  )
}
