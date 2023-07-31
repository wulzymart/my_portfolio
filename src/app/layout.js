import './globals.css'
import { Inter, Open_Sans} from 'next/font/google'

export const inter = Inter({ 
  subsets: ['latin'],
  display: "swap",
  variable: "--font-inter"
})

export const openSans = Open_Sans({
  subsets:["latin"],
  display: "swap",
  variable: "--font-open-sans"
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${inter.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}