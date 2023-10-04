import './globals.css'
import { Rubik, Open_Sans } from 'next/font/google'
import Header from "@/components/shared/header"
import DisplayPrices from "@/components/shared/price-display/DisplayPrices"
import FooterContainer from "@/containers/Footer"


const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-rubik',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-open-sans',
})

export const metadata = {
  title: 'Algorinth Labs | Home',
  description: 'This is the coming soon page of Algorinth Labs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${openSans.variable}`} >
      <body className="w-full font-rubik relative z-0">
        <Header />
        {children}
        <DisplayPrices />
        <FooterContainer />
        </body>
    </html>
  )
}
