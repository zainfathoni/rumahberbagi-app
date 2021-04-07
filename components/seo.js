import Head from 'next/head'
import { useRouter } from 'next/router'
import * as React from 'react'

export const SEO = ({ title: _title, description: _description, image: _image }) => {
  const title = _title ? `${_title} | Rumah Berbagi` : 'Tahun Prasekolahku | Kelas Rumah Berbagi'
  const description =
    _description ?? 'Membangun fondasi pendidikan prasekolah PAUD dan TK dengan dasar-dasar filosofi Charlotte Mason'
  const image = _image ?? '/rumah-berbagi.jpeg'

  const router = useRouter()
  const url = 'https://app.rumahberbagi.com' + (router.pathname === '/' ? '' : router.pathname)

  return (
    <Head>
      <title key='title'>{title}</title>

      <meta key='meta-title' name='title' content={title} />
      <meta key='meta-description' name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta key='og-url' property='og:url' content={url} />
      <meta key='og-title' property='og:title' content={title} />
      <meta key='og-description' property='og:description' content={description} />
      <meta key='og-image' property='og:image' content={image} />

      <meta key='twitter-card' property='twitter:card' content='summary_large_image' />
      <meta key='twitter-url' property='twitter:url' content={url} />
      <meta key='twitter-title' property='twitter:title' content={title} />
      <meta key='twitter-description' property='twitter:description' content={description} />
      <meta key='twitter-image' property='twitter:image' content={image} />

      <link rel='icon' href='/rumah-berbagi.jpeg' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
    </Head>
  )
}
