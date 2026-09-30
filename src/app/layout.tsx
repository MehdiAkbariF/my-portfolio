import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Designer & builder of digital products',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0B' },
    { media: '(prefers-color-scheme: light)', color: '#F7F7F8' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}