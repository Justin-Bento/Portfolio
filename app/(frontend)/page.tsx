import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const navLinks = ["Home", "Projects", "About", "Contact"];

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 max-h-dvh bg-white">
        {/* Header Card */}
        <Card className="col-span-12">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <span className="flex flex-1 items-center gap-4 justify-start">
                <Logo />
              </span>
              <ul className="flex flex-1 items-center gap-4 justify-end">
                {navLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base dark:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
        {/* Main Hero Section */}
        <Card className="col-span-12 min-h-[50dvh] flex items-center justify-center">
          <div className="space-y-5 px-4 py-5 sm:p-6 text-center">
            <h1 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">Hi, my name is</h1>
            <h1 className="text-5xl font-bold text-zinc-950 dark:text-white">Justin Bento</h1>
            <p className="text-3xl font-bold text-zinc-500 dark:text-white">I build things for the web.</p>
          </div>
        </Card>
        {/* About Me Card */}
        <Card className="col-span-12 lg:col-span-4 h-[25vh]">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">About Me</h2>
          </div>
        </Card>
        {/* Projects Card */}
        <Card className="col-span-12 lg:col-span-4 h-[25vh]">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">
              Some Things I've Built
            </h2>
          </div>
        </Card>
        {/* Work Experience Card */}
        <Card className="col-span-12 lg:col-span-4 h-[25vh]">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">
              Where I've Worked
            </h2>
          </div>
        </Card>
        {/* Footer Card */}
        <Card className="col-span-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">Footer</h2>
          </div>
        </Card>
      </main>
    </>
  );
}
