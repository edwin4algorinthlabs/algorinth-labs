import './globals.css'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-poppins', })

export const metadata = {
  title: 'Algorinth Labs | Coming Soon',
  description: 'This is the coming soon page of Algorinth Labs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`} >
      <body>{children}</body>
    </html>
  )
}
