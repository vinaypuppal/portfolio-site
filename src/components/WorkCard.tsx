import { ArrowRight } from 'lucide-react'
import type { Work } from '../content/data/works'

interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-gray-700/50 hover:border-gray-600">
      <div className="aspect-video bg-gray-900 relative overflow-hidden">
        <img
          src={work.thumbnail}
          alt={work.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 right-3 text-2xl bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg">
          {work.icon}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
          {work.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {work.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-500 font-medium">
            {new Date(work.date * 1000).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </span>

          <a
            href={work.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-medium group-hover:gap-2"
          >
            View Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

interface SimpleWorkCardProps {
  work: Work
}

export function SimpleWorkCard({ work }: SimpleWorkCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="aspect-video bg-gray-900 relative overflow-hidden">
        <img
          src={work.thumbnail}
          alt={work.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 text-2xl">{work.icon}</div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{work.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {new Date(work.date * 1000).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </span>

          <a
            href={work.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Demo →
          </a>
        </div>
      </div>
    </div>
  )
}
