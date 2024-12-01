import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Malek Hammoud. A programmer and robotics enthusiast driven by curiosity!
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey in tech began back in Lebanon, where I was born. I moved to Canada in 2015 at age 8, and in
              Grade 3, I started exploring programming with Scratch. Those first projects sparked my interest, and by
              Grade 7, I was diving into JavaScript on Khan Academy. Coding quickly became a passion, and I’ve been
              learning and building ever since.
            </p>
            <p>
              Today, I love creating websites, building games, and designing autonomous robots. Learning on my own gave
              me freedom to explore my interests in new ways, which led me to experiment with machine learning and
              robotics starting in Grade 9. Since then, I've taken on a variety of projects, from web applications to
              complex robotics systems.
            </p>
            <p>
              As a tech enthusiast, I’m constantly pushing myself to innovate and solve real-world challenges through
              technology. Whether it's programming a new application, developing an AI model, or building a robot, I'm
              passionate about expanding my skills and contributing to meaningful projects. I'm excited to keep learning
              and sharing my work with others!
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/mhammoud-os" icon={GitHubIcon} className="mt-4">
              View my GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/malekhammoud/" icon={LinkedInIcon} className="mt-4">
              Let's connect on LinkedIn!
            </SocialLink>
            <SocialLink
                href="mailto:malek@malekhammoud.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              malek@malekhammoud.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
