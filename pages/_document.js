import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Ahad Ali" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="TheWebDevelopers" />
        <meta name="description" content="TheWebDevelopers – Modern Digital Agency Website" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
