import Link from "next/link";

import {
  IconArrowRight,
  IconBolt,
  IconBrandGithub,
  IconCheck,
  IconCode,
  IconMail,
} from "@tabler/icons-react";

import CopyButton from "@/components/copy-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="w-full bg-indigo-50 py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-indigo-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-5xl xl:text-6xl/none dark:text-indigo-100">
                  Emails are hard
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-300">
                  ...but they don&apos;t have to make you cry in the server
                  room. MJ2R makes email templates so easy, your cat could do it
                  (if they had opposable thumbs).
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                  Get Started
                  <IconArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link
                  href="https://github.com/lejbl/mj2r"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline">
                    <IconBrandGithub className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-lg border border-indigo-100 bg-white shadow-xl dark:border-indigo-800 dark:bg-gray-800">
                <div className="absolute top-0 right-0 left-0 flex h-8 items-center gap-1 bg-gray-100 px-4 dark:bg-gray-700">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs text-gray-500 dark:text-gray-400">
                    Email Template Preview
                  </div>
                </div>
                <div className="px-6 pt-10 pb-6">
                  <div className="flex h-full min-h-[240px] w-full items-center justify-center rounded border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                    <IconMail className="h-16 w-16 text-indigo-300 dark:text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="focus:ring-ring inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-2.5 py-0.5 text-xs font-semibold text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-indigo-500">
                Free & Open Source
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-5xl dark:text-indigo-100">
                Create beautiful email templates
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                MJ2R is the free and open-source tool that makes creating email
                templates as easy as sending a meme to your coworkers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                <IconBolt className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                  Lightning Fast
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create email templates in minutes, not hours. Your
                  productivity will skyrocket.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                <IconCode className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                  Developer Friendly
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Built by developers, for developers. Simple API that
                  won&apos;t make you pull your hair out.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                <IconBrandGithub className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                  Open Source
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Completely free and open source. Customize it to your
                  heart&apos;s content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-4xl md:text-5xl dark:text-indigo-100">
                Trusted by industry leaders
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join the growing list of companies that rely on MJ2R for their
                email template needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
            <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4">
              <div className="flex items-center justify-center p-4 grayscale transition hover:grayscale-0">
                <div className="relative h-16 w-32 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center rounded-md border border-gray-200 bg-white text-2xl font-bold text-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:text-indigo-400">
                    Henkel
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 grayscale transition hover:grayscale-0">
                <div className="relative h-16 w-32 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center rounded-md border border-gray-200 bg-white text-xl font-bold text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500">
                    Company
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 grayscale transition hover:grayscale-0">
                <div className="relative h-16 w-32 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center rounded-md border border-gray-200 bg-white text-xl font-bold text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500">
                    Company
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 grayscale transition hover:grayscale-0">
                <div className="relative h-16 w-32 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center rounded-md border border-gray-200 bg-white text-xl font-bold text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500">
                    Company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-indigo-600 py-12 text-white md:py-24 lg:py-32 dark:bg-indigo-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get started in seconds
              </h2>
              <p className="max-w-[600px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Just run this simple command to start creating beautiful email
                templates today.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="relative">
                <div className="flex items-center justify-between rounded-md border border-indigo-400 bg-indigo-700 px-4 py-3 text-sm font-medium text-indigo-50 dark:border-indigo-700 dark:bg-indigo-900">
                  <code className="font-mono">
                    npx degit https://github.com/impeterk/mj2r
                  </code>
                  <CopyButton text="npx degit https://github.com/impeterk/mj2r" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-4xl dark:text-indigo-100">
                  Say goodbye to email headaches
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  MJ2R handles all the complex parts of email template creation
                  so you can focus on what matters - creating beautiful emails
                  that convert.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <IconCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Responsive templates that work on all devices</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Compatible with all major email clients</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Easy customization with simple API</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Zero dependencies, lightweight implementation</span>
                </li>
              </ul>
              <div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                  Get Started
                  <IconArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-lg border border-indigo-100 bg-white shadow-xl dark:border-indigo-800 dark:bg-gray-800">
                <div className="absolute top-0 right-0 left-0 flex h-8 items-center gap-1 bg-gray-100 px-4 dark:bg-gray-700">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs text-gray-500 dark:text-gray-400">
                    Code Editor
                  </div>
                </div>
                <div className="px-6 pt-10 pb-6">
                  <pre className="h-[240px] overflow-auto rounded border border-gray-200 bg-gray-50 p-4 text-left text-xs dark:border-gray-700 dark:bg-gray-900">
                    <code className="text-gray-800 dark:text-gray-200">
                      {`import { MJ2R } from 'mj2r';

// Create a new email template
const template = new MJ2R();

// Add content to your template
template.addHeader({
  logo: 'https://yourcompany.com/logo.png',
  title: 'Welcome to Our Service!'
});

template.addSection({
  title: 'Getting Started',
  content: 'Here are some tips to help you get started...'
});

// Generate the HTML
const html = template.render();

// That's it! Your email template is ready to use`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-indigo-50 py-12 md:py-24 lg:py-32 dark:bg-indigo-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-4xl dark:text-indigo-100">
                Ready to make email templates easy?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join the growing community of developers who&apos;ve discovered
                the joy of email template creation with MJ2R.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Get Started
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link
                href="https://github.com/lejbl/mj2r"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline">
                  <IconBrandGithub className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
