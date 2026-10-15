import Link from 'next/link'
import { getAllGames } from '@/lib/games'

export default async function HomePage() {
  const games = await getAllGames()
  const featured = games.slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Level up your play
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Reviews, news, and stories from the world of gaming.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Discover standout titles, read community-driven takes, and keep up with what matters most in the gaming scene.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/games" className="rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500">
              Explore games
            </Link>
            <Link href="/about" className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
              About us
            </Link>
          </div>
        </div>

        <div className="card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Featured drop</p>
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-900 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-100">Hot pick</p>
            <h2 className="mt-3 text-3xl font-bold text-white">{featured[0]?.title || 'New Review'}</h2>
            <p className="mt-3 text-sm text-violet-100">{featured[0]?.excerpt || 'Fresh insight on a must-play release.'}</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Latest reads</h2>
          <Link href="/games" className="text-sm font-semibold text-violet-300 hover:text-violet-200">
            View all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((game) => (
            <article key={game.slug} className="card overflow-hidden">
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 text-4xl">
                {game.emoji || '🎮'}
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-slate-400">
                  <span>{game.platform}</span>
                  <span>{game.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{game.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{game.excerpt}</p>
                <Link href={`/games/${game.slug}`} className="mt-5 inline-block text-sm font-semibold text-violet-300 hover:text-violet-200">
                  Read story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
