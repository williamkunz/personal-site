import React from 'react'
import App from 'next/app'

import Head from 'next/head'

class MyApp extends App {
  componentDidCatch = () => (
    <p>Something is wrong and I am not responsible.</p>
  )

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>William Kunz</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
