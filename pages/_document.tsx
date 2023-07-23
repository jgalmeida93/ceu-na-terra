import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Veja nossas fotos e confira a disponibilidade de nossa agenda."
          />
          <meta property="og:site_name" content="ceu-na-terra.vercel.app" />
          <meta
            property="og:description"
            content="Veja nossas fotos e confira a disponibilidade de nossa agenda."
          />
          <meta property="og:title" content="Next.js Conf 2022 Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Next.js Conf 2022 Pictures" />
          <meta
            name="twitter:description"
            content="Veja nossas fotos e confira a disponibilidade de nossa agenda."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
