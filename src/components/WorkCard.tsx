import { ArrowRight } from 'lucide-react'
import type { Work } from '../content/data/works'

interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group relative">
      {/* Gradient border effect */}
      <div className="card-angled-border" />

      {/* Card content */}
      <div className="card-angled bg-slate-900 overflow-hidden hover:scale-[1.02] transition-all duration-300">
        {/* Image section */}
        <div className="aspect-video bg-slate-950 relative overflow-hidden">
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Angled divider */}
        <div className="card-divider" />

        {/* Content section */}
        <div className="p-5 bg-[#0f1729]">
          <h3 className="text-xl font-bold mb-2 text-white">{work.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-normal">
            {work.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {new Date(work.date * 1000).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
              })}
            </span>

            <a
              href={work.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 transition-colors font-medium group-hover:gap-2"
            >
              View Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
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
    <div className="group relative">
      {/* Gradient border effect */}
      <div className="card-angled-border" />

      {/* Card content */}
      <div className="card-angled bg-slate-900 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        {/* Image section */}
        <div className="aspect-video bg-slate-950 relative overflow-hidden">
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Angled divider */}
        <div className="card-divider" />

        {/* Content section */}
        <div className="p-5 bg-[#0f1729]">
          <h3 className="text-xl font-bold mb-2 text-white">{work.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-normal">
            {work.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {new Date(work.date * 1000).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
              })}
            </span>

            <a
              href={work.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 transition-colors font-medium"
            >
              View Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
