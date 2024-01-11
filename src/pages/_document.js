import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          id="dark-theme-head-icon"
          rel="icon"
          href="/static/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
        <link
          id="light-theme-head-icon"
          rel="icon"
          href="/static/favicon-light.ico"
          media="(prefers-color-scheme: light)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
