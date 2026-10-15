import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'PixelPulse',
  description: 'Gaming reviews, features, and community coverage.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
