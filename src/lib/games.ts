import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content', 'games')

export type Game = {
  slug: string
  title: string
  date: string
  platform: string
  excerpt: string
  emoji?: string
  content: string
}

export async function getAllGames(): Promise<Game[]> {
  const files = fs.readdirSync(contentDir)

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const fullPath = path.join(contentDir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: file.replace(/\.md$/, ''),
        title: data.title || 'Untitled review',
        date: data.date || 'Unknown date',
        platform: data.platform || 'PC',
        excerpt: data.excerpt || 'A gaming feature worth checking out.',
        emoji: data.emoji || '🎮',
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getGame(slug: string): Promise<Game | null> {
  const fullPath = path.join(contentDir, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || 'Untitled review',
    date: data.date || 'Unknown date',
    platform: data.platform || 'PC',
    excerpt: data.excerpt || 'A gaming feature worth checking out.',
    emoji: data.emoji || '🎮',
    content,
  }
}
