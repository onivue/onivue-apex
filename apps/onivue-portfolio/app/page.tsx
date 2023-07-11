import Image from "next/image";

export default function Home() {
  return (
    <div className="grid w-full gap-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 bg-zinc-800/30  bg-gradient-to-b from-inherit pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl  lg:border lg:bg-zinc-800/30 lg:p-2">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="grid gap-6 p-8">
        <div className="h-24 w-24 rounded-full bg-emerald-300 ring-4 ring-zinc-500" />

        <div className="grid gap-2">
          <p className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Software designer, founder, and gamer.
          </p>
          <p className="text-base text-zinc-400">
            make small things important & think out of the box.
          </p>
        </div>

        <div className="group flex gap-6">
          <div>🔥</div>
          <div>🌴</div>
          <div>🎮</div>
        </div>
      </div>
    </div>
  );
}
