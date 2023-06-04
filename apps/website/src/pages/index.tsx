import { Button, Container } from "@onivue/ui";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, themes, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Head>
        <title>onivue-apex — Next.js & Tailwind CSS Monorepo Template</title>
        <meta
          name="description"
          content="A monorepo template using TypeScript, Next.js, Tailwind CSS, Storybook, Jest, Lighthouse, ESLint, CommitLint, and Prettier."
        />
      </Head>

      <Container>
        {mounted && (
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              {theme}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-200 rounded-box w-52 p-2 shadow"
            >
              {themes.map((t) => (
                <li
                  key={t}
                  onClick={() => {
                    setTheme(t);
                  }}
                >
                  <a>{t}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <main className="grid pb-8 pt-16 sm:pt-24">
          <h1 className="text-base-content mx-auto text-center text-6xl font-extrabold dark:text-white sm:text-7xl lg:text-8xl">
            Next.js & Tailwind CSS Monorepo Template
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text py-8 text-transparent">
              onivue-apex
            </span>
          </h1>

          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <Button>Read the docs</Button>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
