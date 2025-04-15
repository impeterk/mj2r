import Link from "next/link";

import { IconBrandGithub, IconMail, IconMailCode } from "@tabler/icons-react";

import { Button } from "./ui/button";
import ThemeSwitch from "./ui/theme-switch";

export const Header = () => {
  return (
    <header className="bg-background text-foreground border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Button asChild variant={"link"}>
          <Link href="/">
            <IconMailCode className="mr-2" />
            <span className="text-xl">MJ2R</span>
          </Link>
        </Button>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="text-muted-foreground p-4 text-center">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <IconMail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MJ2R. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Button asChild variant={"link"}>
            <Link
              href="https://github.com/impeterk/mj2r"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
            >
              <IconBrandGithub className="mr-2" />
              GitHub
            </Link>
          </Button>

          <Button asChild variant={"link"}>
            <Link
              href="#"
              className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
            >
              Documentation
            </Link>
          </Button>
          <Button asChild variant={"link"}>
            <Link
              href="#"
              className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
            >
              Examples
            </Link>
          </Button>
        </nav>
      </div>
    </footer>
  );
};
