import { Codepen, Flame, Github, Linkedin, Twitter } from 'lucide-react'
import { cn } from '../utils/cn'

export type SocialLink = {
  name: string
  url: string
}

const getIconComponent = (name: string) => {
  switch (name) {
    case 'github':
      return Github
    case 'linkedin':
      return Linkedin
    case 'twitter':
      return Twitter
    case 'codepen':
      return Codepen
    case 'fcc':
      return Flame
    default:
      return null
  }
}

interface SocialIconsProps {
  links: SocialLink[]
  className?: string
  iconClassName?: string
}

export function SocialIcons({ links, className, iconClassName = 'w-5 h-5' }: SocialIconsProps) {
  return (
    <div className={cn('flex gap-3', className)}>
      {links.map((link) => {
        const IconComponent = getIconComponent(link.name)

        if (!IconComponent) return null

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-110"
            aria-label={link.name}
          >
            <IconComponent className={iconClassName} />
          </a>
        )
      })}
    </div>
  )
}

interface SocialIconsInlineProps extends SocialIconsProps {
  linkClassName?: string
}

export function SocialIconsInline({
  links,
  className,
  iconClassName = 'w-5 h-5',
  linkClassName,
}: SocialIconsInlineProps) {
  return (
    <div className={cn('flex gap-3', className)}>
      {links.map((link) => {
        const IconComponent = getIconComponent(link.name)

        if (!IconComponent) return null

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all hover:scale-110 border border-gray-700/50',
              linkClassName,
            )}
            aria-label={link.name}
          >
            <IconComponent className={iconClassName} />
          </a>
        )
      })}
    </div>
  )
}
