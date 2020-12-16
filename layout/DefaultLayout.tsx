import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="플로브 - 나의 눈을 위한 안경 큐레이션 서비스" />
      <meta property="og:description" content="좋은 품질의 안경, 전문적인 검안과 서비스를 제공합니다." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
    </footer>
  </div>
)
export default Layout