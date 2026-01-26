import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Dashboard Documentation',
    template: '%s – Dashboard Docs'
  }
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700 }}>Dashboard Docs</span>}
    projectLink="https://gitlab.com/hugo-dashboard"
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © Dashboard Documentation</Footer>

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://gitlab.com/hugo-dashboard/documentation/tree/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
