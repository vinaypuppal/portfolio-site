import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, FileText, Mail } from 'lucide-react'
import { useMemo, useState } from 'react'
import { generatePageSeo } from '~/utils/pageSeo'
import { CategoryFilter } from '../components/CategoryFilter'
import { Container } from '../components/Container'
import { SectionTitle } from '../components/SectionTitle'
import { SocialIcons, SocialIconsInline } from '../components/SocialIcons'
import { WorkCard } from '../components/WorkCard'
import { siteConfig } from '../content/data/site-config'
import { type WorkCategory, works } from '../content/data/works'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: generatePageSeo(siteConfig.title, siteConfig.description, '/'),
  }),
})

function Home() {
  const {
    avatar,
    title,
    subtitle,
    email,
    city,
    country,
    company,
    socialLinks,
  } = siteConfig
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
    return filtered.sort((a, b) => b.date - a.date).slice(0, 6)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent" />
        <Container className="py-12 sm:py-16 md:py-24 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Avatar - shows first on mobile, second on desktop */}
            <div className="relative order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20" />
              <img
                src={avatar}
                alt={title}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-gray-700/50 relative shadow-2xl"
              />
            </div>

            {/* Content - shows second on mobile, first on desktop */}
            <div className="flex-1 space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-blue-400 font-medium">{subtitle}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {title}
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {company.position} at{' '}
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  {company.name}
                </a>{' '}
                specializing in {company.focus}.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                With 9+ years of experience, I drive innovation at the intersection of voice AI and
                customer intelligence, building scalable solutions that help businesses understand
                their customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105 font-medium text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get in Touch
                </a>
                <Link
                  to="/resume"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 font-medium border border-gray-700 text-sm sm:text-base"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Resume
                </Link>
              </div>

              <div className="flex justify-center lg:justify-start">
                <SocialIconsInline links={socialLinks} className="pt-2" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="works" className="py-20 bg-gray-900/50">
        <Container>
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <SectionTitle lineColor="bg-green-500" className="text-2xl sm:text-3xl">
              Featured Projects
            </SectionTitle>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl">
              A selection of projects showcasing my expertise in full-stack development, from
              complex web applications to innovative AI-powered solutions.
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all hover:scale-105 font-medium text-lg"
            >
              Explore All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

      <footer className="bg-gray-900/80 border-t border-gray-800">
        <Container className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {title}
              </h3>
              <p className="text-gray-400">{subtitle}</p>
              <p className="text-sm text-gray-500">
                {city}, {country}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-300">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#works" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
                <Link to="/resume" className="text-gray-400 hover:text-white transition-colors">
                  Resume
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-300">Connect</h4>
              <SocialIcons links={socialLinks} />
              <a
                href={`mailto:${email}`}
                className="inline-block text-gray-400 hover:text-white transition-colors"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} {title}. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  )
}
