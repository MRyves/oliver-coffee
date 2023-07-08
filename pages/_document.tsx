import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import i18nextConfig from '../next-i18next.config'


export default function Document(props: DocumentProps) {

  const currentLocale =
      props.__NEXT_DATA__.locale ??
      i18nextConfig.i18n.defaultLocale

  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
