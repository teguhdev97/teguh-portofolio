import { schemaMarkup } from "@/lib/schema-markup";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class PortfolioDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale || "id" };
  }

  render() {
    const language = this.props.locale === "jp" ? "ja" : this.props.locale;
    return (
      <Html lang={language}>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
