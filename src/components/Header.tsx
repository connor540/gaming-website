import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-white">
          PixelPulse
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <Link href="/games" className="transition hover:text-white">Games</Link>
          <Link href="/about" className="transition hover:text-white">About</Link>
        </nav>
      </div>
    </header>
  )
}
