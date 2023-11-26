import React from 'react'
import Head from 'next/head'

function Header() {
  return (
    <Head>
        <title> JCHU Portfolio </title>
        <meta name="application-name" content="JCHU Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JCHU Portfolio" />
        <meta name="description" content="Best JCHU Portfolio in the world" />
        <meta name="theme-color" content="#000000" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-256x256.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    </Head>
  )
}

export default Header