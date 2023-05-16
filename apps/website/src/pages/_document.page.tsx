import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";
import { getCspContent } from "utils";

class MyDocument extends Document {
  static override async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  override render() {
    const csp = getCspContent(NextScript.getInlineScriptSource(this.props));

    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
