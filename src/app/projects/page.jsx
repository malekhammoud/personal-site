import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
/*
import logoGreenGuardian from '@/images/logos/greenGuardian.svg';
import logoLinux from '@/images/logos/linux.svg';
import logoPlatformer from '@/images/logos/platformer.svg';
import logoCentralTechTribe from '@/images/logos/centralTechTribe.svg';
import logoMazeRobot from '@/images/logos/mazeRobot.svg';
import logoLitterLocator from '@/images/logos/litterLocator.svg';
import logoFocusReminder from '@/images/logos/focusReminder.svg';
*/



const projects = [
  {
    name: 'GreenGuardian',
    description:
        'An autonomous robot prototype that identifies and precisely sprays weeds, minimizing herbicide use and reducing environmental impact. November combines 3D printing, image processing, and obstacle avoidance for efficient agricultural care.',
    link: { href: 'https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination', label: 'Learn More' },
  //  logo: logoGreenGuardian,
  },
  {
    name: 'Linux Exploration',
    description:
        'My journey into Linux began with a Chromebook, where I learned to work without a GUI to overcome its limitations. Later, I dual-booted Ubuntu on my Acer laptop, a choice that shapes my programming environment today.',
    link: { href: '#', label: 'This site is hosted on Ubuntu Server' },
  //  logo: logoLinux,
  },
  {
    name: '1v1 Platformer Game',
    description:
        'Collaborative Java game project for Grade 11, featuring a 1v1 platformer where players compete to land on top of each other. I developed the player class for collision handling, implemented keyboard inputs, and integrated the intro screen with the main program.',
    link: { href: 'https://github.com/mhammoud-os/JavaProject', label: 'Project Overview' },
  //  logo: logoPlatformer,
  },
  {
    name: 'Central Tech Tribe',
    description:
        'Website built using React with backend functionality and MySQL, created as a programming club project. It serves the school community, showcasing my experience with full-stack development and server management.',
    link: { href: 'https://centraltechtribe.website', label: 'Currently In Development...' },
  //  logo: logoCentralTechTribe,
  },
  {
    name: 'Maze-Solving Robot Car',
    description:
        'For the 2023 award winning TVSEF project, I developed a robot car capable of autonomously navigating a maze, demonstrating principles of pathfinding and obstacle avoidance in robotics.',
    link: { href: 'https://github.com/mhammoud-os/Real-World-Graph-Theory-Simulation', label: '2023 TVSEF Project' },
  //  logo: logoMazeRobot,
  },
  {
    name: 'LitterLocator',
    description:
        'An app built for Hack49 where users can report litter, access an interactive dashboard, and use GPS navigation to locate trash, promoting environmental sustainability.',
    link: { href: 'https://github.com/mhammoud-os/EcoScout', label: 'EcoScout' },
  //  logo: logoLitterLocator,
  },
  {
    name: 'Focus Reminder App',
    description:
        'Electron-based application that helps users track focus days, log progress, and upload documents. Provides stats on productivity and reasons for missed days, ideal for users looking to maintain consistent focus.',
    link: { href: 'https://github.com/mhammoud-os/Project-Reminder', label: 'Download App' },
   // logo: logoFocusReminder,
  },
]

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
        title= "Projects That Fuel My Passion for Innovation"
        intro= "From robotics to full-stack development, here are some of the projects I've poured my creativity into. Each represents a step in my journey to create solutions with real-world impact. Many are open-source, so feel free to explore, use, or improve them as you see fit!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            {/*


            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            */}
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
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
