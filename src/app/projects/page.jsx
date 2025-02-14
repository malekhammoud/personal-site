import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
/*LOGOS*/
import ai from '@/images/projects/ai.png';
import webdev from '@/images/projects/webdev.png';
import game from '@/images/projects/gamedev.png';
import robot from '@/images/projects/robot.png';


import p1 from '@/images/projects/green.png';
import p2 from '@/images/projects/linux.png';
import p3 from '@/images/projects/javagame.gif';
import p4 from '@/images/projects/centralweb.png';
import p5 from '@/images/projects/maze.gif';
import p6 from '@/images/projects/ecosoute.png';
import p7 from '@/images/projects/reminderapp.png';
import p8 from '@/images/projects/offshape.gif';
import p9 from '@/images/projects/posture.gif';
import p10 from '@/images/portrait.jpg';
/*Project images*/

const projects = [
  {
    name: 'GreenGuardian',
    description:
        'GreenGuardian is an autonomous robot that uses 3D printing, image processing, and obstacle avoidance to precisely spray weeds. It minimizes herbicide use and reduces environmental impact.',
    link: { href: 'https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination', label: '2024 CWSF Project Board >' },
    logo: robot,
    image: p1,
  },
  {
    name: 'Linux Exploration',
    description:
        'Linux Exploration chronicles my journey from using a Chromebook without a GUI to dual-booting Ubuntu on my Acer laptop. This experience has significantly shaped my programming environment.',
    link: { href: '#', label: '' },
    logo: webdev,
    image: p2,
  },
  {
    name: '1v1 Platformer Game',
    description:
        'The 1v1 Platformer Game is a collaborative Grade 11 Java project where players compete by landing on each other. It features collision handling, keyboard input, and an integrated intro screen.',
    link: { href: 'https://github.com/mhammoud-os/JavaProject', label: 'Github >' },
    logo: game,
    image: p3,
  },
  {
    name: 'Central Tech Tribe',
    description:
        'Central Tech Tribe is a React-based website with a MySQL backend built as a programming club project. It serves the school community and showcases full-stack development skills.',
    link: { href: 'https://central-server-theta.vercel.app/', label: 'Currently In Development...' },
    logo: webdev,
    image: p4,
  },
  {
    name: 'Maze-Solving Robot Car',
    description:
        'The Maze-Solving Robot Car is a 2023 award-winning TVSEF project that autonomously navigates a maze. It uses pathfinding and obstacle avoidance to reach its destination.',
    link: { href: 'https://github.com/mhammoud-os/Real-World-Graph-Theory-Simulation', label: '2023 TVSEF Project >' },
    logo: robot,
    image: p5,
  },
  {
    name: 'EcoScout',
    description:
        'EcoScout is a Hack49 app that lets users report litter, access an interactive dashboard, and navigate using GPS. It aims to promote environmental sustainability through community engagement.',
    link: { href: 'https://github.com/mhammoud-os/EcoScout', label: 'View the code >' },
    logo: webdev,
    image: p6,
  },
  {
    name: 'Reminder App',
    description:
        'The Focus Reminder App is an Electron-based tool that tracks focus days, logs progress, uploads documents, and provides productivity stats. It is designed to help users maintain consistent focus.',
    link: { href: 'https://github.com/mhammoud-os/Project-Reminder', label: 'Download The App >' },
    logo: webdev,
    image: p7,
  },
  {
    name: 'OffShape Website',
    description:
        'I created the website for my robotics team. It was a collaborative effort with two other people.',
    link: { href: 'https://offshape.vercel.app/', label: 'View The site >' },
    logo: webdev,
    image: p8,
  },
  {
    name: 'Posture Pall',
    description:
        'Posture Pall is a device that sprays you if you have bad posture. It is designed to help improve your posture by providing instant feedback.',
    link: { href: 'https://github.com/joaoP-santos/posturepal', label: 'See the video >' },
    logo: webdev,
    image: p9,
  }
]
/*
{
name: 'Libary Demo Site',
description:
    'Colaberated on a libary database, I helped find demo data and ',
link: { href: 'https://github.com/mhammoud-os/Project-Reminder', label: 'View The site' },
logo: webdev,
image: p10,
},
 */

function LinkIcon(props) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
        />
      </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
      <SimpleLayout
          title="Projects That Fuel My Passion for Innovation"
          intro="From robotics to full-stack development, here are some of the projects I've poured my creativity into. Many are open-source, so feel free to explore, use, or improve them as you see fit!"
      >
        <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
              <Card as="li" key={project.name}>
                {/*mall logo */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="h-8 w-8"
                      unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.PDescription>
                  <p>
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <Image
                          src={project.image}
                          alt={`${project.name} project image`}
                          className="h-full w-full object-cover"
                          unoptimized
                      />
                    </div>
                  </div>
                </Card.PDescription>

                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
          ))}
        </ul>
      </SimpleLayout>
  )
}
