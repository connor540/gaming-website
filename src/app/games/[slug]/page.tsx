import Link from 'next/link'
import { getAllGames, getGame } from '@/lib/games'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllGames().then((games) => games.map((game) => ({ slug: game.slug })))
}

export default async function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = await getGame(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/games" className="text-sm font-semibold text-violet-300 hover:text-violet-200">
        ← Back to games
      </Link>

      <header className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
        <div className="mb-5 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 to-slate-800 text-6xl">
          {game.emoji || '🎮'}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
          <span>{game.platform}</span>
          <span>•</span>
          <span>{game.date}</span>
        </div>
        <h1 className="mt-4 text-4xl font-black text-white">{game.title}</h1>
      </header>

      <article className="prose mt-8 max-w-none rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <ReactMarkdown>{game.content}</ReactMarkdown>
      </article>
    </div>
  )
}
