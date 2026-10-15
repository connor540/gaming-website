import Link from 'next/link'
import { getAllGames } from '@/lib/games'

export default async function GamesPage() {
  const games = await getAllGames()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Archive</p>
          <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Games & reviews</h1>
        </div>
        <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white">
          Back home
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {games.map((game) => (
          <article key={game.slug} className="card overflow-hidden">
            <div className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-700 to-slate-800 text-5xl">
              {game.emoji || '🎮'}
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <span>{game.platform}</span>
                <span>{game.date}</span>
              </div>
              <h2 className="text-xl font-bold text-white">{game.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{game.excerpt}</p>
              <Link href={`/games/${game.slug}`} className="mt-5 inline-block text-sm font-semibold text-violet-300 hover:text-violet-200">
                Read review →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
