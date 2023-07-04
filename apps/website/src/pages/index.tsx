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

      <Container className="grid grid-cols-1 gap-12">
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

        <div>
          <h1 className="bg-gradient-to-r from-teal-200 to-lime-200 bg-clip-text py-8 text-center text-6xl font-extrabold text-transparent sm:text-7xl lg:text-8xl">
            onivue-apex
          </h1>
          <h3 className="text-base-content font-semibol mx-auto text-center text-2xl lg:text-3xl">
            Next.js & Tailwind CSS Monorepo Template
          </h3>
          <h3 className="text-warn font-semibol mx-auto text-center text-2xl lg:text-3xl">test</h3>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Lorem Ipsum!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates
              voluptatibus. Quisquam, voluptates voluptatibus.
            </p>
            <div className="card-actions justify-end">
              <Button>Read the docs</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
