import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import SideBar from "@/components/Layout/SideBar/SideBar";
import "@/styles.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={["dark", "light", "cyberpunk"]}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
        />
        <title>onivue-...</title>
      </Head>
      {/* =========== PAGEWRAPPER =========== */}
      <div className="flex min-h-[100svh]">
        <SideBar width="20rem" />
        {/* =========== CONTENTWRAPPER =========== */}
        <div className="flex w-full flex-col ">
          <Header />
          {/* =========== MAINWRAPPER =========== */}
          <main className="w-full flex-1">
            <Component {...pageProps} />
          </main>
          {/* <RightSection /> */}
          {/* =========== END MAINWRAPPER =========== */}
          <Footer />
        </div>
        {/* =========== END CONTENTWRAPPER =========== */}
      </div>
      {/* =========== END PAGEWRAPPER =========== */}
    </ThemeProvider>
  );
}
