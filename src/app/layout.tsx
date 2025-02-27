
import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import Navbar from './components/Navbar';
import { ThemeProviderWrapper } from './themes/ThemeContext';
 
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Paginas web", href: "/paginas-web", current: false },
  { name: "Apps moviles", href: "apps-moviles", current: false },
  { name: "Nosotros", href: "/nosotros", current: false },
  { name: "Contactanos", href: "/contacto", current: false },
];

export const metadata: Metadata = {
  title: 'ApexLogic',
  description: 'Generated by create next app',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProviderWrapper>
      <Navbar navigation={navigation}/>
        {children}
      </ThemeProviderWrapper>
        </body>
    </html>
  )
}