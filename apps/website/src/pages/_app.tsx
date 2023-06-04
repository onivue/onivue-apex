import "@/styles.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={["dark", "light", "cyberpunk"]}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
