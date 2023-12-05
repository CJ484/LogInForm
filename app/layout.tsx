import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authorization App',
  description: 'A simple login form to demonstrate Next.js usage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Authorization App</title>
      </head>
      <body className={inter.className}>
        {children}
        <div id="particles-js"></div>
        <script src="particles.js"></script>
      </body>
    </html>
  );
}
