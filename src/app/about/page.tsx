export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white">About PixelPulse</h1>
      <p className="mt-5 text-lg text-slate-300">
        PixelPulse is a gaming publication focused on honest reviews, immersive features, and the stories that shape the culture around games.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card p-5">
          <h2 className="text-xl font-bold text-white">Reviews</h2>
          <p className="mt-2 text-sm text-slate-300">Thoughtful write-ups on the titles worth your time.</p>
        </div>
        <div className="card p-5">
          <h2 className="text-xl font-bold text-white">Features</h2>
          <p className="mt-2 text-sm text-slate-300">Deep dives into mechanics, design, and culture.</p>
        </div>
        <div className="card p-5">
          <h2 className="text-xl font-bold text-white">Community</h2>
          <p className="mt-2 text-sm text-slate-300">A voice for players who care about what they love.</p>
        </div>
      </div>
    </div>
  )
}
