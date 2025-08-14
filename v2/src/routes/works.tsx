import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { works, type WorkCategory } from '../content/data/works'
import { SimpleWorkCard } from '../components/WorkCard'
import { CategoryFilter } from '../components/CategoryFilter'
import { Container } from '../components/Container'
import { generatePageSeo } from '~/utils/pageSeo'

export const Route = createFileRoute('/works')({
  component: WorksPage,
  head: () => ({
    meta: generatePageSeo(
      'Projects',
      'Explore my portfolio of projects showcasing expertise in full-stack development, from complex web applications to innovative AI-powered solutions.',
      '/works'
    ),
  }),
})

function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | 'all'>('all')

  const categories: Array<{ value: WorkCategory | 'all'; label: string; count: number }> = [
    { value: 'all', label: 'All', count: works.length },
    { value: 'react', label: 'React', count: works.filter((w) => w.category === 'react').length },
    {
      value: 'vanilla',
      label: 'Vanilla JS',
      count: works.filter((w) => w.category === 'vanilla').length,
    },
    { value: 'node', label: 'Node.js', count: works.filter((w) => w.category === 'node').length },
  ]

  const filteredWorks = useMemo(() => {
    const filtered =
      selectedCategory === 'all'
        ? works
        : works.filter((work) => work.category === selectedCategory)

    // Sort by date (newest first)
    return filtered.sort((a, b) => b.date - a.date)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Container maxWidth="max-w-7xl" className="py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl font-bold mb-8">All My Works</h1>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
            <SimpleWorkCard key={work.title} work={work} />
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No works found in this category.</p>
          </div>
        )}
      </Container>
    </div>
  )
}
